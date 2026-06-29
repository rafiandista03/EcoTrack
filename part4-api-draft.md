````markdown
# API DOCUMENTATION DRAFT

## Description

This endpoint records a user's daily carbon emission data and calculates the estimated carbon savings based on the transportation method and travel distance.

## Authentication

Requires a valid Bearer Token in the Authorization header.

## Request Body (JSON Payload)

The request body must contain the following parameters:

| Parameter | Type | Required | Description |
|------------|------|----------|-------------|
| user_id | String | Yes | The unique identifier of the user. |
| transport_mode | String | Yes | Specifies the transportation method used by the user, such as bicycle, walking, bus, or car. |
| distance_km | Float | Yes | Specifies the travel distance in kilometers. The value must be greater than zero. |
| date | Date | No | The date of the trip. Defaults to the current date if empty. |

---

## Success Response

### Code

```text
201 CREATED
````

### Content

```json
{
  "status": "success",
  "message": "Emission data successfully recorded.",
  "data": {
    "carbon_saved_kg": 2.5
  }
}
```

---

## Error Response

### Code

```text
400 BAD REQUEST
```

### Condition

If the **distance_km** is negative or missing.

### Content

```json
{
  "status": "error",
  "message": "The distance_km parameter is required and must be greater than zero."
}
```

```
```
