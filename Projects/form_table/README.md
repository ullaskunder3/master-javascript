## Form example from scratch with Local Storage

### Description

This is an example of a simple web form built using vanilla JavaScript and HTML. The form collects data including first name, last name, age, and specialty. The entered data is stored in the browser's local storage, and it is displayed in a table format. The table allows users to delete individual entries.

### Terms

1. `document.addEventListener("DOMContentLoaded", function () { ... })`: The "DOMContentLoaded" event is fired when the initial HTML document has been completely loaded and parsed. It is a way to ensure that the JavaScript code runs after the DOM is ready to be manipulated. In this example, the code inside the event listener executes after the DOM is fully loaded.

2. `localStorage`: The `localStorage` object allows us to store key-value pairs in the browser's local storage. Data stored in `localStorage` persists even after the browser is closed and can be retrieved when the user visits the website again. In this example, the form data is saved in `localStorage` as an array of objects.

3. `JSON.parse` and `JSON.stringify`: The `JSON.parse()` method is used to parse a JSON string and convert it into a JavaScript object. The `JSON.stringify()` method converts a JavaScript object into a JSON string. In this example, we use these methods to convert the data between the JavaScript array and its JSON representation when storing and retrieving it from `localStorage`.

4. `form.addEventListener("submit", function (event) { ... })`: This code adds an event listener to the form's submit event. When the form is submitted, the provided function is called. The `event.preventDefault()` method is used to prevent the default form submission behavior, allowing us to handle the form submission manually.

5. `DOM Manipulation`: The code uses various DOM manipulation methods to retrieve form data, display data in a table, and create a "Delete" button for each entry. The methods include `getElementById`, `getElementsByTagName`, `insertRow`, `insertCell`, `textContent`, `createElement`, and `appendChild`.