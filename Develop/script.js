// Assignment Code
var generateBtn = document.querySelector("#generate");

// default variables
var lengthMax = 128;
var lengthMin = 8;
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var password = "";


function generatePassword() {
  var p1 = "";
  var lowerMessage = confirm("Do you want to include lower case characters in your password?");
  if (lowerMessage){
    p1 = lower;
    console.log(p1);
  } else {
    p1 = "";
    console.log(p1);
  }
  var p2 = p1;
  var upperMessage = confirm("Do you want to include upper case characters in your password?");
  if (upperMessage){
    p2 = p1.concat(upper);
    console.log(p2);
  } else {
    p2 = p1;
    console.log(p2);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);