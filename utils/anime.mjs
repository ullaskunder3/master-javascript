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
