// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character options ================
// Uppercase letters
var capChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Lowercase Letters
var nocapChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numbers
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special characters
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//Placeholder to build chac=racter set in
var passChars = [];

//Placeholder to hold new password as an array
var newPass = [];

// Generate a new password
function generatePassword() {

  // How many digits in password?  User input
  var passDigits = prompt("How many digits would you like?");

  // Remind user of recommended input range of rnumber of digits in password
  if (passDigits > 8 && passDigits < 128) {
    alert("Your new password will have " + passDigits + " digits.")
  } else {passDigits = prompt("Recommended values are between 8 and 128.\nHow many digits would you like?");
  }
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
  for (i = 0; i < passDigits; i++) {
    var randomChar = passChars[Math.floor(Math.random() * passChars.length)];
    newPass.push(randomChar);
  }
  
  // Removes commas from output
  newPass = newPass.join("");
  return newPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}