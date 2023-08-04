document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const dataTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // now get values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const specialty = document.getElementById("specialty").value;

    // Validate age
    if (age < 18) {
      alert("Age must be between 18 and 100.");
      return;
    } else if (age > 99) {
      alert(`Age ${age} are you a superman`);
      return;
    }

    // Clear the form fields after submission
    form.reset();

    // Append data to the table
    const newRow = dataTable.insertRow();
    newRow.insertCell().textContent = firstName;
    newRow.insertCell().textContent = lastName;
    newRow.insertCell().textContent = age;
    newRow.insertCell().textContent = specialty;
  });
});
