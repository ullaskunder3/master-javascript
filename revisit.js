// dont use var

let letScopeA = "letGloablScopeA";
var varScopeB = "varGloablScopeB";
const constScopeC = "constGloablScopeC";

if (true) {
  let letScopeA = "letBlockScopeA";
  var varScopeB = "varBlockScopeB";
  const constScopeC = "constBloclScopeC";
}
console.log(letScopeA);
console.log(varScopeB);
console.log(constScopeC);

// ----------
// this

const onePiece = {
  joyBoy: "M.D.Luffy",
  fifthG: function () {
    console.log("'this' will points to:\n", this);
  },
};
onePiece.fifthG();
// if
// const opObj = onePiece.fifthG;
// opObj() //point to windows object

// solution
const opObj1 = onePiece.fifthG.bind(onePiece);
opObj1();

// ------
// closure

function toyFactory(shape) {
  const closureFun = function (color) {
    return `the ${shape} toy with ${color} color `;
  };
  return closureFun;
}

const createCircleToy = toyFactory("circle");
const blueCircleToy = createCircleToy("blue");
console.log(blueCircleToy);

const createSquareToy = toyFactory("square");
const yellowCircleToy = createSquareToy("yellow");
console.log(yellowCircleToy);

// ----

// example2
function createCounter() {
  let count = 0;
  let prev = 0;

  function incrementBy(value) {
    prev = count;
    count += value;
    console.log(`Increment by ${value} {count: ${count}, prev: ${prev}}`);
  }

  function decrementBy(value) {
    prev = count;
    count -= value;
    console.log(`Decrement by ${value} {count: ${count}, prev: ${prev}}`);
  }

  return {
    incrementBy,
    decrementBy,
  };
}

// Example usage
const counter = createCounter();

counter.incrementBy(2); // {count: 2, prev: 0}
counter.incrementBy(2); // {count: 4, prev: 2}
counter.decrementBy(1); // {count: 3, prev: 4}
counter.incrementBy(3); // {count: 6, prev: 3}
counter.decrementBy(1); // {count: 5, prev: 6}

// ----

// 1: let create an empty object
let obj = Object.create(null);
console.log(obj);
// [Object: null prototype] {}

// we can add property with "defineProperty" params object, props, and descriptor

Object.defineProperty(obj, "key", {
  value: "Monkey D luffy",
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log("using Object.create:", obj);
// using Object.create: [Object: null prototype] { key: 'Monkey D luffy' }

obj.key = "test";
console.log(obj);
// this wont reassign because we set the property writable to false

console.log(Object.keys(obj));
console.log(Object.values(obj));
// we can log because of the property enumerable set to true

/**
When configurable is set to true, 
the property can be modified, deleted,
and its attributes can be changed using Object.defineProperty.

If configurable is set to false, the property becomes non-configurable, 
and subsequent attempts to modify or delete the property will throw an error.

By default, properties created through normal object assignment 
(without using defineProperty) are configurable.

Once a property becomes non-configurable, its configurability cannot be changed.

The configurable property only affects the property itself 
and not its value or attributes.
 */

try {
  // Trying to redefine the property
  Object.defineProperty(obj, "key", {
    value: "Luffy",
    writable: true,
    enumerable: true,
    configurable: true, // This will throw an error since configurable is set to false
  });
} catch (error) {
  console.error("\x1b[31m%s\x1b[0m", error.message);
}

// Trying to delete the property
const deleteResult = delete obj.key;
if (!deleteResult) {
  console.error("\x1b[31m%s\x1b[0m", "Cannot delete the 'key' property", deleteResult);
}

// using getter and setter in object

// older method

const person = {};

Object.defineProperty(person, 'name', {
  get: function() {
    return this._name;
  },
  set: function(value) {
    this._name = value;
  },
  enumerable: true,
  configurable: true
});

person.name = 'Monkey D. Garp';
console.log(person.name); // Output: Monkey D. Garp


// ES5 using constructor function

function Person() {
  let _name = '';

  Object.defineProperty(this, 'name', {
    get: function() {
      return _name;
    },
    set: function(value) {
      _name = value;
    },
    enumerable: true,
    configurable: true
  });
}

const person2 = new Person();
person2.name = 'Monkey D. Dragon';
console.log(person2.name); // Output: Monkey D. Dragon

// ES6 using classes

class newGen {
  constructor() {
    this._name = '';
  }

  get firstName() {
    return this._name;
  }

  set firstName(value) {
    this._name = value;
  }
}

const top1 = new newGen();
top1.name = 'Monkey D. Luffy';
console.log(top1.name); // Output: Monkey D. Luffy 

// ES6+ using class public field proposal

class GodLevel {
  #name = '';

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }
}

const sunGod = new GodLevel();
sunGod.name = 'neka';
console.log(sunGod.name); // Output: neka


// function useState(initialValue) {
//   let state = initialValue;

//   function setState(newValue) {
//     state = newValue;
//   }

//   return [
//     () => state, // Getter function
//     setState, // Setter function
//   ];
// }

// const [getValue, setValue] = useState("name");
// console.log(getValue()); // Output: "name"

// setValue("newValue");
// console.log(getValue()); // Output: "newValue"

// const [getObjectValue, setObjectValue] = useState({ name: "ullas" });
// console.log(getObjectValue()); // Output: { name: 'ullas' }

// setObjectValue({ name: "newValue" });
// console.log(getObjectValue()); // Output: { name: 'newValue' }

// const [isOpen, setOpen] = useState(true);
// console.log(isOpen()); // Output: true

// setOpen(false);
// console.log(isOpen()); // Output: false

// -------

function useState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
  }

  const stateProxy = new Proxy({}, {
    get: function(target, prop) {
      if (prop === 'value') {
        return state;
      }else if(prop === 'type'){
        return typeof state
      }
      return target[prop];
    },
    set: function(target, prop, value) {
      if (prop === 'value') {
        setState(value);
      } else {
        target[prop] = value;
      }
      return true;
    },
  });

  return [
    stateProxy,
    stateProxy
  ];
}

const [getValue, setValue] = useState("name");
console.log(getValue.value); // Output: "name"

// custom get type of the data
console.log("return the type of data:",getValue.type);

setValue.value = "newValue";
console.log(getValue.value); // Output: "newValue"

// ----

const [getObjectValue, setObjectValue] = useState({ name: "ullas" });
console.log(getObjectValue.value); // Output: { name: 'ullas' }

// custom get type of the data
console.log("return the type of data:",getObjectValue.type);


setObjectValue.value = { name: "newValue" };
console.log(getObjectValue.value); // Output: { name: 'newValue' }

// ----
const [isOpen, setOpen] = useState(true);
console.log(isOpen.value); // Output: true

// custom get type of the data
console.log("return the type of data:",isOpen.type);

setOpen.value = false;
console.log(isOpen.value); // Output: false