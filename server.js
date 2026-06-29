const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const db = new sqlite3.Database("./database.db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS waste (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            location TEXT NOT NULL,
            category TEXT NOT NULL,
            weight REAL NOT NULL
        )
    `);

});

// GET ALL DATA
app.get("/api/v1/waste", (req, res) => {

    db.all(
        "SELECT * FROM waste ORDER BY id DESC",
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: err.message
                });
            }

            res.json(rows);

        }
    );

});

// INSERT DATA
app.post("/api/v1/waste", (req, res) => {

    const {
        location,
        category,
        weight
    } = req.body;

    if (!location || !category || !weight) {

        return res.status(400).json({
            status: "error",
            message: "All fields are required"
        });

    }

    db.run(
        `
        INSERT INTO waste
        (location, category, weight)
        VALUES (?, ?, ?)
        `,
        [location, category, weight],
        function (err) {

            if (err) {

                return res.status(500).json({
                    status: "error",
                    message: err.message
                });

            }

            res.status(201).json({
                status: "success",
                id: this.lastID
            });

        }
    );

});

// DELETE ONE
app.delete("/api/v1/waste/:id", (req, res) => {

    db.run(
        "DELETE FROM waste WHERE id = ?",
        [req.params.id],
        function (err) {

            if (err) {

                return res.status(500).json({
                    status: "error",
                    message: err.message
                });

            }

            res.json({
                status: "success",
                message: "Data deleted"
            });

        }
    );

});

// DELETE ALL
app.delete("/api/v1/waste", (req, res) => {

    db.run(
        "DELETE FROM waste",
        [],
        function (err) {

            if (err) {

                return res.status(500).json({
                    status: "error",
                    message: err.message
                });

            }

            res.json({
                status: "success",
                message: "All data deleted"
            });

        }
    );

});

app.listen(PORT, () => {

    console.log(
        `EcoTrack running at http://localhost:${PORT}`
    );

});