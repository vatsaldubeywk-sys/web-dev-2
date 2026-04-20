let employees = new Array();

function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name == "" || empId == "" || isNaN(salary) || dept == "") {
        alert("Please fill all fields properly");
        return;
    }

    let employee = new Array();
    employee[0] = name;
    employee[1] = empId;
    employee[2] = salary;
    employee[3] = dept;

    employees.push(employee);
    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    let output = document.getElementById("output");
    let text = "<h3>All Employees</h3>";

    for (i = 0; i < employees.length; i++) {
        text += "Name: " + employees[i][0] + " | ID: " + employees[i][1] +
                " | Salary: " + employees[i][2] + " | Dept: " + employees[i][3] + "<br>";
    }

    output.innerHTML = text;
}

function filterSalary() {
    let output = document.getElementById("output");
    let text = "<h3>Employees with Salary > 50000</h3>";

    for (i = 0; i < employees.length; i++) {
        if (employees[i][2] > 50000) {
            text += "Name: " + employees[i][0] + " | Salary: " + employees[i][2] + "<br>";
        }
    }

    output.innerHTML = text;
}

function totalSalary() {
    let output = document.getElementById("output");
    let t = 0;

    for (i = 0; i < employees.length; i++) {
        t += employees[i][2];
    }

    output.innerHTML = "<h3>Total Salary: " + t + "</h3>";
}

function averageSalary() {
    let output = document.getElementById("output");

    if (employees.length == 0) {
        output.innerHTML = "<h3>No employee records available</h3>";
        return;
    }

    let t = 0;
    for (i = 0; i < employees.length; i++) {
        t += employees[i][2];
    }

    let avg = t / employees.length;
    output.innerHTML = "<h3>Average Salary: " + avg + "</h3>";
}

function countDepartment() {
    let output = document.getElementById("output");
    let deptName = prompt("Enter Department Name:");
    let count = 0;

    for (i = 0; i < employees.length; i++) {
        if (employees[i][3] == deptName) {
            count++;
        }
    }

    output.innerHTML = "<h3>Employees in " + deptName + ": " + count + "</h3>";
}