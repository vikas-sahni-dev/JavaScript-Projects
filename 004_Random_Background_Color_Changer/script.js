const changeBgColorButton = document.querySelector("button");
const bgRGBCodeSpanElement=document.querySelector("span")
const body = document.body;


// function name should be getRandomRGBColor not randomRGBColor
function getrandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

changeBgColorButton.addEventListener("click", () => {
  //here varaible name should be color not randomColor
    const color=getrandomRGBColor()
    body.style.backgroundColor =color
    bgRGBCodeSpanElement.innerText=color
});




// const changeBgColorButton = document.querySelector("button");
// const bgRGBCodeSpanElement=document.querySelector("span")
// const body = document.body;


// //improvement function name should be getRandomRGBColor
// function randomRGBColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r},${g},${b})`;
// }

// changeBgColorButton.addEventListener("click", () => {
//     const randomColor=randomRGBColor()
//     body.style.backgroundColor =randomColor
//     bgRGBCodeSpanElement.innerText=randomColor
// });





//fcc
// const darkColorsArr = [
//   "#2C3E50",
//   "#34495E",
//   "#2C2C2C",
//   "#616A6B",
//   "#4A235A",
//   "#2F4F4F",
//   "#0E4B5A",
//   "#36454F",
//   "#2C3E50",
//   "#800020",
// ];

// function getRandomIndex() {
//   const randomIndex = Math.floor(darkColorsArr.length * Math.random());
//   return randomIndex;
// }

// const body = document.querySelector("body");
// const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

// function changeBackgroundColor() {
//   const color = darkColorsArr[getRandomIndex()];

//   bgHexCodeSpanElement.innerText = color;
//   body.style.backgroundColor = color;
// }
// const btn = document.querySelector("#btn");

// btn.onclick = changeBackgroundColor();