// Define an array to store the added employees
let employees = [];

// Get references to the form and its inputs
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const professionInput = document.querySelector('#profession');
const ageInput = document.querySelector('#age');
const error = document.querySelector('#error');
const container = document.getElementById('employeeContainer');
// const employeeDiv = document.getElementById('#emp-list')

// Get a reference to the employee list div
const employeeList = document.querySelector('#employee-list');

// Create a function to add a new employee to the array and display it in the list
function addEmployee(e) {
    e.preventDefault();
    // Validate that all required fields are filled in

    // Display a success message
    if (nameInput.value.trim() === '' || professionInput.value.trim() === '' || ageInput.value.trim() === '') {
        document.getElementById('error-message').textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
        document.getElementById('success-message').textContent = '';
        return;
    }
    // Create a new employee object with the given values
    const employee = {
        id: employees.length + 1,
        name: nameInput.value,
        profession: professionInput.value,
        age: ageInput.value
    };

    // Add the new employee to the array
    employees.push(employee);

    // Clear the input values
    nameInput.value = '';
    professionInput.value = '';
    ageInput.value = '';

    // Update the list of employees
    renderEmployeeList();
    document.getElementById('success-message').textContent = 'Success : Employee Added!';
    document.getElementById('error-message').textContent = '';
    document.querySelector('form').reset();
}

function renderEmployeeList(e) {
    // Clear the existing employee list
    employeeList.innerHTML = '';

    // Create a new list item for each employee
    employees.forEach(employee => {
        const divs = document.createElement('div');
        divs.innerHTML = ` 
        <div class="employees">
        <div class="employees-details">
            <span>${employee.id}.</span>
            <span>Name: ${employee.name}</span>
            <span>Profession: ${employee.profession}</span>
            <span>Age: ${employee.age}</span> 
        </div>
        <button id="del-btn-${employee.id}" data-id="${employee.id}" class="delete-button">Delete</button>
        </div>`;
        // divs.style.border = "1px solid white"
        // divs.style.borderRadius = "20px"
        // divs.style.width = "35rem"
        // divs.style.height="3rem"

        // Append each employee's details and delete button to the employeeList
        employeeList.appendChild(divs);

    });

    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', () => {
            const empId = deleteButton.dataset.id;

            // Find the index of the employee in the array
            const index = employees.findIndex(e => e.id === empId);

            // Remove the employee from the array
            employees.splice(index, 1);

            // Update the list of employees
            renderEmployeeList();
        });
    });
}


// Add an event listener to the Add Employee button
const addEmployeeButton = document.querySelector('#add-employee');
addEmployeeButton.addEventListener('click', addEmployee);





{/* <div class="emp-card">
<div class="details">
    <span>${user.id}.</span>
    <span>Name: ${user.name}</span>
    <span>Profession: ${user.profession}</span>
    <span>Age: ${user.age}</span> 
</div>
<button id="del-user-btn" onclick="deleteUser(${user.id})">Delete User</button>
</div> */}