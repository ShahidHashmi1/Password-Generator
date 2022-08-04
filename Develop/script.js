// Assignment code here

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var special = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var userChoices = [];

var passValues = [];

//

function generatePassword() {
  // console.log("The button was clicked Morty!");
  var passwordLength = prompt("How long would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Caution, your password must be at least 8 characters long, and less than 128 characters long."
    );
    // if (isNaN(passwordLength)) {
    //   alert("Please enter a numeric value.");
    // }
    generatePassword();
  } else {
    var chooseNumbers = confirm("Do you want to include numbers?");
    if (chooseNumbers) {
      userChoices = userChoices.concat(numbers);
    }

    var chooseUpper = confirm("Do you want to have upper case letters?");
    if (chooseUpper) {
      userChoices = userChoices.concat(upper);
    }

    var chooseLower = confirm("Do you want to have lower case letters?");
    if (chooseLower) {
      userChoices = userChoices.concat(lower);
    }

    var chooseSpecial = confirm("Do you want to have special characters?");
    if (chooseSpecial) {
      userChoices = userChoices.concat(special);
    }
    if (!chooseNumbers && !chooseLower && !chooseUpper && !chooseSpecial) {
      alert("You must choose at least one characteristic.");
      generatePassword();
    }

    for (let index = 0; index < passwordLength; index++) {
      passValues.push(
        userChoices[Math.floor(Math.random() * userChoices.length)]
      );
      // userChoices[Math.floor(Math.random() * userChoices.length)];
      // passwordLength += index + userChoices;
      // passwordText += generatePassword();
      // return (password = finalPass);
      // return (password +=
      //   userChoices[Math.floor(Math.random() * userChoices.length)]);
      // return (password =
      //   userChoices[Math.floor(Math.random() * userChoices.length)]);
      // password += userChoices(Object.values(Allowed).join(""));
      // return (passwordText = userChoices); CLOSER! gave us all concat arrays in userChoices together
      // return (passwordText = userChoices[passwordLength]); ...undefined again
      // return (password += password + "");
      // password += userChoices[""];
      // return = password;
      // return passwordText;
      // return document.querySelector("#password");
    }
    return passValues.join("");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// changing the header to orange color
