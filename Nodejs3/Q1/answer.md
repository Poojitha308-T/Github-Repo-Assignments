## a. Package Managers

### What is a package manager?

A package manager is a tool that helps developers install, update, remove, and manage external libraries (called **packages**) that a project depends on. Instead of writing everything from scratch, developers can reuse existing code written by others.

**Simple example:**
If you want to use dates in your backend, you can install a ready-made library instead of writing your own date utility.

---

### Why do we need package managers in backend development?

Backend applications rely on many libraries for tasks like routing, database access, authentication, logging, etc. Package managers:

* Save development time
* Ensure consistency across different environments
* Make collaboration easier
* Handle versioning of libraries

---

### Problems faced if package managers are not used

Without package managers:

* Developers must manually download and manage libraries
* Version mismatches can break the application
* Sharing projects becomes difficult
* Updating or fixing bugs in libraries is time-consuming
* Dependency conflicts are hard to resolve

---

## b. NPM (Node Package Manager)

### What is NPM?

NPM (Node Package Manager) is the default package manager for Node.js. It allows developers to install and manage JavaScript libraries required for Node.js applications.

### Why is NPM important for Node.js applications?

NPM is important because:

* It provides access to a huge ecosystem of open-source packages
* It automates dependency installation
* It keeps track of project dependencies
* It makes project setup fast and reliable

---

### How NPM helps in managing dependencies

NPM:

* Installs required packages using simple commands (e.g., `npm install express`)
* Stores dependency information in `package.json`
* Locks exact versions using `package-lock.json`
* Automatically installs all dependencies when the project is shared

---

## c. Backend Project Initialization

### What is the command used to initialize a backend (Node.js) project?

The command used is:

npm init

---

### Explain what `npm init` and `npm init -y` do

* **npm init**

  * Starts an interactive process
  * Asks questions like project name, version, description, author, etc.
  * Creates a `package.json` file based on your answers

* **npm init -y**

  * Skips all questions
  * Creates `package.json` with default values
  * Useful for quick project setup

---

## d. Files and Folders Created After Project Initialization

### package.json

* Acts as the heart of a Node.js project
* Contains project metadata (name, version, scripts)
* Lists dependencies and devDependencies
* Helps others understand and run the project

**Why it is important:**
Without `package.json`, NPM cannot manage or install project dependencies.

---

### node_modules

* Contains all installed packages and their dependencies
* Automatically created when dependencies are installed

**Why it is important:**
It allows the application to use installed libraries.

---

### package-lock.json

* Records the exact versions of installed dependencies
* Ensures the same dependency versions across all environments

**Why it is important:**
It prevents unexpected bugs caused by version changes.

---

## GitHub Best Practices

### Files/Folders that should NOT be pushed to GitHub

* **node_modules/**

  * Very large in size
  * Can be regenerated using `npm install`
  * Makes repositories heavy and slow

---

### Files that MUST be committed to GitHub

* **package.json**

  * Required to understand project dependencies
* **package-lock.json**

  * Ensures consistent dependency versions

**Reason:**
These files allow anyone to clone the project and set it up easily using a single command:

npm install
