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
  password: "Z1ggystardust!",
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