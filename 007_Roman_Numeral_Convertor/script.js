const convertButton = document.querySelector("#convert-btn");
const numberInput = document.querySelector("#number");

function unitsPlaceRomanNumeral(digit) {
  switch (digit) {
    case "1":
      return "I";
      break;
    case "2":
      return "II";
      break;
    case "3":
      return "III";
      break;
    case "4":
      return "IV";
      break;
    case "5":
      return "V";
      break;
    case "6":
      return "VI";
      break;
    case "7":
      return "VII";
      break;
    case "8":
      return "VIII";
      break;
    case "9":
      return "IX";
      break;
    case "0":
      return "";
  }
}
function tensPlaceRomanNumeral(firstSymbol, secondSymbol, number) {
  number = +number;
  if (number === 0) return "";
  let roman;
  if (+number < 4) {
    for (let i = 0; i < 3; i++) {
      roman += firstSymbol;
    }
    return roman
  } else if (number === 4) {
    return `${firstSymbol}${secondSymbol}`;
  } else if (number === 5) {
    return `${secondSymbol}`;
  } else if (number > 5) {
    for (let i = 0; i < 3; i++) {
      for (let i = 0; i < 3; i++) {
        roman += secondSymbol;
      }
    }
    return roman
  }
}

function covertNumberIntoRomanNumeral(number) {
  let romanNumeral;
  const units = unitsPlaceRomanNumeral(number[number.length - 1]);

  const tens = tensPlaceRomanNumeral("X", "L", number[number.length - 2]);
  console.log(tens, units);
}
convertButton.addEventListener("click", () => {
  covertNumberIntoRomanNumeral(numberInput.value);
});
