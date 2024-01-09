# Full-Stack CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application built using React, Node.js, and MySQL.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/en/download/)
- MySQL: [Download and Install MySQL via XAMPP](https://www.apachefriends.org)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/braden-dev/CRUD-FullStack-App.git
```

2. Configure the database connection:

- Open the XAMPP application and start the Apache module
- Next start the MySQL module
- Go to the Apache control panel (which can be accessed by going to `http://localhost/phpmyadmin`)
- Create a new Database named "crud" and a new table named "student" with 3 columns:
  - ID, type = INT
  - Name, type = VARCHAR
  - Email, type = VARCHAR

3. Start the server and client:

```bash
# Start the server
cd backend
npm start

# Start the client
cd ../frontend
npm start
```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the application.
- If you wish to access the backend, you can naviagate to `http://localhost:8080`.

## Features

- Create, Read, Update, and Delete records in the database.
- User-friendly interface built with React.
- Server-side API built with Node.js and Express.
- Database storage using MySQL.
