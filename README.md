# Javascript

## Thanks

> I would like to express my gratitude to the following YouTube creators for their impactful videos that greatly aided my understanding of JavaScript core concepts:

- CodeSmith (Will Sentance): "JavaScript The Hard Parts: Object Oriented Programming"
- Kyle Simpson: "You Don't Know JS" (also available on YouTube)
- Dave Gray: YouTube JavaScript Playlist
- Enes Karakaş: Advanced Object Concepts (available on YouTube)

Thank you all for sharing your knowledge and helping me on my learning journey!

```js
function outerFun() {
    let counter = 0;
    function increment() {
        counter++;
        console.log("counter:", counter);
    }
    increment();
}
outerFun()

```


```
Global Execution Context:
  - Variables:
    - outerFun: `<function reference>`
  - Function Declarations:
    - outerFun()

Execution Context of outerFun():
  - Variables:
    - counter: `0`
    - increment: `<function reference>`
  - Function Declarations:
    - increment()
  - Call Stack:
    - outerFun()

Execution Context of increment():
  - Variables:
    - (none)
  - Call Stack:
    - increment()
    - outerFun()
    - Global Execution Context
```

In this representation:

- The global execution context includes the `outerFun` function reference.
- When `outerFun()` is invoked, a new execution context for `outerFun` is created. It includes the `counter` variable initialized to 0 and the `increment` function reference.
- Within the `outerFun` execution context, there is a call to the `increment()` function. This triggers the creation of a new execution context for `increment`.
- The `increment` execution context does not have any variables specific to it.
- The call stack keeps track of the active execution contexts. Initially, `outerFun()` is at the top of the call stack. When `increment()` is called, it is pushed onto the call stack above `outerFun()`, and the global execution context is at the bottom.
- After the `increment` function completes its execution, its execution context is popped off the call stack.
- Once `outerFun()` finishes, its execution context is also popped off the stack.
- Finally, only the global execution context remains on the call stack.

I hope this Markdown format helps you understand the execution contexts more clearly. Let me know if you have any further questions!


```js
function outerFun() {
    let counter = 0;
    function increment() {
        counter++;
        console.log("counter:", counter);
    }
    increment();
}
outerFun()
```
1. Global Execution Context:
   - Variables:
     - outerFunction: `<function reference>`
     - exFun: `undefined` (initially uninitialized)

2. When `outerFunction()` is called:
   - A new execution context is created for `outerFunction`.
   - The `counter` variable is declared and initialized to 0 in the `outerFunction` execution context.
   - The `increment` function is defined inside the `outerFunction` function.
   - The value of `counter` (0) is logged to the console.
   - The `increment` function is returned from `outerFunction` and assigned to the `exFun` variable.
   - The execution context of `outerFunction` is deleted as it has completed execution.

3. Call Stack:
   - **Initially:** `outerFunction()` is at the top of the call stack, and the global execution context is at the bottom.

4. When `exFun()` is called the first time:
   - A new execution context is created for `exFun`.
   - Inside `exFun`, it tries to access and increment `counter`.
   - It first looks for `counter` within its own execution context but doesn't find it.
   - It then looks in the outer scope, which is the global execution context, but still doesn't find `counter`.
   - Since `counter` is not found, it does not increment.
   - The execution context of `exFun` completes, and it is popped off the call stack.

5. Call Stack:
   - After `exFun()` is called: `exFun()` is at the top of the call stack, and the global execution context is at the bottom.

6. When `exFun()` is called the second time:
   - A new execution context is created for `exFun`.
   - Inside `exFun`, it again tries to access and increment `counter`.
   - As before, it looks for `counter` within its own execution context but doesn't find it.
   - It then looks in the outer scope, which is the global execution context, but `counter` was never incremented or reassigned, so it remains 0.
   - Since `counter` is not found, it does not increment.
   - The execution context of `exFun` completes, and it is popped off the call stack.

7. Call Stack:
   - After the second `exFun()` call: `exFun()` is at the top of the call stack, and the global execution context is at the bottom.

In summary, the `counter` variable is not incremented because `exFun` tries to access it in the global execution context after the `outerFunction` execution context has been deleted. The value of `counter` is not persisted, so it remains at its initial value of 0.

## Promises and Async/Await:

- Promises: Asynchronous programming is a fundamental aspect of JavaScript. Promises provide a way to handle asynchronous operations and avoid callback hell

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = "One piece is real";
      if (data) {
        resolve(data);
      } else {
        reject('Error occurred');
      }
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

