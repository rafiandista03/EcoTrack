
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
