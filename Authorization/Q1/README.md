# Secure TODO API (Node.js + Express + Supabase + JWT)

This is a secure backend TODO application built with **Node.js**, **Express**, **Supabase**, and **JWT-based authentication**.

The application supports:
- User signup & login
- JWT authentication (1 hour expiry)
- Protected TODO CRUD operations
- User-specific authorization (users can only access their own todos)

---

## Tech Stack

- Node.js
- Express.js
- Supabase (PostgreSQL)
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---

## Project Structure

## Authentication Flow

1. User signs up with email & password
2. Password is hashed using bcrypt
3. User logs in with valid credentials
4. Server returns a JWT token (valid for 1 hour)
5. Token must be sent in `Authorization` header for protected routes

---

## Database Tables (Supabase)

### users
- id (uuid, primary key)
- name
- email (unique)
- password (hashed)
- created_at

### todos
- id (uuid, primary key)
- title
- completed
- userId (foreign key → users.id)
- created_at

---