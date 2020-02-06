// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var passwordinput="0123456789!@#$%^&*(~){}[]:;abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function generatePassword(){
 for (passwordinput <=26; )
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
