const changeBgColorButton = document.querySelector("button");
const bgRGBCodeSpanElement=document.querySelector("span")
const body = document.body;


//improvement function name should be getRandomRGBColor
function randomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

changeBgColorButton.addEventListener("click", () => {
    const randomColor=randomRGBColor()
    body.style.backgroundColor =randomColor
    bgRGBCodeSpanElement.innerText=randomColor
});


