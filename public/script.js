const API_URL = "/api/v1/waste";

async function tampilkanData() {

    const response =
        await fetch(API_URL);

    const dataSampah =
        await response.json();

    const list =
        document.getElementById("listData");

    list.innerHTML = "";

    dataSampah.forEach((item, index) => {

        list.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.location}</td>
            <td>${item.category}</td>
            <td>${item.weight} Kg</td>
            <td>
                <button
                    class="delete-btn"
                    onclick="hapusData(${item.id})">
                    Hapus
                </button>
            </td>
        </tr>
        `;
    });

    updateStatistik(dataSampah);
    tampilkanSummary(dataSampah);
}

async function tambahData() {

    const lokasi =
        document.getElementById("lokasi").value.trim();

    const jenis =
        document.getElementById("jenis").value;

    const berat =
        parseFloat(
            document.getElementById("berat").value
        );

    if (
        lokasi === "" ||
        isNaN(berat)
    ) {
        alert("Harap isi semua data!");
        return;
    }

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
            location: lokasi,
            category: jenis,
            weight: berat
        })

    });

    document.getElementById("lokasi").value = "";
    document.getElementById("berat").value = "";

    tampilkanData();
    tampilkanNotifikasi(
        "Data berhasil disimpan!"
    );
}

async function hapusData(id) {

    if (
        confirm(
            "Yakin ingin menghapus data ini?"
        )
    ) {

        await fetch(
            `${API_URL}/${id}`,
            {
                method: "DELETE"
            }
        );

        tampilkanData();

        tampilkanNotifikasi(
            "Data berhasil dihapus!"
        );
    }
}

async function hapusSemuaData() {

    if (
        confirm(
            "Hapus semua data sampah?"
        )
    ) {

        await fetch(
            API_URL,
            {
                method: "DELETE"
            }
        );

        tampilkanData();

        tampilkanNotifikasi(
            "Semua data berhasil dihapus!"
        );
    }
}

function updateStatistik(dataSampah) {

    document.getElementById("totalData").innerText =
        dataSampah.length;

    const totalBerat =
        dataSampah.reduce(
            (total, item) =>
                total + item.weight,
            0
        );

    document.getElementById("totalBerat").innerText =
        totalBerat.toFixed(2);

    document.getElementById("organicCount").innerText =
        dataSampah.filter(
            item => item.category === "Organic"
        ).length;

    document.getElementById("plasticCount").innerText =
        dataSampah.filter(
            item => item.category === "Plastic"
        ).length;

    document.getElementById("paperCount").innerText =
        dataSampah.filter(
            item => item.category === "Paper"
        ).length;

    document.getElementById("othersCount").innerText =
        dataSampah.filter(
            item => item.category === "Others"
        ).length;
}

function tampilkanSummary(dataSampah) {

    const organic =
        dataSampah.filter(
            item => item.category === "Organic"
        ).length;

    const plastic =
        dataSampah.filter(
            item => item.category === "Plastic"
        ).length;

    const paper =
        dataSampah.filter(
            item => item.category === "Paper"
        ).length;

    const others =
        dataSampah.filter(
            item => item.category === "Others"
        ).length;

    document.getElementById("summaryList").innerHTML = `
        <li>🌿 Organic : ${organic}</li>
        <li>🧴 Plastic : ${plastic}</li>
        <li>📄 Paper : ${paper}</li>
        <li>📦 Others : ${others}</li>
    `;
}

function tampilkanNotifikasi(pesan) {

    const alertBox =
        document.getElementById("alert");

    alertBox.style.display = "block";
    alertBox.innerText = pesan;

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}

window.onload = tampilkanData;