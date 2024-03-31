// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let table = document.getElementById('employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let extension = document.getElementById('extension');
    let email = document.getElementById('email');
    let department = document.getElementById('department');
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelete = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id.value));
    cellName.appendChild(document.createTextNode(name.value));
    cellExtension.appendChild(document.createTextNode(extension.value));
    cellEmail.appendChild(document.createTextNode(email.value));
    cellDepartment.appendChild(document.createTextNode(department.value));
    
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);
 
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount ++;
    let empCount = document.getElementById('empCount');
    empCount.innerHTML = `(${employeeCount})`;

})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this task?')) {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
        }
        employeeCount --;
        let empCount = document.getElementById('empCount');
        empCount.innerHTML = `(${employeeCount})`;
    }
})