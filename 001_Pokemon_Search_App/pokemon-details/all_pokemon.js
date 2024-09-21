// const main = document.querySelector("main");

// fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
//   .then((res) => res.json())
//   .then((data) => {
//     for (let i = 0; i < data.results.length; i++) {
//       showPokemonDetails(data.results[i].url);
//     }
//   });

// function showPokemonDetails(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then(({ name, sprites: allImgObject }) => {
//       const orderedAllImgurl = [];
//       orderedAllImgurl[0] = allImgObject.front_default;

//       delete allImgObject.front_default;

//       let allImgUrlExceptFirst = Object.values(allImgObject);

//       for (let i = 1; i <= allImgUrlExceptFirst.length; i++) {
//         orderedAllImgurl[i] = allImgUrlExceptFirst[i - 1];
//       }

//       const pokemonCardContainer = document.createElement("div");
//       pokemonCardContainer.classList.add("pokemon-card-container");

//       pokemonCardContainer.innerHTML = `
//         <div class="left-arrow arrow"><img src="./images/left-arrow-icon.svg" alt="" /></div>
//         <img
//           src="${orderedAllImgurl[0]}"
//           alt=""
//           class="pokemon-img"
//         />
//         <div class="right-arrow arrow"><img src="./images/right-arrow-icon.svg" alt="pokemon" /></div>
//         <p> ${name}</p>
//       `;

//       const leftControl = pokemonCardContainer.querySelector(".left-arrow");
//       const rightControl = pokemonCardContainer.querySelector(".right-arrow");
//       const img = pokemonCardContainer.querySelector(".pokemon-img");
//       cardControls(leftControl, rightControl, img, orderedAllImgurl);

//       main.appendChild(pokemonCardContainer);
//     });
// }

// function cardControls(left, right, img, orderedAllImgurl) {
//   let i = 0;
//   console.log(orderedAllImgurl);

//   right.addEventListener("click", () => {
//     left.classList.add("show-left-arrow");
//     if (i < orderedAllImgurl.length - 1) {
//       console.log(i);

//       img.src = orderedAllImgurl[++i];
//       console.log(i);
//     }
//   });
//   left.addEventListener("click", () => {
//     console.log(i);

//     if (i > 0) {
//       img.src = orderedAllImgurl[--i];
//       console.log(i);
//     }
//   });
// }
const form = document.querySelector("form");
const searchInputElement = document.querySelector("#search-input");
const pokemonName = document.querySelector("#pokemon-name");
const id = document.querySelector("#pokemon-id");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const weightAndHeightContainer = document.querySelector(
  "#weight-and-height-container"
);
const type = document.querySelector("#types span");
const type2 = document.createElement("span");
const HP = document.querySelector("#hp");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const specialAttack = document.querySelector("#special-attack");
const specialDefense = document.querySelector("#special-defense");
const speed = document.querySelector("#speed");
const allStatsVariableArray = [
  HP,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
];

// Function to validate and clean user input
function validateInput() {
  let userSearchValue = searchInputElement.value.toLowerCase().trim();
  const regexReplacements = [
    { regex: /[.]/g, replacement: "-" },
    { regex: /[♀]/g, replacement: "-f" }
  ];
  
  regexReplacements.forEach(({ regex, replacement }) => {
    userSearchValue = userSearchValue.replace(regex, replacement);
  });

  return userSearchValue;
}

// Function to update Pokémon details in the DOM
function updatePokemonDetails(data) {
  pokemonName.innerText = data.name;
  id.innerText = `#${data.id}`;
  weight.innerText = `Weight: ${data.weight}`;
  height.innerText = `Height: ${data.height}`;

  // Update the image
  const existingImg = document.querySelector("#sprite");
  if (existingImg) existingImg.remove();

  const img = document.createElement("img");
  img.id = "sprite";
  img.src = data.sprites.front_default;
  weightAndHeightContainer.insertAdjacentElement("afterend", img);

  // Update stats
  allStatsVariableArray.forEach((statVariable, i) => {
    statVariable.innerText = data.stats[i].base_stat;
  });

  // Update Pokémon type
  type.innerText = data.types[0].type.name;
  type.className = "first-type"; // Reset class

  if (data.types.length === 2) {
    type2.innerText = data.types[1].type.name;
    type.insertAdjacentElement("afterend", type2);
    type2.className = "second-type"; // Add new class
  } else {
    type2.remove();
  }
}

// Function to fetch and show Pokémon stats from the API
async function showPokemonStats(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    updatePokemonDetails(data);
  } catch (error) {
    console.error("Failed to fetch Pokémon data:", error);
    alert("Failed to load Pokémon details. Please try again later.");
  }
}

// Function to find Pokémon from the API
async function findPokemon() {
  const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Pokémon list");
    const { results: allPokemon } = await response.json();

    const searchInput = validateInput();
    const pokemon = allPokemon.find(
      (p) => p.name === searchInput || p.id === Number(searchInput)
    );

    if (pokemon) {
      showPokemonStats(pokemon.url);
    } else {
      alert("Pokémon not found");
    }
  } catch (error) {
    console.error("Error in finding Pokémon:", error);
    alert("Error fetching Pokémon data.");
  }
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  findPokemon();
});
