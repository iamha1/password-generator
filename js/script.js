// Assignment Code
var generateBtn = document.querySelector("#generate");
var passText = document.querySelector("#password");

// Write password to the #password input
//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;
//}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()?";


function myButton() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
  
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Password does not meet the length requirements");
  } else {
    console.log(passwordLength);
    var possibleCharacters = "";

    var lowercaseConfirm = confirm("Click OK to confirm including lowercase characters.");

    if (lowercaseConfirm == true) {
      possibleCharacters += lowercase
    }
    var uppercaseConfirm = confirm("Click OK to confirm including uppercase characters.");

    if (uppercaseConfirm == true) {
      possibleCharacters += uppercase
    }
    var numbersConfirm = confirm("Click OK to confirm including numbers.");

    if (numbersConfirm == true) {
      possibleCharacters += numbers
    }
    var symbolsConfirm = confirm("Click OK to confirm including special characters.");
    if (symbolsConfirm == true) {
      possibleCharacters += symbols
    }


    possibleCharacters = possibleCharacters.split("");
   // console.log(possibleCharacters);

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var character = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
      //console.log(character);
      password += character;
      //password = all.substring(character, character + 1);

    }

    console.log(passText)
    console.log(password)
    passText.value = password;
  }
}

generateBtn.addEventListener("click", myButton)
