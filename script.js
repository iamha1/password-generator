// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
//}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase= "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var numbers= "0123456789";
var symbols= "!@#$%^&*()?";


var lowercase= confirm("Click OK to confirm including lowercase characters.");
var uppercase= confirm("Click OK to confirm including uppercase characters.");
var numbers= confirm("Click OK to confirm including numbers.");
var symbols= confirm("Click OK to confirm including special characters.");

function myButton(){
  var passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(passwordLength);

}

var possibleCharacters = (lowercase + uppercase + numbers + symbols ).split("");
console.log(possibleCharacters);


for (var passwordLength = 0; passwordLength >= 10 && passwordLength < 128; passwordLength++) {
var character = Math.floor(Math.random() * possibleCharacters.length);
password = all.substring(character, character + 1);
}
