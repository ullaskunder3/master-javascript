## Form example from scratch with Local Storage

Form Table [Project Link](https://ullaskunder3.github.io/master-javascript/Projects/form_table)

### Description

This is an example of a simple web form built using vanilla JavaScript and HTML. The form collects data including first name, last name, age, and specialty. The entered data is stored in the browser's local storage, and it is displayed in a table format. The table allows users to delete individual entries.

### Terms

- `document.addEventListener("DOMContentLoaded", function () { ... })`: The "DOMContentLoaded" event is fired when the initial HTML document has been completely loaded and parsed. It is a way to ensure that the JavaScript code runs after the DOM is ready to be manipulated. In this example, the code inside the event listener executes after the DOM is fully loaded.

- `localStorage`: The `localStorage` object allows us to store key-value pairs in the browser's local storage. Data stored in `localStorage` persists even after the browser is closed and can be retrieved when the user visits the website again. In this example, the form data is saved in `localStorage` as an array of objects.

- `JSON.parse` and `JSON.stringify`: The `JSON.parse()` method is used to parse a JSON string and convert it into a JavaScript object. The `JSON.stringify()` method converts a JavaScript object into a JSON string. In this example, we use these methods to convert the data between the JavaScript array and its JSON representation when storing and retrieving it from `localStorage`.

- `form.addEventListener("submit", function (event) { ... })`: This code adds an event listener to the form's submit event. When the form is submitted, the provided function is called. The `event.preventDefault()` method is used to prevent the default form submission behavior, allowing us to handle the form submission manually.

- `DOM Manipulation`: The code uses various DOM manipulation methods to retrieve form data, display data in a table, and create a "Delete" button for each entry. The methods include `getElementById`, `getElementsByTagName`, `insertRow`, `insertCell`, `textContent`, `createElement`, and `appendChild`.

### Code Line DESC

- `const dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];`: Gets the element with the ID "dataTable" and retrieves its first `<tbody>` element. It then assigns this element to the `dataTable` variable.

- `const storedData = JSON.parse(localStorage.getItem("formEntries")) || [];`: Retrieves the value associated with the key "formEntries" from the browser's local storage using `localStorage.getItem`. The value is parsed from JSON to a JavaScript object using `JSON.parse`. If the value is not found in local storage, an empty array is assigned to `storedData`.

- `function saveToLocalStorage(data) { ... }`: Defines a function called `saveToLocalStorage` that takes `data` as a parameter. This function pushes the `data` object into the `storedData` array and saves the updated array back to local storage using `localStorage.setItem` after converting it to a JSON string using `JSON.stringify`.

- `function renderTable() { ... }`: Defines a function called `renderTable` that renders the table based on the data in `storedData`. It clears the existing table, iterates through the `storedData` array, and dynamically creates rows and cells for each entry in the table. It also creates a "Delete" button for each row and adds a click event listener to handle deletion.

- `renderTable();`: Calls the `renderTable` function immediately after the "DOMContentLoaded" event fires to populate the table with any existing data from local storage.

- `const firstName = document.getElementById("firstName").value;`: Retrieves the value of the input field with the ID "firstName" and assigns it to the `firstName` variable.

- similarly for `lastname`, `age`, `specialty`

- `saveToLocalStorage({ firstName, lastName, age, specialty });`: Calls the `saveToLocalStorage` function, passing an object containing the form data.

`form.reset();`: Resets the form fields to their default values after the form is submitted.

`renderTable();`: Calls the `renderTable` function again to update the table with the new data after the form is submitted and the data is saved to local storage.