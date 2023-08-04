// reverse a string

function reverseString(text) {
  // return text.split("").reverse().join("");
  return [...text].reverse().join("");
}
console.log(reverseString("reverse this"));

// find the longest word in sentences

function findLongestWord(statement) {
  // const words = statement.split(" ");
  // let longestWord = "";
  // for (let i = 0; i < words.length; i++) {
  //     if(words[i].length > longestWord.length){
  //         longestWord = words[i];
  //     }
  // }
  // return longestWord;

  //   return statement
  //     .split(" ")
  //     .reduce(
  //       (longestWord, word) =>
  //         word.length > longestWord.length ? word : longestWord,
  //       ""
  //     );

  return statement.split(" ").reduce((longestWord, word) => {
    console.log("each: ", "w=>", word, "lw=>", longestWord);
    console.log(
      "word.length > longestWord.length:",
      word.length,
      longestWord.length,
      word.length > longestWord.length
    );
    console.log("------------");
    return word.length > longestWord.length ? word : longestWord;
  }, "");
}

function findLongestWord(statement) {
  return statement.split(" ").reduce((longestWord, word) => {
    console.log("each: ", "w=>", word, "lw=>", longestWord);
    console.log(
      "word.length > longestWord.length:",
      word.length,
      longestWord.length,
      word.length > longestWord.length
    );
    console.log("------------");
    return word.length > longestWord.length ? word : longestWord;
  }, "");
}

console.log(findLongestWord("this is awesome"));

function removeDuplicates(array) {
    // const uniqueArray = [];
    // for (let i = 0; i < array.length; i++) {
    //     if(!uniqueArray.includes(array[i])){
    //         uniqueArray.push(array[i]);
    //     }
    // }
    // return uniqueArray;

    return Array.from(new Set(array));
}
console.log(removeDuplicates([1,2,3,3,3,2,1]));

function flattenTheArray(array) {
    // const flatteneArray = [];

    // for (let i = 0; i < array.length; i++) {
    //     if(Array.isArray(array[i])){
    //         flatteneArray.push(...flattenTheArray(array[i]));
    //     }else{
    //         flatteneArray.push(array[i]);
    //     }
    // }
    // return flatteneArray;

    return array.flat(Infinity);
}

console.log(flattenTheArray([2,[3, 2,[33, 2],[7, 9]]]));

// Easy and optimal method for create a linked list

class LinkedList {
  constructor(){
    this.head = null;
  }   
  add(value){
    const node = {
      value: value,
      next: null
    };
    if(!this.head){
      this.head = node
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
  remove(value){
    if(!this.head){
      return;
    }
    if(this.head.value === value){
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    while(current&&current.value !== value){
      prev = current;
      current = current.next;
    }
    if(current){
      prev.next = current.next;
    }
  }
  search(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
const linkedList = new LinkedList();
linkedList.add(5)
linkedList.add(2);
console.log(linkedList);
console.log(linkedList.search(10));
console.log(linkedList.search(2));

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedListOpt{
  constructor(){
    this.head = null;
  }
  add(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
  remove(value){
    if(!this.head){
      return;
    }
    if(this.head.value === value){
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;

    while(current && current.value !== value){
      prev = current;
      current = current.next;
    }
    if(current){
      prev.next = current.next;
    }
  }
  search(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

const linkedListOpt = new LinkedListOpt();
linkedListOpt.add(5);
linkedListOpt.add(10);
linkedListOpt.add(15);
console.log(linkedListOpt);

console.log(linkedListOpt.search(10)); // Output: true
console.log(linkedListOpt.search(20)); // Output: false

// creating pilyfill for includes

if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, fromIndex) {
    if (this === null || this === undefined) {
      throw new TypeError('Cannot convert this value to object');
    }

    const arr = Object(this);
    const len = arr.length >>> 0;
    if (len === 0) {
      return false;
    }

    const startIndex = fromIndex || 0;
    let currentIndex = Math.max(startIndex >= 0 ? startIndex : len - Math.abs(startIndex), 0);

    while (currentIndex < len) {
      if (arr[currentIndex] === searchElement) {
        return true;
      }
      currentIndex++;
    }

    return false;
  };
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // Output: true
console.log(array.includes(6)); // Output: false

// Promise

// Simulating asynchronous operations with setTimeout
function asyncOperation1(callback) {
  setTimeout(() => {
    console.log("Async Operation 1");
    callback();
  }, 2000);
}

function asyncOperation2(callback) {
  setTimeout(() => {
    console.log("Async Operation 2");
    callback();
  }, 2000);
}

function asyncOperation3(callback) {
  setTimeout(() => {
    console.log("Async Operation 3");
    callback();
  }, 2000);
}

// Simulating callback hell
asyncOperation1(() => {
  asyncOperation2(() => {
    asyncOperation3(() => {
      console.log("All operations completed");
    });
  });
});

// Promisifying the asynchronous operations
function promiseAsyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promisifying Async Operation 1");
      resolve();
    }, 2000);
  });
}

function promiseAsyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promisifying Async Operation 2");
      resolve();
    }, 2000);
  });
}

function promiseAsyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promisifying Async Operation 3");
      resolve();
    }, 2000);
  });
}

// Using promises to avoid callback hell
promiseAsyncOperation1()
  .then(() => promiseAsyncOperation2())
  .then(() => promiseAsyncOperation3())
  .then(() => {
    console.log("All Promisifying operations completed");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
