// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = Math.floor((Math.random() * 128 + 8)*Math.ceil(0.9926));
var upper = true;
var lower = true;
var numbers = true;
var specialCharacters = true;

console.log(length);

var passwordLength = function() {
  var userLength = window.prompt("Select a password length between 8 and 128 characters.");
  if (userLength <8) {
    userLength = window.prompt("That number was less than 8, please select a number between 8 and 128 characters");
  }
  else if (userLength >128) {
    userLength = window.prompt("That number was greater than 128, please select a number between 8 and 128 characters");
  }
  else (userLength)
    return window.alert("You have chosen a password of " + userLength + " characters.");
}

passwordLength()

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;




// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

















// getting user to select password length


