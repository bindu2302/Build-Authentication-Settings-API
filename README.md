# 🚀 Team Productivity Backend API

This is a Node.js + Express backend application that provides **user authentication**, **user preferences**, and **dashboard summary** features, using **MongoDB** and **JWT**.

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **MongoDB & Mongoose**
- **JWT** – Authentication
- **bcryptjs** – Password hashing
- **Joi** – Input validation
- **dotenv** – Environment variables

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd team-backend
2. **Install dependencies**
   npm install
3. **Create a .env file and add the following:**
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
4. **Start the server**
   npm start
5. **The server runs at:**
   http://localhost:5000


## 📁 Project Structure

```plaintext
team-backend/
├── config/           # Database connection
├── controllers/      # Business logic
├── middleware/       # JWT authentication middleware
├── models/           # Mongoose schemas
├── routes/           # Express route handlers
├── .env              # Environment variables (excluded from version control)
├── server.js         # Application entry point
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```



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


 ✅ Features Completed
 User registration and login

 JWT authentication

 Fetch and update user profile

 Save and fetch preferences

 Dashboard summary endpoint

 Modular folder structure (routes, models, controllers)

 Secure configuration with .env

 Input validation with Joi


### 📸Screenshots:
1. Terminal Output: https://prnt.sc/lZdPxMYY2tug
2. Postman request(For register): https://prnt.sc/0hggPpOMl5eb 
3. Postman request(For login): https://prnt.sc/kwu_s-4wWUhU
4. Postman request(For Profile(fetch)): https://prnt.sc/QicCBaI9ALXN
5. Postman request(For Profile(update)): https://prnt.sc/aCTIRnhd3Omw
