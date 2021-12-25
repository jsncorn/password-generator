// Assignment Code
var generateBtn = document.querySelector("#generate");

//array for each criteria
var lowArray = ['abcdefghijklmnopqrstuvwxyz'];
var upperArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numArray = ['1234567890'];
var specArray = ['!@#$%^&*()'];
var finalArray = [];
var password = [];

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
  promptUser();
  checkCriteria();
  var criteriaChoice = finalArray[Math.floor(Math.random() * finalArray.length)] 
  password.push(criteriaChoice);
}



function promptUser() {
  pwdLength();
  pwdLowercase();
  pwdUppercase();
  pwdNumeric();
  pwdSpecial();
}

function pwdLength() {
  valueLength = prompt("Password length");
}

function pwdLowercase() {
  valueLowercase = confirm("Lowercase?");
}

function pwdUppercase() {
  valueUppercase = confirm("Uppercase?");
}

function pwdNumeric() {
  valueNumbers = confirm("Numbers?");
}

function pwdSpecial() {
  valueSpecial = confirm("Special chars?");
}

function checkCriteria() {
  if(!valueLowercase && !valueUppercase && !valueNumbers && !valueSpecial){
    alert("Invalid password criteria, please select at least one criteria.");
    promptUser();
  }
  else if (valueLowercase && valueUppercase && valueNumbers && valueSpecial) {
     finalArray = finalArray.concat(lowArray, upperArray, numArray, specArray);
  }
  else if (valueLowercase && valueUppercase && valueNumbers) {
     finalArray = finalArray.concat(lowArray, upperArray, numArray);
  }
  else if (valueLowercase && valueUppercase && valueSpecial) {
     finalArray = finalArray.concat(lowArray, upperArray, specArray);
  }
  else if (valueUppercase && valueNumbers && valueSpecial) {
     finalArray = finalArray.concat(upperArray, numArray, specArray);
  }
  else if (valueLowercase && valueUppercase) {
     finalArray = finalArray.concat(lowArray, upperArray);
  }
  else if (valueLowercase && valueNumbers) {
     finalArray = finalArray.concat(lowArray, numArray);
  }
  else if (valueLowercase && valueSpecial) {
     finalArray = finalArray.concat(lowArray, specArray);
  }
  else if (valueUppercase && valueNumbers) {
     finalArray = finalArray.concat(upperArray, numArray);
  }
  else if (valueUppercase && valueSpecial) {
     finalArray = finalArray.concat(upperArray, specArray);
  }
  else if (valueNumbers && valueSpecial) {
     finalArray = finalArray.concat(numArray, specArray);
  }
}