const gameUrl = "https://api.rawg.io/api/games";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + gameUrl;

async function fetchGames() {
  try {
    const responsen = await fetch(corsEnabledUrl);
    const games = await responsen.json();
    createGames(games);
  } catch (error) {
    console.log(error);
  }
}
fetchGames();

function createGames(games) {
  const results = games.results;
  console.log(results);

  const gameContainer = document.querySelector(".results");

  let html = "";

  for (let i = 0; i < results.length; i++) {
    html += `<div class="game">
    <h2>${results[i].name}</h2>
    <img src="${results[i].background_image}" alt=${results[i].name}>
</div>`;
  }

  gameContainer.innerHTML = html;
}
