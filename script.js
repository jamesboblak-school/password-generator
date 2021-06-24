// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character options
var capChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nocapChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var passChars = [];
var newPass = [];

// User questions
var passDigits = prompt("How many digits would you like (8-72?")
var capSelect = confirm("Would you like to use uppercase letters?");
var noCapSelect = confirm("Would you like to use lowercase letters?");
var numSelect = confirm("Would you like to use numbers?");
var specSelect = confirm("Would you like to use special characters?");
if (capSelect === true) {
  passChars = passChars.concat(capChars);
}
if (noCapSelect === true) {
  passChars = passChars.concat(nocapChars);
}
if (numSelect === true) {
  passChars = passChars.concat(numChars);
}
if (specSelect === true) {
  passChars = passChars.concat(specChars);
}

// console.log(passChars);
// console.log(passDigits);

function generatePassword() {
  for (i = 0; i < passDigits; i++) {
    var randomChar = passChars[Math.floor(Math.random()*passChars.length)];
    newPass.push(randomChar)
    console.log(randomChar);
  }
}

generatePassword();
var newPassword = newPass.join("");
alert(newPassword + " is your new password!")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
