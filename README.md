# Notes API

A RESTful Note-Taking API built with Node.js, Express, and MongoDB Atlas.

This project demonstrates backend architecture principles including modular structure, middleware design, input validation, and cloud database integration.

---

## Summary

The Notes API is a RESTful backend service that allows users to create, manage, search, and organize notes efficiently.

It provides:

- Full CRUD functionality
- Keyword-based search using regex
- Pagination and dynamic sorting
- Optional category-based filtering
- Request logging middleware
- Centralized global error handling
- Input validation using Joi
- MongoDB Atlas cloud database integration

The API follows a modular structure separating controllers, routes, models, middleware, and database configuration for maintainability and scalability.

---

## Live Demo

**Live API URL:** https://group-1-notes-api.onrender.com

**Postman Collection:** [View](https://documenter.getpostman.com/view/39230434/2sBXcGCek)

---

## Project Structure

```
Notes-API/
├── controllers/
│   └── noteController.js
├── databases/
│   └── connectDb.js
├── middleware/
│   ├── errorHandler.js
│   └── reqLogger.js
├── models/
│   └── noteModel.js
├── routes/
│   └── noteRoutes.js
├── app.js
└── package.json
```

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Joi
- dotenv
- Hosted on Render

---

## Middleware

- Request Logger
- Global Error Handler

---

## Features

- Create a note
- Retrieve all notes
- Retrieve a note by ID
- Update a note
- Delete a note
- Search notes by keyword (title or content)
- Pagination and sorting
- Input validation using Joi
- Global error handling

---

## API Endpoints

### Welcome Route
GET `/api/notes/welcome`  
Returns a welcome message

---

### Create a Note
POST `/api/notes`  
**Validation Rules**
- title: minimum 3 characters (required)
- content: minimum 5 characters (required)
- category: optional string (e.g. Personal, Work)
- tags: optional array of strings

---

### Get All Notes (Pagination and Sorting included!)
GET `/api/notes`
**Available Query Parameters**
- page (default value set to 1): the page number
- limit (default value set to 10): the number of notes per page
- sortBy (default value set to createdAt): the field to sort by
- order (default value set to desc): the notes in asc or desc order
- category (optional): filter notes by category (e.g. Personal, Work)

**Included response**
- totalPages
- currentPage
- notes data

---

### Search Notes by Keyword
GET `/api/notes/search?q=keyword`  
#### Searches for partial matches in:
- title
- content
#### Uses case-insensitive regex search

---

### Get Note by ID
GET `/api/notes/:id`

---

### Update Note by ID
PUT `/api/notes/:id`

---

### Delete Note by ID
DELETE `/api/notes/:id`
**Returns status code 204 if successful**

---

## Search Implementation

Keyword searching is implemented using MongoDB regex queries:
- Case-insensitive
- Partial matching
- Searches both title and content fields

---

## Pagination Implementation

Pagination is handled using:
- limit()
- skip()
- sort()
This ensures efficient data retrieval and flexible sorting.

---

## Middleware

**Request Logger**
Logs:
- HTTP method
- Request URL
- Request IP
- Timestamp

**Global Error Handler**
Handles:
- Centralized error responses
- Application stability

---

## Database Schema

The Note schema (built with Mongoose) includes:
- title (String, required)
- content (String, required)
- category (String)
- tags (Array of strings)
- createdAt
- updatedAt

---

## Setup Instructions

**Clone the Repository**
`git clone https://github.com/B-got-banned/Notes-API.git`

`cd Notes-API`

**Install Dependencies (express, joi, mongoose, dotenv, cors, nodemon)**
`npm install`

**Environment Variables**
Create a `.env` file in the root directory with the following:

```
PORT=5020
MONGO_URI=your_mongodb_atlas_connection_string
```

**Start the Server**
`npm run dev` or `npm start`

Server runs at:
`http://localhost:5020`

---

## Testing the API
You can test the API using:
- Postman
- Thunder Client
- curl
- Any frontend client

---

## Screenshots

### Search Feature
> insert screenshot

### Pagination and Sorting
> insert screenshot
**With category filtering**
> insert screenshot

---

## Contributors
[Bethel Onyealilachi](https://github.com/B-got-banned)

[Bryan Jerry-Bassey](https://github.com/JeedyWhyte)

[Kamal El-Mahmoud](https://github.com/KemilandInc)

[Lucky Abigail Atuhaire](https://github.com/laatuhaire)
