const favoriteAnime = "One Piece";
export default favoriteAnime;

export const animeQuotes = [
  "Believe in yourself",
  "I will surpass my limits",
  "Say You Want To Live!",
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * animeQuotes.length);
  return animeQuotes[randomIndex];
};


/**
 // helper.js
 module.exports = helper
 ----------------------------
 module.exports.user = user
 module.exports.id = id
 ----------------------------
 module.exports = {user, id}

 // app.js
 const helper = require('')
 helper.user("")

 // helper.js 
 export
 */