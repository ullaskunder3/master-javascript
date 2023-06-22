// run this file with node or nodemon
const fs = require("fs");
const path = require("path");
const readline = require("readline");

function getJavaScriptFiles() {
  const files = fs.readdirSync(__dirname);
  return files.filter((file) => file.endsWith(".js") && file !== "jsRunner.js");
}

function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Function to run the selected JavaScript file
function runJavaScriptFile(fileName) {
  const filePath = path.join(__dirname, fileName + ".js");

  if (!fs.existsSync(filePath)) {
    console.log(`File '${fileName}' does not exist.`);
    return;
  }

  console.log(`Running ${fileName}:`);
  require(filePath);

  console.log("---------------------------");
  console.log("Available JavaScript files:");
  const files = getJavaScriptFiles();
  console.log(files);
}

async function main() {
  console.log("Available JavaScript files:");
  const files = getJavaScriptFiles();
  console.log(files);

  let exit = false;

  while (!exit) {
    const choice = await prompt(
      'Select a file to run or enter "X" to exit jsRunner.js: '
    );

    if (choice.toUpperCase() === "X") {
      console.log("Exiting jsRunner.js");
      exit = true;
    } else {
      const fileToRun = files.find((file) =>
        file.toLowerCase().startsWith(choice.toLowerCase())
      );
      if (fileToRun) {
        runJavaScriptFile(fileToRun.slice(0, -3));
        console.log("---------------------------");
      } else {
        console.log("Invalid choice. Please try again.");
      }
    }
  }

  process.exit(0);
}

main();