```

- Async/Await: Introduced in ES2017, async/await simplifies asynchronous code even further by allowing you to write asynchronous code that looks like synchronous code

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some fetched data';
      if (data) {
        resolve(data);
      } else {
        reject('Error occurred');
      }
    }, 2000);
  });
};

const fetchDataAsync = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchDataAsync();

```

## Closures

- Closures allow functions to retain access to variables from their parent scopes even after the parent function has finished executing.

```js
const outerFunction = (outerParam) => {
  const innerFunction = (innerParam) => {
    console.log(outerParam + innerParam);
  };

  return innerFunction;
};

const closure = outerFunction(10);
closure(5); // Output: 15

```

## Object Oriented Programming OOP ✨

4 principle:

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## Prototypes

The `prototype` is a special hidden property object that is associated with every functions and objects by default in JavaScript.

Objects in JavaScript are linked to a certain prototype, by means object can access that prototype method => `Prototypal inheritance`

```js
let myArray = [11,22,33]
console.log( myArray.at(0) )
//output: 11

/** Array.prototype is the prototype of all array objects
 * behind its calling myArray.prototype.at(2)
 **/
```

OOP is an enormously popular paradigm for structuring out complex code

- Easy to add features and functionality
- Performant (efficient in term of memory)
- Easy for us and other developers to reason about (a clear structure)

Objects - store functions with their associated data!

```javascript
const user1 = {
    name: 'ullas',
    score: 2,

    increment: function(){
        user1.score++;
    }

};

user1.increment();
```

This is the principal of encapsulation.

> Multiple way to create an object, just to get familier with few means of defining the object

## Using empty object and then populate it with dot notation 🔰

Creating user2 user 'dot notation'

```Javascript

const user2 = {};

user2.name = 'ullas';
user2.score = 6;
user2.increment = function(){
    user2.score++;
};

// Square bracket notation [] (never used except in one condition: evaluatng what goes in ex: user2[property] property: 'name')

```

- Using the built in js Object.create which will create empty object

```Javascript

const user3 = Object.create(null);

user3.name = 'ullas';
user3.score = 7;
user3.increment = function(){
    user3.score++;
};

```

! *our code is getting repetitive, we are breaking our DRY principle*

? **What if we have milion of user....?**

## Champ => Functions 😁

 They are helpfull in this case so we don't have to repeat the code. They are wrapping up the instructions... write once call as many time you want

## Solution 1. Generate Object using a function

```Javascript
function userCreator(name, score){

    const newUser = { };

    newuser.name = name;
    newuser.score = score;

    newuser.increment = function(){
        newuser.score++;
    };
    
    return newUser;
};

const user1 = userCreator('ullas', 10)
const user2 = userCreator('kingsman', 10)


user2.increment()

```

> ! this solution is doing its task but **fundamentally Unusable**

Reason:

- In global memory
  
  **Initially:**

  ```js
    global memory > 
    - userCreator: -[f]-

    - User1 ...undefined
  ```

user1  = `userCreator('ullas' 10)`

which create a new execuation context

- In a local memory

  ```js
    local Memory >
    - name: 'ullas'
    - score: 10

    - newUser: {
        name: 'ullas'
        score: 10
        increment: -[f]-
    }
  ```

  returning => `newUser` object
  
  - return out to **Gloabl Memory**

- In global memory

  ```js
    global memory > 
    - [function userCreator()]

    - User1 : {
        name: 'ullas'
        score: 10
        increment: -[f]-
    }
  ```

Same with =>  **user2**, declaring user2

- In global memory

  ```js
    global memory with > 
    - [function userCreator()]

    - user1 : {
        name: 'ullas'
        score: 10
        increment: -[f]-
    }
    - user2: ...undefined
  ```

user2  = `userCreator('kingsman' 10)`

which create a new execuation context

- In a local memory

  ```js
    local Memory with >
    - name: 'kingsman'
    - score: 10

    - newUser: {
        name: 'kingsman'
        score: 10
        increment: -[f]-
    }
  ```

    returning => `newUser` object
  
  - return out to **Gloabl Memory**

- In global memory

  ```js
    global memory with > 
    - [function userCreator()]

    - user1 : {
        name: 'ullas'
        score: 10
        increment: -[f]-
    }

    - user2 : {
        name: 'kingsman'
        score: 10
        increment: -[f]-
    }
  ```

