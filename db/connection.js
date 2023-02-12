const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee_db'
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }

  console.log(`Connected to the employee_db database with thread ID ${connection.threadId}`);
});

// Example query to retrieve all employees from the database
connection.query(
  'SELECT * FROM employees',
  (error, results) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(results);
  }
);

connection.end();
