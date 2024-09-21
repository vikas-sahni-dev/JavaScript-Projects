const loadMoreBtn = document.querySelector("#load-more-btn");
const authorContainer = document.querySelector("#author-container");

let authorDataArr = [];
let startingIndex = 0;
let endingIndex = 8;

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayCards(authorDataArr.slice(startingIndex, endingIndex));
  }).catch((err) => {
    authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
   });



function fetchMoreAuthhor() {
  startingIndex += 8;
  endingIndex += 8;
  displayCards(authorDataArr.slice(startingIndex, endingIndex));
  if (authorDataArr.length < endingIndex) {
    loadMoreBtn.textContent = "No more data to load";
    loadMoreBtn.style.cursor = "not-allowed";
  }
}
const displayCards = (authors) => {
    authors.forEach(({ author, image, url, bio }, index) => {
      authorContainer.innerHTML += `  <div id="${index}" class="user-card">
                  <h2 class="author-name">${author}</h2>
                  <img class="user-img" src="${image}" alt="${author} avatar" class="user-img">
                  <div class="purple-divider"></div>
                  <p class="bio">${
                    bio.length > 50 ? bio.slice(0, 50) + "..." : bio
                  }</p>
                  <a class="author-link" href="${url}" target="_blank">${author} author page</a>
                </div>`;
    });
  };

loadMoreBtn.addEventListener("click", fetchMoreAuthhor);

// 1) let cardsData = []; varaible name is bad.you should use let authorDataArr = [];
//2) write catch statement in promise
//3) 
//
// const loadMoreBtn = document.querySelector("#load-more-btn");
// const authorContainer = document.querySelector("#author-container");
// let userCardOnScreenCount = 0;
// let cardsData = [];
// function getAuthorsData() {

//   fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       cardsData = data;
//     showAuthorCards(cardsData.slice(0,8))
//     });
//     userCardOnScreenCount=userCardOnScreenCount+8
// }

// function showAuthorCards(cardsData) {
//     console.log(cardsData);

//   for (const cardData of cardsData) {
//     console.log(cardData.author);

//     const userCard = document.createElement("div");
//     userCard.classList.add("user-card");
//     console.log(cardData.image);

//     userCard.innerHTML = `
//         <h2>${cardData.author}</h2>
//         <img src="${cardData.image}"   class="user-img">

//         <div class="purple-divider"></div>
//         <div class="bio">${cardData.bio}</div>
//         <a href="${cardData.url}">${cardData.author} author page</a>

//         `;

//     authorContainer.append(userCard);
//   }
// }

// let clickCount=0
// loadMoreBtn.addEventListener("click", () => {
//     ++clickCount

//     showAuthorCards(cardsData.slice(userCardOnScreenCount,userCardOnScreenCount+8))
//     userCardOnScreenCount=userCardOnScreenCount+8
//     if(clickCount==3){
//         loadMoreBtn.innerText="No more data to load"
//         loadMoreBtn.classList.add("disable-btn")
//     }

// });

// getAuthorsData();
