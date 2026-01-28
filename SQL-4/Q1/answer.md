1. **What schema design is and what a database schema represents**

Schema design is the process of planning and defining the structure of a database before data is stored in it. This includes deciding:

** What tables will exist

** What columns each table will have

** The data types of those columns

** Relationships between tables

** Rules and constraints that data must follow

A database schema is the blueprint of the database. It represents the logical structure of the database, not the data itself. Just like a building blueprint shows where rooms, doors, and wiring go, a database schema shows how data entities relate and how data should be stored correctly.

2. **Why schema design is required before writing backend code**

Schema design should come before backend code because backend logic depends heavily on how data is structured.

Backend code queries, inserts, updates, and deletes data based on table structure.

A well-designed schema makes backend code simpler, cleaner, and less error-prone.

Changing a poorly designed schema later often requires rewriting queries, APIs, and business logic.

For example, if you design a users and orders relationship properly upfront, backend code can easily fetch all orders for a user. If the schema is unclear or inconsistent, backend code becomes complex and fragile.

3. **How poor schema design impacts data consistency, maintenance, and scalability**

Poor schema design can cause serious problems:

### Data consistency

Duplicate or conflicting data may appear.

Updates in one place may not reflect in another.

Example: Storing a customer’s email in multiple tables can lead to mismatches.

### Maintenance

Queries become complex and hard to understand.

Fixing bugs or adding features takes more time.

Developers struggle to understand the data model.

### Scalability

As data grows, poorly structured tables become slow.

Redundant data increases storage and indexing costs.

Scaling the system requires major redesign instead of simple optimization.

4. **What validations are in schema design and why databases enforce them**

Validations (constraints) are rules defined at the database level to ensure data integrity. Common examples include:

** NOT NULL – Ensures a column must have a value
Example: A user’s email should not be NULL.

** UNIQUE – Prevents duplicate values
Example: Email addresses must be unique.

** PRIMARY KEY – Uniquely identifies each row
Example: user_id identifies a specific user.

** DEFAULT – Assigns a default value if none is provided
Example: status = 'active' by default.

Databases enforce validations to:

Protect data integrity regardless of application bugs

Ensure rules are consistently applied

Prevent invalid or incomplete data from being stored

5. **The difference between a database schema and a database table**

A database schema is the overall structure or container that defines how tables, relationships, and constraints are organized.

A database table is a specific structure within the schema that stores actual data in rows and columns.

### In simple terms:

Schema = Design / Blueprint

Table = Actual storage unit inside the schema

A schema can contain many tables, but a table belongs to a schema.

6. **Why a table should represent only one entity**

Each table should represent one real-world entity or concept, such as User, Product, or Order.

Reasons:

1. Keeps data organized and logical

2. Avoids unnecessary duplication

3. Makes relationships clearer

For example, mixing user data and order data in one table would lead to repeated user information and confusion. Separating them allows clean relationships using foreign keys.

7. **Why redundant or derived data should be avoided in table design**

Redundant data is the same data stored in multiple places.
Derived data is data that can be calculated from existing data.

1. Problems with storing them:

2. Risk of inconsistency (values may not match)

3. Extra storage usage

4. Additional maintenance when data changes

### Example:

Storing total_price when it can be calculated from quantity × unit_price

Storing a user’s age instead of date of birth (age changes over time)

It is better to compute derived values when needed rather than store them.

8. **The importance of choosing correct data types while designing tables**

Choosing correct data types ensures:

1. Efficient storage (e.g., INT vs VARCHAR)

2. Better performance in queries

3. Accurate data representation

4. Reduced risk of invalid data

### Examples:

Use DATE for dates, not strings

Use BOOLEAN for true/false values

Use numeric types for calculations instead of text

Incorrect data types can cause bugs, slow queries, and data conversion issues later.