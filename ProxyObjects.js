// Proxy Objects in JavaScript

// Basic Proxy Usage
// Create an object with properties
let legendObject = {
  prop1: "monkey d luffy",
  prop2: "Roronoa Zoro",
  prop3: "Vinsmoke Sanji",
};

// Create a handler object with trap methods
let handler = {
  alternativeProp: "baka",
  get: function (target, prop, receiver) {
    // Intercept property access
    if (prop in target) {
      return target[prop]; // Return the property value if it exists
    } else {
      return `No such name, ${this.alternativeProp}`; // Return a custom message for non-existing properties
    }
  },
  
  set: function (target, prop, receiver) {
    // Intercept property assignment
    if (prop in target) {
      return true; // Allow setting existing properties
    } else {
      const errorMessage = `\x1b[31mAdding new prop is prohibited, ${this.alternativeProp}\x1b[0m`;
      throw new TypeError(errorMessage); // Throw an error for new properties
    }
  },
};

// Create a proxy object using the original object and handler
let proxy = new Proxy(legendObject, handler);

// Access properties of the proxy object
console.log(proxy.prop1); // Output: monkey d luffy
console.log(proxy.prop3); // Output: Vinsmoke Sanji

// Try to set a new property on the proxy object
try {
  proxy.prop4 = "amigo"; // This will throw an error
} catch (error) {
  console.log(error.message); // Output: Adding new prop is prohibited, baka
}

console.log("------------------");
// ----------------------

// Protecting Original Object
// Create a protected object using an IIFE
let protectedObj = (function () {
  const data = {
    name: "Monkey D Luffy",
    role: "King of the pirate",
    secret: "One Piece",
  };

  // Create a handler object with trap methods
  let handler = {
    alternativeProp: "baka",
    get: function (target, property, receiver) {
      if (property === "secret") {
        if (receiver !== restrictedProxyObject) {
          throw new Error(
            "You do not have permission to access this property :)"
          );
        }
      }
      return target[property];
    },
  };

  // Create a proxy object using the original object and handler
  const restrictedProxyObject = new Proxy(data, handler);

  return {
    getName() {
      return restrictedProxyObject.name;
    },
  };
})();

console.log("access name from method:",protectedObj.getName()); // Output: Monkey D Luffy

if (typeof protectedObj.name === "undefined") {
  console.log(
    "\x1b[107m\x1b[34m%s\x1b[0m",
    `Validation Error: access name directly: ${protectedObj.name}`
  );
}
console.log("------------------");

// ------------------------

// Validating JSON Data
// Create an array of objects representing JSON data
let returnObj = [
  { id: 101, name: "ullas", pass: "erghnm" },
  { id: 102, name: "kingsman", pass: "erghnm" },
  { id: 103, name: "batman", pass: "erghnm" },
  { id: 104, name: "hacker", pass: "1234" },
  { id: 105, name: "fake", pass: "1234" },
  { id: 106, name: "hacker", pass: "1234" },
];

// Map over each object in the array and create a proxy object for each
returnObj = returnObj.map((person) => {
  return new Proxy(person, {
    get: function (target, prop, receiver) {
      // Intercept property access
      if (prop in target) {
        if (prop === "pass" && target[prop] === "1234") {
          const errorMessage = `Hacker detected: ${JSON.stringify(target)}`;
          throw new Error(errorMessage); // Throw an error for specific property value
        } else {
          return target[prop]; // Return the property value
        }
      }
    },
    set: function (target, prop, receiver) {
      // Intercept property assignment
      return true; // Allow setting properties
    },
  });
});

// Access the "pass" property of each proxy object
try {
  returnObj.forEach((person) => {
    person.pass; // Accessing this property may throw an error
  });
} catch (error) {
  console.log(
    "\x1b[47m\x1b[31m%s\x1b[0m",
    `Validation Error: ${error.message}`
  );
  // Output: Validation Error: Hacker detected: {"id":104,"name":"hacker","pass":"1234"}
}
console.log("------------------");

// -----------------------

const user = {
  name: "John Doe",
  role: "admin",
  secret: "ed55&8vvnb",
};

const handlerParams = {
  get(target, property, receiver) {
    if (property === "secret") {
      if (receiver !== realUserProxyObj) {
        throw new Error("You do not have permission to access this property.");
      }
    }
    return target[property];
  },
};

const realUserProxyObj = new Proxy(user, handlerParams);

// Only the user himself can access the "secret" property.
// Access the "secret" property with the proxy object as the receiver
console.log(
  "\x1b[104m\x1b[34m%s\x1b[0m",
  `ADMIN access granted: ${realUserProxyObj.secret}`
); // ADMIN access granted: ed55&8vvnb

// Create a new object inheriting from the realUserProxyObj
const inheritedUserObj = Object.create(realUserProxyObj);

// Access the "secret" property using the inherited object as the receiver
try {
  console.log(inheritedUserObj.secret); // Error: You do not have permission to access this property.
} catch (error) {
  console.log(
    "\x1b[43m\x1b[91m%s\x1b[0m",
    `Validation Error: ${error.message}`
  );
}
