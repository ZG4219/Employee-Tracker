const mysql = require('mysql2');
const inquirer = require('inquirer');

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

const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
          'View all employees',
          'View all employees by department',
          'View all employees by manager',
          'Add employee',
          'Remove employee',
          'Update employee role',
          'Update employee manager',
          'View all roles',
          'Add role',
          'Remove role',
          'View all departments',
          'Add department',
          'Remove department',
          'Exit'
        ]
      }
    ])
    .then((answer) => {
      switch (answer.option) {
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'View all employees by department':
          viewAllEmployeesByDepartment();
          break;
        case 'View all employees by manager':
          viewAllEmployeesByManager();
          break;
        case 'Add employee':
          addEmployee();
          break;
        case 'Remove employee':
          removeEmployee();
          break;
        case 'Update employee role':
          updateEmployeeRole();
          break;
        case 'Update employee manager':
          updateEmployeeManager();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'Add role':
          addRole();
          break;
        case 'Remove role':
          removeRole();
          break;
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'Add department':
          addDepartment();
          break;
        case 'Remove department':
          removeDepartment();
          break;
        case 'Exit':
          connection.end();
          break;
        default:
          console.log('Invalid option selected');
          mainMenu();
      }
    });
};

const viewAllEmployees = () => {
  // Code to view all employees
};

const viewAllEmployeesByDepartment = () => {
  // Code to view all employees by department
};

const viewAllEmployeesByManager = () => {
  // Code to view all employees by manager
};

const addEmployee = () => {
  // Code to add an employee
};

const removeEmployee = () => {
  // Code to remove an employee
};

const updateEmployeeRole = () => {
  // Code to update an employee's role
};

const updateEmployee

