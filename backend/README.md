# 🏠 HomelyHub – Backend

This is the **backend service** of **HomelyHub**, a MERN stack accommodation and property booking platform developed during my **MERN Stack Internship at WSA Webstack Academy**.

The backend is built using **Node.js and Express.js** and provides RESTful APIs for authentication, property management, bookings, and user operations.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Mongoose

---

## ✨ Core Features

- User authentication (Signup, Login, Forgot/Reset Password)
- JWT-based authorization & protected routes
- User profile & password management
- Property / accommodation CRUD operations
- Booking management
- Image handling & utilities
- Centralized error handling
- Modular MVC architecture

---

## 📁 Project Structure

backend/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── index.js
│
├── package.json
├── package-lock.json


---

## ⚙️ Run Backend Locally

### 1️⃣ Install dependencies
```bash
npm install

2️⃣ Create .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/homelyhub
JWT_SECRET=your_secret_key


⚠️ .env is not included in this repository for security reasons.

3️⃣ Start server
npm run dev
