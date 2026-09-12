# Authentication System API

A RESTful Authentication System API built with **Node.js, Express.js, MongoDB and Mongoose**.

This project provides user authentication, email verification using OTP, password reset functionality, JWT-based authentication and protected user routes.

## Features

- User Registration
- User Login
- User Logout
- JWT Authentication
- HttpOnly Cookie Authentication
- Email Verification using OTP
- Send Verification OTP
- Verify Email using OTP
- Password Reset using OTP
- Send Password Reset OTP
- Update Password
- Get Logged-in User
- Password Hashing using bcryptjs
- Email Sending using Nodemailer
- MongoDB Database
- Mongoose ODM
- Protected Routes
- Environment Variables using dotenv
- CORS Support

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Nodemailer
- Cookie Parser
- CORS
- dotenv
- Gmail SMTP

## API Endpoints

### User Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Login user |
| POST | `/api/user/logout` | Logout user |

### Email Verification

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/user/send-verify-otp` | Send email verification OTP |
| POST | `/api/user/verify-email` | Verify email using OTP |

### Password Reset

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/user/send-reset-otp` | Send password reset OTP |
| POST | `/api/user/reset-password` | Reset user password |

### User

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/user/get-user` | Get logged-in user |

## Authentication

This project uses **JWT (JSON Web Token)** for user authentication.

After successful login:

1. User credentials are verified.
2. Email verification status is checked.
3. A JWT is generated containing the user's ID.
4. JWT is stored in an **HttpOnly cookie**.
5. Protected routes use authentication middleware to verify the JWT.
6. The authenticated user's ID is attached to the request as `req.userId`.

## Email Verification

After registration, the user can request an email verification OTP.

The OTP is sent to the user's registered email using Nodemailer.

## Password Reset

Users can reset their password using an OTP sent to their registered email.

The password reset OTP expires after 15 minutes.

The system also checks whether the new password is the same as the previous password.

## Security

The project includes the following security practices:

Passwords are hashed using bcryptjs
JWT is stored in an HttpOnly cookie
Protected routes use authentication middleware
Email verification is required before login
OTP expiration is implemented
Sensitive credentials are stored using environment variables
.env is excluded from GitHub using .gitignore.

## Environment Variables

Create a .env file in the root directory.

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=development

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_gmail_app_password

## Installation

Clone the repository:

git clone <your-github-repository-url>

Go inside the project directory:

cd user_management

Install dependencies:

npm install

Create a .env file and add the required environment variables.

## Run the Project

Run the project in development mode:

npm run dev

The server will run on:

http://localhost:5000

## API Testing

You can test the APIs using:

Postman
Thunder Client
Insomnia

## For protected routes:

Register a user.
Send verification OTP.
Verify the email.
Login with email and password.
JWT authentication cookie will be created automatically.
Access protected routes using the same API client.

## Project Structure

user_management/
│
├── config/
│   ├── db.js
│   └── nodemailer.js
│
├── controllers/
│   └── user.controller.js
│
├── middlewares/
│   └── user.middleware.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── user.routes.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── server.js


## Author

**Aashish Kumar**

Backend Developer | Node.js | Express.js | MongoDB