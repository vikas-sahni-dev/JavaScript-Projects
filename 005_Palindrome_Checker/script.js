//use methods to do reversing a text

const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");
function onlyAlphaNumericCharacter(str) {
  const regex = /[^0-9A-Za-z]/g;
  return  str.replace(regex, "");
 
}
function checkPalindrome(str) {
  const text = onlyAlphaNumericCharacter(str);

  //learning: use builtin methods to do task
  
  let reversedText =text.split("").reverse().join("")

  // for (let i = text.length - 1; i >= 0; i--) {
  //   reversedText +=text[i]
  // }
  result.innerText =
    text === reversedText
      ? `${textInput.value} is a palindrome`
      : `${textInput.value} is not a palindrome`;
}

checkButton.addEventListener("click", () => {
  const textInputValue = textInput.value.toLowerCase().trim();
  if (textInputValue === "") {
    alert("Please input a value");
  } else {
    checkPalindrome(textInputValue);
  }
});
