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
  var p6 = ""
  var lengthMessage = prompt("Please choose a password length between 8 and 128 characters");
  if (lengthMessage > 128) {
    return lengthMessage;
  } else if (lengthMessage < 8) {
    return lengthMessage;
  } else {
    length = lengthMessage;
  };
  
  // password generating aspect, initially forming single characters into p5, then trying to combine into one long password
  for (var i = 0; i < length; i++) {
  index = Math.floor(Math.random()*p4.length);
  p5 = p4.charAt(index);
  console.log(p5);
  password = p6.concat(p5);
  }

  
  console.log(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);