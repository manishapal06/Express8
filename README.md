Book Management System (Express.js)
📖 Overview

This is a Book Management System built using Express.js that allows:

Admins to manage books (CRUD operations).

Readers to browse, borrow, and return books.

The system also includes:

Request logging middleware (all requests logged with timestamp).

Borrow/Return transaction logger.

Return check middleware (prevents returning a book before 3 days).

All book records are stored in db.json.

🚀 Features
👨‍💼 Admin Routes

POST /admin/books → Add a new book.

GET /admin/books → Get all books (available + borrowed).

PATCH /admin/books/:id → Update book details.

DELETE /admin/books/:id → Delete a book.

👩‍💻 Reader Routes

GET /reader/books → Fetch only available books.

POST /reader/borrow/:id → Borrow a book (requires readerName).

POST /reader/return/:id → Return a book (only after 3 days).

🛠 Middleware
1. Logger Middleware

Logs every request with timestamp.
Example:

[2025-09-05T14:10:00Z] POST /admin/books
[2025-09-05T14:12:00Z] GET /reader/books

2. Return Check Middleware

Prevents readers from returning a book before 3 days of borrowing.
If attempted:

{ "error": "Book cannot be returned within 3 days of borrowing." }

3. Transaction Logger

Logs borrow & return events.
Example:

[2025-09-05T14:15:20Z] John Doe borrowed "The Great Gatsby"
[2025-09-08T16:00:45Z] John Doe returned "The Great Gatsby"

📂 Project Structure
book-management/
│── db.json
│── server.js
│── models/
│   └── bookModel.js
│── controllers/
│   ├── adminController.js
│   └── readerController.js
│── routes/
│   ├── adminRoutes.js
│   └── readerRoutes.js
│── middlewares/
│   ├── loggerMiddleware.js
│   ├── returnCheckMiddleware.js
│   └── transactionLogger.js

📑 Sample Book Record
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "publishedYear": 1925,
  "status": "available",
  "borrowedBy": null,
  "borrowedDate": null
}

⚙️ Installation & Setup

Clone the repository:

git clone <your-repo-url>
cd book-management


Install dependencies:

npm install


Start server:

node server.js


Server runs at:
👉 http://localhost:3000

🔗 API Workflows
1️⃣ Admin

Add Book → POST /admin/books

View Books → GET /admin/books

Update Book → PATCH /admin/books/:id

Delete Book → DELETE /admin/books/:id

2️⃣ Reader

View Available Books → GET /reader/books

Borrow Book → POST /reader/borrow/:id

{ "readerName": "John Doe" }


Return Book (after 3 days) → POST /reader/return/:id

✅ Example Borrow Flow

Borrow Request:

POST /reader/borrow/1
Content-Type: application/json

{
  "readerName": "Alice"
}


Book After Borrowing:

{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "publishedYear": 1925,
  "status": "borrowed",
  "borrowedBy": "Alice",
  "borrowedDate": "2025-09-05T14:30:00Z"
}

📌 Challenges & Considerations

✅ Handle invalid IDs with proper error messages.

✅ Ensure only available books can be borrowed.

✅ Restrict returns before 3 days.

✅ Maintain clean code with MVC architecture.

✅ Use proper HTTP status codes.

👨‍💻 Tech Stack

Backend: Node.js, Express.js

Database: JSON file (db.json)

Architecture: MVC with Middleware
