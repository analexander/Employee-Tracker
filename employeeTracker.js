var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table")

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeTracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices:
        [
            "View all Departments",
            "View all Roles",
            "View all Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "EXIT"
        ]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.action === "View all Departments") {
          viewDepts();
        }
        else if(answer.action === "View all Roles") {
          viewRoles();
        }
        else if(answer.action === "View all Employees") {
          viewEmps();
        }
        else if(answer.action === "Add Department") {
          addDept();
        }
        else if(answer.action === "Add Role") {
          addRole();
        }
        else if(answer.action === "Add Employee") {
          addEmps();
        } else{
          connection.end();
        }
      });
  }

function viewDepts() {
    connection.query("SELECT employee.first_name AS FirstName, employee.last_name AS LastName, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;", function(err, answer) {
        if (err) throw err;
        console.log("\n");
        console.table(answer);
        start();
      });
    }

function viewRoles() {
    connection.query("SELECT employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Role FROM employee JOIN role ON employee.role_id = role.id;", function(err, answer) {
        if (err) throw err;
        console.log("\n");
        console.table(answer);
        start();
        });
    }

function viewEmps() {
    connection.query("SELECT employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Role, department.name AS Department, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON department.id = role.department_id LEFT JOIN employee e on employee.manager_id = e.id;", function(err, answer) {
        if (err) throw err;
        console.log("\n");
        console.table(answer);
        start();
        });
     }

function addDept() {
    inquirer
        .prompt([
        {
            name: "deptName",
            type: "input",
            message: "What is the name of the Department?"
        }
        ])
        .then(function(answer) {
        connection.query(
            "INSERT INTO department SET ?",
            {
            name: answer.deptName
            },
            function(err) {
            if (err) throw err;
            console.log("\n The department was added successfully! \n");
            start();
            }
        );
    });
}

function addRole() {
    inquirer
        .prompt([
        {
            name: "roleTitle",
            type: "input",
            message: "What is the title of the role?"
        },
        {
            name: "roleSalary",
            type: "input",
            message: "What is the salary of the role?"
        }
        ])
        .then(function(answer) {
        connection.query(
            "SELECT role.title AS Title, role.salary AS Salary FROM role",
            {
            title: answer.roleTitle,
            salary: answer.roleSalary,
            },
            function(err) {
            if (err) throw err;
            console.log("\n The role was added successfully! \n");

            start();
            }
        );
    });
}