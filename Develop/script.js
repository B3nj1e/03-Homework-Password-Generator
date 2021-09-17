// Assignment Code
var generateBtn = document.querySelector("#generate");

// default variables
var length = ""
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
  var p3 = p2;
  var numberMessage = confirm("Do you want to include numbers in your password?");
  if (numberMessage){
    p3 = p2.concat(number);
    console.log(p3);
  } else {
    p3 = p2;
    console.log(p3);
  }
  var p4 = p3;
  var specialMessage = confirm("Do you want to include special characters in your password?");
  if (specialMessage){
    p4 = p3.concat(special);
    console.log(p4);
  } else {
    p4 = p3;
    console.log(p4);
  }
  var p5 = ""
  var lengthMessage = prompt("Please choose a password length between 8 and 128 characters");
  if (lengthMessage > 128) {
    length = 0
    var tooLongMessage = prompt("The number you have chosen is larger than 128, please choose a number between 8 and 128.");
  } else if (lengthMessage < 8) {
    var tooShortMessage = prompt("The number you have chose is smaller than 8, please choose a number between 8 and 128.");
    length = 0
  } else {
    length = (lengthMessage + tooLongMessage + tooLongMessage);
    console.log(length);
    password = length * {
    index = Math.floor(Math.random() * length)
    p5 = p4[index]
    }
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