next step was => **to increment**

```js
User1.increment()
User2.increment()
```

## Problem

> Each time we create a new user we make space in our computer's memory for our data functions.
But our functions are just copies

In Global memory:

```js
    global memory with > 
    - [function userCreator()]

    - user1 : {
        name: 'ullas'
        score: 10
        increment: -[f]- // same copy
    }

    - user2 : {
        name: 'kingsman'
        score: 10
        increment: -[f]- // same copy
    }

    - what if n number of user...
```

- Each object have brand new increment function defined on them...
We should be able attach multiple function on them not single function ex: login, logout, render etc...

Is there a better way? to getting single copyies of them in `Global Memory`

---

## Solution 2 😮

- Store the increment function in just one object and have the interpreter, if it doesn't find the function on user1, look up to that object to check if it's there

How to make this link ?

## Prototype chain

In Global memory:

```js
    global memory with > 

    userCreator : -[f]-

    user1 : {
        name: 'ullas'
        score: 10
        => functionStore
    }

    user2 : {
        name: 'kingsman'
        score: 10
        => functionStore
    }

    function functionStore: {
        increment: -[f]-
    }

    // => this bond is called prototypal bond : chain link to or go look functionStore
    /**
     * when user doesn't find increment it goes look in function store for increment() 
     */

```


The Code Base

```js
function userCreator (name, score){
    const newUser = Object.create(functionStore);

    newUser.name = name;
    newUser.score = score;

    return newUser;
};

const functionStore = {
    increment: function(){ this.score++; },
    Login: function(){ console.log("Your are loggedin"); }
};

const user1 = userCreator('ullas', 10)
const user2 = userCreator('kingsman', 10)

user1.increment();
```

In the global memory

**Initially:**

  ```js
    global memory > 

    userCreator: -[f]-

    functionStore: {
        increment: -[f]-
        login: -[f]- 
    }

    User1 :undefined
  ```

user1  = `userCreator('ullas' 10)`

which create a new execuation context

- In a local memory

  - In thread of execution:
  ```js
  newUser: Object.create(functionStore)
  => which return empty obj {}
  ```

  ```js
    local Memory >
    
    - name: 'ullas'
    - score: 10

    - newUser: {
        name: 'ullas'
        score: 10

        => [hidden property:
        _prto_ which is bond to `functionStore` which we passed in Object.create(`functionStore`);
        ]
    }
  ```

  - **returning** => `newUser` object
  
  - return out to **Gloabl Memory**

  ```js
    global memory > 

    userCreator: -[f]-

    functionStore: {
        increment: -[f]-
        login: -[f]- 
    }

    User1 : {
        name: 'ullas'
        score: 10

        => [hidden: bond _proto_ to `functionStore` for `Increment()`]
    }
  ```

Now the `increment()`

- This `increment()` function need to be usable on what ever object we run it on.

- We need some placeholder inside of that function increment in order to refer to that object

Or we need label thats always going to refer to that object on which we are running the function


> **this** Fundamental rule always pointing to the relevent object to the left-hand side of the dot on which we calling the function

Creates a execuation Context

In a local memory

In the example above, `user1` is to “the left of the dot” which means the `this` keyword is referencing the `user1` object. So, it’s as if, inside the `increment` method, the JavaScript interpreter changes `this to user1`.

```js
// this => to user1

this.score++
===> user1.score++
```

- Do we have copies of increment() stored in user1 and user2 => `none`

> Super sophisticated but not standard

## solution 3, new Keyword 🤩

Embracing the Magic of the `new` Keyword: No Hard Work, Just Automation! 🤩

Let's witness this enchantment in action with a spellbinding code example:

```js
const user1 = new userCreator('ullas', 10)
```

When we call the constructor function with `new` keyword in front we automate 2 things

- **Create** a new user object
- **return** the new user object

> **Creating a New User Object**: By simply adding new before the function call, the `new` keyword conjures a brand-new user object into existence. No more manual labor required!

> **Returning the New User Object**: The `new` keyword, being the generous enchantress it is, automatically returns the newly created user object. We can catch it and cherish it as our very own.

But now we need to adjust how we write the body of userCreator

- Refer to the auto-created object?
- Known where to put our single copies of functions?

## Interlude - functions are both objects and functions

Before we continue our journey, let's explore a mesmerizing fact about functions. In JavaScript, functions possess the remarkable ability to be both objects and functions simultaneously. Mind-bending, isn't it?

