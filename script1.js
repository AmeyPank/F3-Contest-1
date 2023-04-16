//  3 ways
// Without array - but with += innerHTML
// with array - appendChild
// with array - innerHTML

var nameInput = document.getElementById("name");
var professionInput = document.getElementById("profession");
var ageInput = document.getElementById("age");

var button = document.getElementById("add-employee");

button.addEventListener("click", (e) => {
    e.preventDefault();
    var name = nameInput.value;
    var profession = professionInput.value;
    var age = ageInput.value;

    if (name == "" || profession == "" || age == "") {
        document.getElementById('error-message').textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
        // document.querySelector(".status-msg").style.display = "block";
        document.querySelector("3error-message").style.color = "red";
    } else {
        document.getElementById('success-message').textContent = 'Success : Employee Added!';
        document.getElementById('error-message').textContent = '';

        document.querySelector("#employee-list").innerHTML += `
        <div class="employees" id="id-${name}-${profession}-${age}">
            <div class="employees-details">
                <span>Name: ${name}</span>
                <span>Profession: ${profession}</span>
                <span>Age: ${age}</span> 
            </div>
            <button id="del-btn" onclick="deleteUser('id-${name}-${profession}-${age}')">Delete User</button>
        </div>
    `;
    }
    document.querySelector('form').reset();

});

function deleteUser(id) {
    var userToDel = document.getElementById(id);
    console.log(userToDel);
    document.querySelector("#employee-list").removeChild(userToDel);
    alert("User deleted");
}