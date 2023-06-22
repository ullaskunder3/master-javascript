/**
 * javascript es6 or ecmascript 6 introduce the spread operator.
 * The syntax is three dots(...) followed by the array (or the iteratable)
 * it expands the array into individual elements.
 * So it can be used to expand the array in a places
 * where zero or more elements are expected.
 */

//1. copying an array

let MyNameis = ["slim", "shady"];

let myNewName = [...MyNameis];

console.log(myNewName);
// [ 'slim', 'shady' ]

//2. Copying one array element to another array

let realFName = ["ullas"];

let iLike = ["mysteries"];

let beLike = [...realFName, ...iLike];

console.log(beLike);
// [ 'ullas', 'mysteries' ]

//3. spreading elements together with an individual element

let elements = ["hi", "hello", "lee"];

let moreElem = [...elements, "Bbc", "news"];

console.log(moreElem);
// [ 'hi', 'hello', 'lee', 'Bbc', 'news' ]

//4. Spread elemts on function calls

let prepareFor = ["Vulturous", "Negative", "Nepotist"];

let functionWhatEv = (para1, para2, para3) => {
  console.log(`prepare your self from: ${para1}, ${para2}, ${para3}...`);
};

functionWhatEv(...prepareFor);
// prepare your self from: Vulturous, Negative, Nepotist...

// 5. Destructuring Assignment
const animeCharacters = {
  protagonist: "Monkey D. Luffy",
  rival: "Sasuke Uchiha",
  heroine: "Hinata Hyuga",
};

const { protagonist, rival, heroine } = animeCharacters;

console.log(`Protagonist: ${protagonist}`);
console.log(`Rival: ${rival}`);
console.log(`Heroine: ${heroine}`);
/**
prepare your self from: Vulturous, Negative, Nepotist...
Protagonist: Monkey D. Luffy
Rival: Sasuke Uchiha
Heroine: Sakura Kinomoto
 */

// 6. Arrow Functions
const animeQuotes = [
  "Believe in yourself",
  "I will surpass my limits",
  "Say You Want To Live!",
];

const addExclamation = (quotes) => {
  const exclaimedQuotes = quotes.map((quote) => quote + "!");
  return exclaimedQuotes;
};

console.log(addExclamation(animeQuotes));
/**
[
  'Believe in yourself!',
  'I will surpass my limits!',
  'Say You Want To Live!!'
]
*/

// 7. Template Literals
const characterName = "Son Goku";
const animeName = "Dragon Ball Z";
const quote = `My name is ${characterName} and I am from ${animeName}.`;

console.log(quote);
// My name is Son Goku and I am from Dragon Ball Z.

// 8. Classes
class AnimeCharacter {
  constructor(name, gear) {
    this.name = name;
    this.gear = gear;
  }

  introduce() {
    console.log(`I am ${this.name} and This is the pinnacle of what I can do!! This is Gear ${this.gear}!!!`);
  }
}

const naruto = new AnimeCharacter("Monkey D. Luffy", 5);
naruto.introduce();
// I am Monkey D. Luffy and This is the pinnacle of what I can do!! This is Gear 5!!!

// 9. Promises
const animePromise = new Promise((resolve, reject) => {
  const isSuccessful = true;

  setTimeout(() => {
    if (isSuccessful) {
      resolve("Anime successfully loaded!");
    } else {
      reject("Error: Failed to load anime.");
    }
  }, 2000);
});

animePromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
    // Anime successfully loaded!

// 10. Async/Await
const fetchAnimeData = async () => {
  try {
    const response = await fetch("https://api.jikan.moe/v4/random/anime");
    const {data} = await response.json();
    let title = data.title_english || data.title_japanese || data.title;
    console.log("RANDOM anime:",title);
  } catch (error) {
    console.log("Error fetching anime data:", error);
  }
};

fetchAnimeData();
// RANDOM anime: Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω

// 11. Default Export and Import:
// ES6 introduced the concept of default exports and imports,
// allowing you to export and import a single default value from a module

/**
 * (node:26309) Warning: To load an ES module,
 *  set "type": "module" in the package.json or
 *  use the .mjs extension.
 */

import favoriteAnime from "./utils/anime.mjs";

console.log(`My favorite anime is ${favoriteAnime}!`);
// My favorite anime is One Piece!

// 12. Rest Parameters:
// Rest parameters allow you to represent an indefinite number of arguments as an array.
// It uses the same three dots(...) syntax as the spread operator, but in a different context

const topAnimeCharacters = (...characters) => {
  console.log(`Top anime characters: ${characters.join(", ")}`);
};

topAnimeCharacters("Monkey D. Luffy", "Naruto Uzumaki", "Ichigo Kurosaki");
// Top anime characters: Monkey D. Luffy, Naruto Uzumaki, Ichigo Kurosaki

// 13. Array Methods:
// ES6 introduced several new methods to work with arrays more efficiently

// Array.find():
// The find() method returns the first element in an array that satisfies a given condition.

const animeCharacterss = ["Luffy", "Naruto", "Goku"];

const foundCharacter = animeCharacterss.find((character) =>
  character.includes("u")
);

console.log(`Found character: ${foundCharacter}`);
// Found character: Luffy

// Array.filter():
// The filter() method creates a new array with all elements that pass a given condition.

const animeCharactersss = ["Luffy", "Naruto", "Goku"];

const filteredCharacters = animeCharactersss.filter((character) =>
  character.includes("o")
);

console.log(`Filtered characters: ${filteredCharacters}`);
// Filtered characters: Goku

// Array.includes():
// The includes() method checks if an array includes a specific element and returns a boolean.

const animeCharacterssss = ["Luffy", "Naruto", "Goku"];

const includesNaruto = animeCharacterssss.includes("Naruto");

console.log(`Includes Naruto? ${includesNaruto}`);
// Includes Naruto? true

// 14. Modules:
// ES6 introduced the concept of modules, which allows you to split your code into separate files and import/export functionality between them. Modules help organize code and facilitate reusability.

// main.js
import { getRandomQuote } from "./utils/anime.mjs";

const randomQuote = getRandomQuote();
console.log(`Random anime quote: ${randomQuote}`);
// Random anime quote: I will surpass my limits

// 15.Set and Map Methods:
// Sets and Maps introduced in ES6 have their own methods for adding, retrieving, and manipulating data
const animeGenres = new Set();

animeGenres.add("Shounen");
animeGenres.add("Adventure");
animeGenres.add("Comedy");

console.log(animeGenres.has("Shounen")); // true
console.log(animeGenres.size); // 3

const animeInfo = new Map();

animeInfo.set("One Piece", "Adventure");
animeInfo.set("Naruto", "Shounen");

console.log(animeInfo.get("Naruto")); // Shounen
console.log(animeInfo.size); // 2
