USE employeeTracker_DB;

INSERT into department name VALUES ("Sales");
INSERT into department name VALUES ("Engineering");
INSERT into department name VALUES ("Finance");
INSERT into department name VALUES ("Legal");

INSERT into role (title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
INSERT into role (title, salary, department_id) VALUES ("Software Engineer", 60000, 2);
INSERT into role (title, salary, department_id) VALUES ("Accountant", 100000, 3);
INSERT into role (title, salary, department_id) VALUES ("Lawyer", 900000, 4);


INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Barry", "Cuda", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Teri", "Dactyl", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Liz", "Erd", 2, 2);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Ann", "Chovey", 3, 1);