````markdown
# EcoTrack API Documentation

## Base URL

```text
http://localhost:3000/api
```

---

# GET /api/waste

## Description

This endpoint returns all waste records stored in the SQLite database.

### Request Parameters

None.

### Success Response

**Status:** `200 OK`

```json
[
  {
    "id": 1,
    "lokasi": "Campus",
    "jenis": "Organic",
    "berat": 5
  },
  {
    "id": 2,
    "lokasi": "City Park",
    "jenis": "Plastic",
    "berat": 3
  }
]
```

### Error Response

**Status:** `500 Internal Server Error`

```json
{
  "status": "error",
  "message": "Failed to retrieve waste records."
}
```

---

# GET /api/waste/:id

## Description

This endpoint returns a waste record based on its unique identifier.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | Integer | Yes | The unique identifier of the waste record. |

### Success Response

**Status:** `200 OK`

```json
{
  "id": 1,
  "lokasi": "Campus",
  "jenis": "Organic",
  "berat": 5
}
```

### Error Response

**Status:** `404 Not Found`

```json
{
  "status": "error",
  "message": "Waste record not found."
}
```

---

# POST /api/waste

## Description

This endpoint creates a new waste record and stores it in the SQLite database.

### Request Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| lokasi | String | Yes | Specifies the waste collection location. |
| jenis | String | Yes | Specifies the waste category (Organic, Plastic, Paper, or Others). |
| berat | Integer | Yes | Specifies the waste weight in kilograms. |

### Example Request

```json
{
  "lokasi": "Campus",
  "jenis": "Organic",
  "berat": 5
}
```

### Success Response

**Status:** `201 Created`

```json
{
  "status": "success",
  "message": "Waste record successfully created."
}
```

### Error Response

**Status:** `400 Bad Request`

```json
{
  "status": "error",
  "message": "All fields are required."
}
```

---

# PUT /api/waste/:id

## Description

This endpoint updates an existing waste record.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | Integer | Yes | The unique identifier of the waste record. |

### Request Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| lokasi | String | Yes | Specifies the waste collection location. |
| jenis | String | Yes | Specifies the waste category. |
| berat | Integer | Yes | Specifies the waste weight in kilograms. |

### Example Request

```json
{
  "lokasi": "Campus",
  "jenis": "Paper",
  "berat": 8
}
```

### Success Response

**Status:** `200 OK`

```json
{
  "status": "success",
  "message": "Waste record successfully updated."
}
```

### Error Response

**Status:** `404 Not Found`

```json
{
  "status": "error",
  "message": "Waste record not found."
}
```

---

# DELETE /api/waste/:id

## Description

This endpoint deletes a waste record based on its unique identifier.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | Integer | Yes | The unique identifier of the waste record. |

### Success Response

**Status:** `200 OK`

```json
{
  "status": "success",
  "message": "Waste record successfully deleted."
}
```

### Error Response

**Status:** `404 Not Found`

```json
{
  "status": "error",
  "message": "Waste record not found."
}
```

---

# DELETE /api/waste

## Description

This endpoint deletes all waste records stored in the SQLite database.

### Request Parameters

None.

### Success Response

**Status:** `200 OK`

```json
{
  "status": "success",
  "message": "All waste records successfully deleted."
}
```

### Error Response

**Status:** `500 Internal Server Error`

```json
{
  "status": "error",
  "message": "Failed to delete waste records."
}
```

---

# Authentication

The current version of EcoTrack API does not require authentication.

Future releases will support Bearer Token authentication for secured API access.

---

# Rate Limiting

The current version does not implement rate limiting.

Future releases may limit the number of API requests to improve server performance.

---

# Deprecated

There are no deprecated endpoints in the current API version (v1.1.0).
````
