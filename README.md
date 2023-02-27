# Oh-to-be-a-password-generator

##I created a password generator by adding JavaScript code.

When the button is clicked, the function writePassword() is called.

The writePassword() function generates a password using the generatePassword() function and then sets the value of an input field with the ID "password" to the generated password.

The generatePassword() function first prompts the user to specify the length of the password they want to generate, between 8 and 128 characters.

If the user enters an invalid length, the function returns an empty string and displays an alert message to the user.

The function then prompts the user to specify which types of characters they want to include in the password (lowercase letters, uppercase letters, numbers, and/or special characters).

If the user doesn't select any types of characters, the function returns an empty string and displays an alert message to the user.

The function defines four character sets (lowercase letters, uppercase letters, numbers, and special characters) and creates a new string called charSet based on the user's selections.

The function then generates a random password by selecting characters at random from the charSet string, repeating this process until the password is the desired length.

The function returns the generated password.

[screencapture-127-0-0-1-5500-Challenge-02-Challenge-Develop-index-html-2023-02-26-10_19_09.pdf](https://github.com/Tannerfink2000/Oh-to-be-a-password-generator/files/10834400/screencapture-127-0-0-1-5500-Challenge-02-Challenge-Develop-index-html-2023-02-26-10_19_09.pdf)

https://tannerfink2000.github.io/Oh-to-be-a-password-generator/
