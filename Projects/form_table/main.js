// check if the dom is loaded !important and good
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const dataTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  const storedData = JSON.parse(localStorage.getItem("formEntries")) || [];

  function saveToLocalStorage(data) {
    storedData.push(data);
    localStorage.setItem("formEntries", JSON.stringify(storedData));
  }

  function renderTable() {
    dataTable.innerHTML = "";
    storedData.forEach((entry) => {
      const newRow = dataTable.insertRow();
      newRow.insertCell().textContent = entry.firstName;
      newRow.insertCell().textContent = entry.lastName;
      newRow.insertCell().textContent = entry.age;
      newRow.insertCell().textContent = entry.specialty;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        const index = storedData.indexOf(entry);
        if (index !== -1) {
          storedData.splice(index, 1);
          localStorage.setItem("formEntries", JSON.stringify(storedData));
          renderTable();
        }
      });
      newRow.insertCell().appendChild(deleteButton);
    });
  }

  renderTable();

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

    // Save data to local storage
    saveToLocalStorage({ firstName, lastName, age, specialty });

    // Clear the form fields after submission
    form.reset();

    // Re-render the table with updated data
    renderTable();
  });
});