```js
function multiplyBy2(num){
    return num*2
}

multiplyBy2.stored = 5
multiplyBy2.(3) // 6

multiplyBy2.stored //5
multiplyBy2.prototype // ()

```

Here, we have the captivating `multiplyBy2` function. It gracefully showcases its object-like qualities by sporting a `stored` property with a value of 5. But wait, there's more! When invoked as a function, it magically multiplies the provided number by 2. In this case, `multiplyBy2(3)` gracefully yields 6.

Curiously, we can access the `stored` property separately, giving us a surprising value of 5. Additionally, the enigmatic `multiplyBy2.prototype` property returns an empty parentheses pair (). Its true purpose will soon be revealed.

- let's return to the enchanting world of the `UserCreator` constructor function. 

Code Base

```js
function UserCreator(name, score){
    this.name = name;
    this.score = score;
}
UserCreator.prototype.increment = function(){
    this.score++;
}
UserCreator.prototype.login = function(){
    console.log("You are loggedin")
}

const user1 = new UserCreator('ullas', 10);
user1.increment();
```

In the global memory

**Initially:**

  ```js
    global memory > 

    userCreator() -[f]- //userCreator function version

    userCreator: {
        //userCreator object version
        prototype: {
            //functionStore
            increment: -[f]-
            login: -[f]-
        }
    }

    User1 :undefined
  ```

user1  = new `UserCreator('ullas' 10)`

which create a new execuation context

Within the realm of `Local Memory`, secrets are revealed:

- In a local memory

  ```js
    local Memory >
    
    - name: 'ullas'
    - score: 10

   // Due to the power of the `new` keyword, an empty object is created first.
   // The `this` label binds to the functionStore using the hidden _proto_ reference.
   // This becomes the object returned by `create()`.

    this: {
        name: 'ullas'
        score: 10
    }

  ```

  returning => `this` object to `user1`
  
  - return out to **Gloabl Memory**

  ```js
    global memory > 

    userCreator() -[f]- //userCreator function version

    userCreator: {
        //userCreator object version
        prototype: {
            //functionStore
            increment: -[f]-
            login: -[f]-
        }
    }

    User1 : {
        name: 'ullas'
        score: 10
       // Hidden _proto_ reference to userCreator.prototype, granting access to `increment()`
    }
  ```

Now the `increment()`

```js
user1.increment()
```

Creates a execuation Context

In a local memory

```js
// this => to user1

this.score++
// Translates to: user1.score++
```

Benefits

- **Faster to Write**: The new keyword automates object creation and eliminates the need for manual object instantiation. We can summon objects into existence with a single line of code. Huzzah!

- **Simplicity Reigns**: Our code becomes cleaner and more intuitive. We no longer need to explicitly return the object or worry about the intricate details of object creation. The new keyword takes care of it all. How delightful!

- **Professional Practices**: Despite its magical powers, using the new keyword remains a widely accepted and professional practice. Embrace this technique to impress your peers and create code that shines like a star.

## Solution 4, class 🙌

## The class `Syntatic Sugar`

```js
class userCreator{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    increment(){
        this.score++
    }
    login(){
        console.log('loggin');
    }
}
const user1 = new UserCreator('ullas', 10)
user1.increment()
```

In the global memory

**Initially:**

  ```js
    global memory > 

    //class
    [
        userCreator() -[f]- //userCreator function version

        userCreator: {
            //userCreator object version
            prototype: {
                // =>functionStore
                increment: -[f]-
                login: -[f]-
            }
        }
    ]

    User1 :undefined
  ```

user1  = new `UserCreator('ullas' 10)`

which create a new execuation context

- In a local memory

  ```js
    local Memory >
    
    - name: 'ullas'
    - score: 10

    // due to new it create an empty object first and 'this' label for reference bond to functionStore using _proto_
    // this = object create() returning => { } 

    this: {
        name: 'ullas'
        score: 10
    }

  ```

  returning => `this` object to `user1`
  
  - return out to **Gloabl Memory**

  ```js
    global memory > 

    userCreator() -[f]- //userCreator function version

    userCreator: {
        //userCreator object version
        prototype: {
            //functionStore
            increment: -[f]-
            login: -[f]-
        }
    }

    User1 : {
        name: 'ullas'
        score: 10

        // hidden _proto_ reference to userCreator.prototype => increment()
    }
  ```

## Composition over inheritance
