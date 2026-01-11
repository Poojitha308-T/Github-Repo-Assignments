1. Role of Frontend (FE)

+-----------------------+
|        USER           |
|  (Clicks, Input)      |
+----------+------------+
           |
           v
+-----------------------+
|      FRONTEND (FE)    |
|-----------------------|
| UI (HTML, CSS)        |
| Interaction (JS)      |
| Forms, Buttons        |
+----------+------------+
           |
           | HTTP Request
           v
+-----------------------+
|      BACKEND (BE)     |
+-----------------------+


The Frontend (FE) is the part of a web application that users directly see and interact with in their browser.

a) User Interface (UI)

The frontend is responsible for designing and displaying the visual layout of the application.

It includes elements such as buttons, forms, menus, images, text, and animations.

Technologies commonly used: HTML, CSS, JavaScript, and frontend frameworks like React, Angular, Vue.

b) User Interaction

Handles user actions such as clicking buttons, submitting forms, scrolling, and typing.

Provides instant feedback to users (e.g., form validation, loading indicators, error messages).

Ensures a smooth and responsive user experience.

c) Communication with Backend

Sends requests to the backend using HTTP/HTTPS (e.g., GET, POST, PUT, DELETE).

Receives data from the backend (usually in JSON format) and displays it to the user.

Acts as a bridge between the user and the backend system.

2. Role of Backend (BE)

+-----------------------+
|      FRONTEND         |
| (Request from User)   |
+----------+------------+
           |
           v
+-----------------------+
|      BACKEND (BE)     |
|-----------------------|
| Business Logic        |
| Authentication        |
| Validation            |
+----------+------------+
           |
           v
+-----------------------+
|      DATABASE         |
| (Store / Fetch Data)  |
+-----------------------+


The Backend (BE) is the server-side part of a web application that handles logic, data, and security.

a) Server-Side Processing

Processes requests received from the frontend.

Executes application logic such as calculations, validations, and decision-making.

Generates appropriate responses and sends them back to the frontend.

b) Database Handling

Manages storage, retrieval, updating, and deletion of data.

Communicates with databases such as MySQL, PostgreSQL, MongoDB, Oracle.

Ensures data consistency and integrity.

c) Security and Authentication

Handles user authentication (login, logout, signup).

Manages authorization (who can access what).

Protects the application from threats such as SQL injection, XSS, and unauthorized access.

3. Business Logic
What is Business Logic?

Business Logic refers to the core rules, calculations, and decision-making processes that define how a business operates within a web application.
It determines how data is processed and what actions are allowed based on business requirements.

User Action
   |
   v
+-----------------------+
|   Business Logic      |
|-----------------------|
| Rules & Conditions    |
| Calculations          |
| Decision Making       |
+----------+------------+
           |
           v
      Final Output


Characteristics of Business Logic:

Independent of UI design

Reflects real-world business rules

Usually implemented in the backend (Application Layer)

Real-World Examples:

E-commerce Website:

Applying discounts and promo codes

Calculating total price, tax, and shipping cost

Checking product availability before placing an order

Banking Application:

Ensuring minimum balance rules

Calculating interest on savings accounts

Verifying sufficient funds before a transfer

Online Booking System:

Preventing double booking of seats or rooms

Applying peak and off-peak pricing rules

Enforcing cancellation policies and refund rules

4. Client–Server Model

The Client–Server Model is a communication model where tasks are divided between service requesters (clients) and service providers (servers).

+-------------------+        Request        +-------------------+
|     CLIENT        |  ----------------->  |      SERVER       |
| (Browser / App)   |                      | (Processes Data)  |
|                   |  <-----------------  |                   |
+-------------------+        Response       +-------------------+


a) Who is the Client?

The client is the user’s device or application (e.g., web browser, mobile app).

It sends requests and displays responses.

Examples: Chrome browser, mobile apps.

b) Who is the Server?

The server is a system that provides services, resources, or data.

It processes client requests and sends back responses.

Examples: Web servers, application servers, database servers.

c) How Communication Happens

The client sends a request over the network using HTTP/HTTPS.

The server processes the request.

The server sends a response back to the client (data, status, or error message).

5. Three-Tier Architecture
What is 3-Tier Architecture?

Three-Tier Architecture divides a web application into three separate layers to improve scalability, maintainability, and security.

+----------------------------+
|   Presentation Layer       |
| (UI - Browser / App)       |
+-------------+--------------+
              |
              v
+----------------------------+
| Application / Business     |
| Layer (Logic & Rules)      |
+-------------+--------------+
              |
              v
+----------------------------+
|      Data Layer            |
|   (Database & Storage)     |
+----------------------------+


a) Presentation Layer

User interface layer

Handles user interaction and data display

Example: HTML, CSS, JavaScript, React

b) Application (Business) Layer

Contains business logic and application rules

Processes requests from the presentation layer

Example: Node.js, Java, Python, .NET backend

c) Data Layer

Responsible for data storage and management

Communicates with databases

Example: MySQL, MongoDB, PostgreSQL

Why This Architecture Is Used:

Separation of concerns

Easier maintenance and updates

Improved scalability and security

Allows independent development of each layer

6. JavaScript as a Backend Language

JavaScript is widely used as a backend language, mainly through Node.js.

+-----------------------+
|      CLIENT           |
|  (Browser / App)      |
+----------+------------+
           |
           v
+-----------------------+
|   Node.js Server      |
| (JavaScript Backend) |
|-----------------------|
| Express / NestJS     |
| APIs & Logic         |
+----------+------------+
           |
           v
+-----------------------+
|      DATABASE         |
| MongoDB / SQL        |
+-----------------------+


a) Performance

Uses an event-driven, non-blocking I/O model.

Handles multiple requests efficiently.

Suitable for real-time applications (chat apps, live updates).

b) Ecosystem

Massive package ecosystem via npm (Node Package Manager).

Thousands of libraries for authentication, databases, APIs, and security.

Faster development due to reusable packages.

c) Popular Backend Frameworks

Express.js – Lightweight and flexible

NestJS – Structured and scalable

Koa.js – Modern and minimal

Fastify – High-performance framework