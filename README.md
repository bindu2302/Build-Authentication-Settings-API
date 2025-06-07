# 🛠 Team Productivity Backend API

This is the backend system for a Team Productivity Platform, built with **Node.js**, **Express**, and **MongoDB**. It provides user authentication, profile management, user preferences, and dashboard summary endpoints.

---

## 🚀 Tech Stack

- **Node.js**
- **Express**
- **MongoDB & Mongoose**
- **JWT** – Authentication
- **bcryptjs** – Password hashing
- **Joi** – Input validation
- **dotenv** – Environment variables

## Setup
```bash
git clone <repo-url>
cd backend
npm install
create a `.env` file with Mongo URI & JWT secret
npm start


team-backend/
│
├── config/ # Database connection
├── controllers/ # Business logic
├── middleware/ # Auth middleware
├── models/ # Mongoose models
├── routes/ # Express route handlers
├── .env # Environment variables
├── server.js # App entry point
├── package.json
└── README.m


---

## 🧪 API Endpoints

### 🔐 Authentication

- `POST /api/register`  
  Register a new user with email, name, and password

- `POST /api/login`  
  Authenticate user and return JWT token

- `GET /api/profile`  
  Return current user profile *(Protected route)*

- `PATCH /api/profile`  
  Update user's email or name *(Protected route)*

---

### 🎨 User Preferences

- `POST /api/preferences`  
  Save user theme and dashboard layout *(Protected route)*

- `GET /api/preferences`  
  Fetch saved preferences *(Protected route)*

---

### 📊 Dashboard Summary

- `GET /api/dashboard-summary`  
  Return dummy data for teams, projects, and notifications *(Protected route)*

---

## 🔐 JWT Auth Middleware

All protected routes require a valid JWT token in the `Authorization` header:


Authorization: Bearer <your_token>

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd team-backend

2. Install dependencies
npm install

3. Create .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Start the server
npm start

5. Server runs on:
http://localhost:5000


 Features Completed
 User registration and login

 JWT authentication

 Profile fetch and update

 Preference save and fetch

 Dashboard summary endpoint

 Modular structure (routes/controllers/models)

 Secure .env usage

 Input validation using Joi


Screenshots:
1. Terminal Output: https://prnt.sc/lZdPxMYY2tug
2. Postman request(For register): https://prnt.sc/0hggPpOMl5eb 
3. Postman request(For login): https://prnt.sc/kwu_s-4wWUhU
4. Postman request(For Profile(fetch)): https://prnt.sc/QicCBaI9ALXN
5. Postman request(For Profile(update)): https://prnt.sc/aCTIRnhd3Omw