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

// Function to generate password based on user input
function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters should your password contain? (Choose a length between 8 and 128)"));
  
  // Validate user input for password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a valid password length between 8 and 128 characters.");
    return "";
  }
  
  // Prompt user for character types to include in password
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumeric = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");
  
  // Validate user input for character types
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type for your password.");
    return "";
  }
  
  // Define character sets to use in password generation
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var charSet = "";
  
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeNumeric) {
    charSet += numericChars;
  }
  if (includeSpecial) {
    charSet += specialChars;
  }
  
  // Generate password using selected criteria
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  
  return password;
}