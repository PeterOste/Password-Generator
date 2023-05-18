function generatePassword() {
  //declared function "generatePassword" which creates and returns a unique password based on user prompts.
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  //declared variables that will contain all possible characters to be used in the password string.
  var password = "";
  var characters = "";
  //declared two variables that are empty strings which will later store the generated password and the characters used for the password.
  var length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  //declared a variable "length" that will take any number entered between 8 and 12 and convert it from a string into an actual integer that the computer can read. 
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length, please enter a number between 8 and 128.");
    return;
  }
  //The length is checked to see if it is a number, greater than 8, and/or less than 128. If any of these criteria are not met, then the user is given a message and returned to the beginning.
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  //confirm is used to determine which characters the user wants to include, their answers are then stored in the variables to be used later.
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }
  //the four variables are checked to have a boolean value of true or false. If they are all true, then the user receives a message and is returned to the start of the prompts. If not, then it is ignored.
  if (includeLowercase) {
    characters += lowercaseCharacters;
  }
  if (includeUppercase) {
    characters += uppercaseCharacters;
  }
  if (includeNumeric) {
    characters += numericCharacters;
  }
  if (includeSpecial) {
    characters += specialCharacters;
  }
  //Each character type is either included or excluded. If included, then the characters selected are appended to the "characters" string by the usage of "+=". If not, then they are skipped over.
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  //The part in the parantheses indicates that the for loop will function as long as "i" is less than the length that the user has selected.
  //"math.random" generates a random value between 0 and 1, which is then multiplied by the total length, and then rounded down to the nearest whole number with "math.floor".
  return password;
  //This function will then create the password with a string and return it.
}

var generateBtn = document.querySelector("#generate");
//a variable "generateBtn" is created and tied to a <div> from the index.html with the "generate" id.
generateBtn.addEventListener("click", function () {
  var password = generatePassword();
  if (password) {
    alert("Your password is: " + password);
  }
});
//This variable has an EventListener that activates with "click".
//This executes a function that grabs the password and if true, will show the user the password.