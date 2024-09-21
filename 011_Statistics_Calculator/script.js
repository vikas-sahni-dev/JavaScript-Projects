const form = document.querySelector("form");
const mean = document.querySelector("#mean");
const inputElement = document.querySelector("#numbers");

function getMean(numbers) {
  console.log(numbers);
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}


function getMedian(numbers){
    

}
// function getMode(numbers){
//     const mode=[]



// }





form.addEventListener("click", (e) => {
  e.preventDefault();
  const userInputArr = inputElement.value.split(",");
  const numbers=userInputArr.map((number)=>Number(number))
 
console.log(numbers);


  mean.innerText = getMean(numbers);
});
