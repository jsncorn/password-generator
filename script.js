// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//on click, prompt for: length (8-128), inc lowercase, uppercase
//numeric, or special characters

function generatePassword() {

}

function pwdLength() {
  prompt("Password length")
}

function pwdLowercase() {
  confirm("Lowercase?")
}

function pwdUppercase() {
  confirm("Uppercase?")
}

function pwdNumeric() {
  confirm("Numbers?")
}

function pwdSpecial() {
  confirm("Special chars?")
}