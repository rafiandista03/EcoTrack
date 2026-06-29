````markdown
# 🌱 EcoTrack

## Description

EcoTrack is a web-based waste monitoring system. The application records waste data, categorizes waste types, calculates total waste weight, and displays waste statistics. The system stores data in a SQLite database and provides REST API endpoints for data management.

## Prerequisites

Install the following software before running the application:

- Node.js v18 or later
- npm v9 or later
- Git

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecotrack.git
````

### 2. Navigate to the project directory

```bash
cd ecotrack
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

### 5. Open the application

```text
http://localhost:3000
```

## Usage

### Add a Waste Record

* Enter a waste location.
* Select a waste category.
* Enter the waste weight.
* Click **Save Data**.

### View Statistics

The dashboard displays:

* Total records
* Total waste weight
* Organic waste count
* Plastic waste count
* Paper waste count
* Other waste count

### Delete Data

* Click **Delete** to remove a record.
* Click **Delete All Data** to remove all records.

## Author

EcoTrack Development Team

```
```
