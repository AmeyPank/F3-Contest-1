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

// Create a function to render the employee list in the DOM
function renderEmployeeList(e) {
    // Clear the existing employee list
    employeeList.innerHTML = '';

    // Create a new list item for each employee
    employees.forEach(employee => {
        const divs = document.createElement('div');
        divs.innerHTML = `${employee.id}. Name: ${employee.name} Profession: ${employee.profession} Age: ${employee.age}`;
        divs.style.border = "1px solid white"
        divs.style.borderRadius = "20px"
        divs.style.width = "35rem"
        divs.style.height="3rem"

        // Add a delete button to each employee list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';




        deleteButton.addEventListener('click', () => {
            // Find the index of the employee in the array
            const index = employees.findIndex(e => e.id === employee.id);

            // Remove the employee from the array
            employees.splice(index, 1);
           
            // Update the list of employees
            renderEmployeeList();
            
        });


        
        
        employeeList.appendChild(divs);
        employeeList.appendChild(deleteButton);
        
        

    });
}

// Add an event listener to the Add Employee button
const addEmployeeButton = document.querySelector('#add-employee');
addEmployeeButton.addEventListener('click', addEmployee);






// `${ employee.id }. & nbsp & nbsp Name: ${ employee.name }
//  & nbsp & nbsp Profession: ${ employee.profession } 
//  & nbsp & nbsp Age: ${ employee.age } & nbsp & nbsp 
//  < button class="delete-employee" data - id="${employee.id}"> Delete User</button > `;