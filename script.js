// Assignment Code
var generateBtn = document.querySelector("#generate");

//array for each criteria
var lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specArray = ['!@#$%^&*()'];

//array for passwords
var finalArray = [];
var passwordRaw = [];


// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//on click, prompt for: length (8-128), inc lowercase, uppercase
//numeric, or special characters

function generatePassword() {
  //includes all prompts for criterias and takes values
  promptUser();
  //ensures what criterias are true and runs absed off that
  checkCriteria();
  //for loop to RNG the password based on final built array based off criteria
  for (var i = 0; i < valueLength; i++) {
    var criteriaChoice = finalArray[Math.floor(Math.random() * finalArray.length)]
    //.push will add a new element to array passwordRaw
    passwordRaw.push(criteriaChoice);
    //.join will combine all element in passwordRaw and remove the commas
    password = passwordRaw.join('');
  }
}

function checkCriteria() {
  //checks if all is false
  if (!valueLowercase && !valueUppercase && !valueNumbers && !valueSpecial) {
    alert("Invalid password criteria, please select at least one criteria.");
    promptUser();
  }
  //checks if all is true
  else if (valueLowercase && valueUppercase && valueNumbers && valueSpecial) {
    finalArray = finalArray.concat(lowArray, upperArray, numArray, specArray);
  }
  //triple checks
  else if (valueLowercase && valueUppercase && valueNumbers) {
    finalArray = finalArray.concat(lowArray, upperArray, numArray);
  }
  else if (valueLowercase && valueUppercase && valueSpecial) {
    finalArray = finalArray.concat(lowArray, upperArray, specArray);
  }
  else if (valueUppercase && valueNumbers && valueSpecial) {
    finalArray = finalArray.concat(upperArray, numArray, specArray);
  }
  //double checks
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
  //single checks
  else if (valueLowercase) {
    finalArray = lowArray;
  }
  else if (valueUppercase) {
    finalArray = upperArray;
  }
  else if (valueNumbers) {
    finalArray = numArray;
  }
  else if (valueSpecial) {
    finalArray = specArray;
  }
  //error log :)
  else {
    console.log("you did something terribly wrong")
  }
}

//helps separate the prompts and give them indiviual values
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
