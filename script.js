// Arrays for special characters, lowercase letters, uppercase letters, and numbers

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // object to store all the user choices
  var randomizedArr = [];

  function generatePassword() {
    // error handling for amount of characters in a password
    var pwLength = prompt("How long would you like your password to be?");
    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
      alert("Password must be between 8 and 128 characters");
      return null;
    }    // confirmation for user choices through confirm method
    var specials = confirm("Would you like special characters?")
    var numbers = confirm("Would you like numbers?")
    var upCase = confirm("Would you like uppercase letters?")
    var lowCase = confirm("Would you like lowercase letters?")
    if (specials) { // if (true) checks user input, if true, concats the arrays and stores it in randomized array
      randomizedArr = randomizedArr.concat(specialChars);
    }
    if (numbers); {
      randomizedArr = randomizedArr.concat(numberChars);
    }
    if (upCase); {
      randomizedArr = randomizedArr.concat(uppercase);
    }
    if (lowCase); {
      randomizedArr = randomizedArr.concat(lowercase);
    }
    // if they choose nothing this will reprompt them
    if (!specials && !numbers && !upCase && !lowCase) {
        alert("Must select at least one character type");
        return null;
      }
  
    var word = ""; // stores the randomized array
    // pick target number (pwLength) of characters from built array (finalPasswordArray)
    for (let i = 0; i < pwLength; i++) {
      word += randomizedArr[Math.floor(Math.random() * randomizedArr.length)];
      
    }
    
    // final output for generatePassword()
    return word


  }


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