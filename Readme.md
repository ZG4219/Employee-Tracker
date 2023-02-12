# Employee Tracker
This is a Node.js application that allows users to view and manage the employees, roles, and departments in an organization.

## Requirements

- Node.js
- npm 
- MySQL

## Installation

- Install dependencies

  -  `npm install`

- Create a MySql database named "employee_db" and run the `schema.sql` and `seeds.sql` files to create the tables and insert sample data.
- Update the `index.js` file with your MySql credentials.

## Usage 

- Start the application 
  - `npm start`
- The application will connect to the MySQL database and retrieve all employees from the `employees` table. The results will be logged to the console.

## Licence 
This project is licenced under the MIT License.

