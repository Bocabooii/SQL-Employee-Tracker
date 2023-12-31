const inquirer = require("inquirer");
const mysql = require("mysql2");

// create a MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "boca",
    database: 'comanytracker_db'
});

// connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to companytracker_db database!")
    start();
});

function start() {
  inquirer
      .prompt({
          type: "list",
          name: "action",
          message: "What would you like to do?",
          choices: [
              "View all departments",
              "View all roles",
              "View all employees",
              "Exit",
          ],
      })
      .then((answer) => {
          switch (answer.action) {
              case "View all departments":
                  viewAllDepartments();
                  break;
              case "View all roles":
                  viewAllRoles();
                  break;
              case "View all employees":
                  viewAllEmployees();
                  break;
                  case "Exit":
                    connection.end();
                    console.log("Goodbye!");
                    break;
            }
        });
}

function viewAllDepartments() {
  const query = "SELECT * FROM departments";
  connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
  });
}

function viewAllRoles() {
  const query = "SELECT roles.title, roles.id, departments.department_name, roles.salary from roles join departments on roles.department_id = departments.id";
  connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
  });
}

function viewAllEmployees() {
  const query = `
  SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
  FROM employee e
  LEFT JOIN roles r ON e.role_id = r.id
  LEFT JOIN departments d ON r.department_id = d.id
  LEFT JOIN employee m ON e.manager_id = m.id;
  `;
  connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
  });
}

process.on("exit", () => {
  connection.end();
});