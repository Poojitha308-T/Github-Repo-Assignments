# Database Fundamentals – Conceptual Understanding

---

## 1. Why is `db.json` not suitable as a database for real projects?

Using `db.json` as a database may work for small demos or learning purposes, but it is **not suitable for real-world applications**.

### Limitations of File-Based Storage

- **Performance**
  - The entire file must be read and rewritten for every operation.
  - Performance degrades as data size increases.

- **Scalability**
  - Cannot efficiently handle large amounts of data.
  - Not suitable for applications with many users.

- **Concurrency**
  - Multiple users accessing the file simultaneously can cause data inconsistency.
  - No support for transactions or locking mechanisms.

- **Reliability**
  - Data may be corrupted if the server crashes during a write operation.
  - No built-in backup or recovery support.

**Conclusion:**  
`db.json` is suitable only for **testing, prototyping, or learning**, not for production systems.

---

## 2. What are the ideal characteristics of a database system?

A good database system provides much more than just data storage.

### Ideal Characteristics

- **Performance**
  - Fast read and write operations.
  - Efficient query processing.

- **Concurrency**
  - Allows multiple users to access data simultaneously.
  - Manages conflicts using transactions.

- **Reliability**
  - Protects data from system crashes.
  - Provides backup and recovery mechanisms.

- **Data Integrity**
  - Ensures data accuracy and consistency.
  - Enforces constraints like primary keys and foreign keys.

- **Scalability**
  - Handles growing data and user load.
  - Supports vertical and horizontal scaling.

- **Fault Tolerance**
  - Continues to operate even if part of the system fails.
  - Uses replication and failover mechanisms.

---

## 3. How many types of databases are there? What are their use cases?

Databases are mainly classified into **two major types**:

---

### 1. Relational Databases (SQL)

Relational databases store data in **tables with rows and columns** and use SQL for querying.

#### Examples
- MySQL
- PostgreSQL
- Oracle
- SQL Server

#### Use Cases
- Banking systems
- E-commerce applications
- Enterprise systems
- Applications requiring strong data consistency

#### Key Features
- Structured schema
- ACID compliance
- Strong data integrity

---

### 2. Non-Relational Databases (NoSQL)

NoSQL databases store data in flexible formats such as documents, key-value pairs, graphs, or columns.

#### Examples
- MongoDB (Document-based)
- Redis (Key-value)
- Cassandra (Column-based)
- Neo4j (Graph-based)

#### Use Cases
- Social media platforms
- Real-time analytics
- Big data applications
- Applications with frequently changing data structures

#### Key Features
- Flexible schema
- High scalability
- Suitable for distributed systems

---

