const form = document.querySelector("form");
const count = document.querySelector(".count-input-container input");
const character = document.querySelector(".character-input-container input");
const reverse = document.querySelector("#reverse");
const pyramidContainer = document.querySelector(".pyramid-container");

function createRowsArray() {
  let numberOfCharacterInRow = -1;
  const rows = [];
  for (let i = 1; i <= count.value; i++) {
    numberOfCharacterInRow = numberOfCharacterInRow + 2;
    let str = "";
    for (let j = 1; j <= numberOfCharacterInRow; j++) {
      str = str + character.value;
    }

    rows[i - 1] = str;
  }
  console.log(rows);
  
  addPaddingToRows(rows);
}

function addPaddingToRows(rows) {
  let padding = 0;
  for (let i = rows.length - 2; i >= 0; i--) {
    ++padding;
    let str = rows[i];
    str = str.padStart(str.length + padding, " ");

    rows[i] = str;
  }

  for (let k = 0; k < rows.length; k++) {
    console.log(rows[k]);
    rows[k] = rows[k].replaceAll(" ", "&nbsp;");
    pyramidContainer.innerHTML += `${rows[k]}<br>`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createRowsArray();
});
