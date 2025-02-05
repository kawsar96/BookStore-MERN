# 📚 Bookstore CRUD Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing books. This project includes CRUD (Create, Read, Update, Delete) operations for a bookstore, featuring a Book Table for listing books and a Book Card for displaying individual book details.

## 🚀 Features

- 📌 **Add Books** - Create new book entries.
- 📌 **View Books** - Display books in both table and card formats.
- 📌 **Update Books** - Edit book details.
- 📌 **Delete Books** - Remove books from the store.
- 📌 **RESTful API** - Uses Express.js for handling backend operations.
- 📌 **MongoDB Database** - Stores book data.
- 📌 **React Frontend** - Interactive UI built with React and TailwindCSS.

## 🛠️ Tech Stack

**Frontend:** React, TailwindCSS, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose

## 📦 Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/bookstore-crud.git
   cd bookstore-crud

   ```

2. **Install Dependencies**

   Backend

   ```bash
   cd backend
   npm install
   ```

   Frontend

   ```bash
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**

   Create a .env file in the backend directory and add:

   ```bash
   MONGO_URI=<your_mongodb_connection_string>
   PORT=<5000>
   ```

4. **Run the Application**

   Backend Server

   ```bash
   cd backend
   npm run dev
   ```

   Frontend Server

   ```bash
   cd frontend
   npm run dev
   ```

## 🎮 Usage

- Open http://localhost:5173/ to access the React frontend.
- Use the interface to add, view, edit, and delete books.
- Backend API runs at http://localhost:5000/api/books.

## 📄 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/books`     | Get all books       |
| GET    | `/api/books/:id` | Get a single book   |
| POST   | `/api/books`     | Add a new book      |
| PUT    | `/api/books/:id` | Update book details |
| DELETE | `/api/books/:id` | Delete a book       |

## 🛠️ Future Enhancements

- 🔍 Search & Filter functionality
- 📖 User authentication (JWT)
- 📦 Book categories & genres
