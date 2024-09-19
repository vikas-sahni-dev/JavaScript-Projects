const team = document.querySelector("#team");
const sport = document.querySelector("#sport");
const year = document.querySelector("#year");
const headCoach = document.querySelector("#head-coach");
const dropDown = document.querySelector("#players");
const allCards = document.querySelectorAll(".player-card");
const allCardsContainer = document.querySelector(".cards");

function selectNicknameCards() {
  const nicknameCards = [...allCards].filter((card) => {
    const nicknameElement = card.children[card.children.length - 1];
    if (nicknameElement.innerText !== "Nickname: N/A") {
      return card;
    }
  });

  showCards(nicknameCards);
}
function selectCards(value) {
  const cards = [];
  allCards.forEach((card) => {
    const cardContents = card.children;

    for (let i = 0; i < cardContents.length; i++) {
      if (cardContents[i].innerText.includes(value)) {
        cards.push(card);
        break;
      }
    }
  });

  showCards(cards);
}

function showCards(cards) {
  allCardsContainer.innerHTML = "";
  cards.forEach((card) => {
    allCardsContainer.append(card);
  });
}

team.innerText = "Argentina";
sport.innerText = "Football";
year.innerText = 1986;
headCoach.innerText = "Carlos Bilardo";

dropDown.addEventListener("change", () => {
  const value = dropDown.value;
  if (value === "all") {
    showCards(allCards);
  } else if (value === "nickname") {
    selectNicknameCards();
  } else {
    selectCards(dropDown.value);
  }
});
