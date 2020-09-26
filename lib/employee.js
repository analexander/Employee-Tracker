// TODO: Write code to define and export the Employee class

class Employee {
    constructor (first_name, last_name, id, role_id, manager_id) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.id = id;
        this.roleID = role_id;
        this.managerID = manager_id
    }

    getFirst() {
        return this.firstName;
    }

    getLast() {
        return this.lastName;
    }

    getId () {
        return this.id;
    }

    getRoleId () {
        return this.roleID;
    }

    getManId () {
        return this.managerID;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;