// Chapter 26 to 30 Math Method:

//Question # 1

 // Function to display number properties
 function displayNumberProperties(number) {
    // Get the round off value
    var roundOffValue = Math.round(number);

    // Get the floor value
    var floorValue = Math.floor(number);

    // Get the ceil value
    var ceilValue = Math.ceil(number);

    // Display the results in the browser

    document.write(`<blockquote><h4><p>Answer # 1 <br>Number: ${number}</p>`);
    document.write(`<p>Round off value: ${roundOffValue}</p>`);
    document.write(`<p>Floor value: ${floorValue}</p>`);
    document.write(`<p>Ceil value: ${ceilValue}</p>`);
}

// Prompt user for a positive integer
var userInput = prompt("Q1) Enter a positive integer:");
var number = parseFloat(userInput);

// Check if the input is a positive number
if (isNaN(number) || number <= 0) {
    alert("Please enter a valid positive number.");
} else {
    displayNumberProperties(number);
}
// Question # 2

  // Function to display number properties
  function displayNumberProperties(number) {
    // Get the round off value
    var roundOffValue = Math.round(number);

    // Get the floor value
    var floorValue = Math.floor(number);

    // Get the ceil value
    var ceilValue = Math.ceil(number);

    // Display the results in the browser
    document.write("<br>Answer # 2")
    document.write(`<br><p>Number: ${number}</p>`);
    document.write(`<p>Round off value: ${roundOffValue}</p>`);
    document.write(`<p>Floor value: ${floorValue}</p>`);
    document.write(`<p>Ceil value: ${ceilValue}</p>`);
}

// Prompt user for a negative floating point number
var userInput = prompt("Q2) Enter a negative floating point number:");
var number = parseFloat(userInput);

// Check if the input is a negative number
if (isNaN(number) || number >= 0) {
    alert("Please enter a valid negative floating point number.");
} else {
    displayNumberProperties(number);
}

// Question # 3:

 // Function to display the absolute value of a number
 function displayAbsoluteValue(number) {
    // Get the absolute value
    var absoluteValue = Math.abs(number);

    // Display the result in the browser
    document.write(`<p>Ans3) The absolute value of ${number} is ${absoluteValue}</p>`);
}

// Prompt user for a number
var userInput = prompt("Q3) Enter a number:");
var number = parseFloat(userInput);

// Check if the input is a valid number
if (isNaN(number)) {
    alert("Please enter a valid number.");
} else {
    displayAbsoluteValue(number);
}


// Question # 4:

// Function to simulate a dice roll
function rollDice() {
    // Generate a random number between 1 and 6
    var diceValue = Math.floor(Math.random() * 6) + 1;

    // Display the result in the browser
    document.write(`<p>Ans4) Random value dice: ${diceValue}</p>`);
}

// Roll the dice
rollDice();

// Question # 5:

 // Function to simulate a coin toss
 function tossCoin() {
    // Generate a random number between 0 and 1
    var coinValue = Math.random();

    // Determine the result
    var result = coinValue < 0.5 ? "Heads" : "Tails";

    // Display the result in the browser
    document.write(`<p>Ans5) The result of the coin toss is: ${result}</p>`);
}

// Toss the coin
tossCoin();


// Question # 6:

 // Function to generate and display a random number between 1 and 100
 function displayRandomNumber() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the result in the browser
    document.write(`<p>Ans6) Random number between 1 and 100: ${randomNumber}</p>`);
}

// Display the random number
displayRandomNumber();

// Question # 7:

 // Function to parse and display the weight
 function displayWeight(weightInput) {
    // Regular expression to match numbers possibly followed by units
    var weightMatch = weightInput.match(/^([\d.]+)\s*(kgs|kilograms)?$/i);

    if (weightMatch) {
        // Extract the numeric part of the weight
        let weight = parseFloat(weightMatch[1]);
        document.write(`<p>Ans7) Your weight is: ${weight} kilograms</p>`);
    } else {
        document.write(`<p>Invalid input. Please enter a valid weight.</p></h4></blockquote>`);
    }
}

// Prompt user for their weight
var userInput = prompt("Q7) Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

// Display the parsed weight
displayWeight(userInput);


// Question 8:

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to input a number between 1 and 10
var userGuess = parseInt(prompt('Q8) Guess a number between 1 and 10:'), 10);

// Check if the user's guess is correct
if (userGuess === secretNumber) {
    alert('Congratulations! You guessed the correct number!');
} else {
    alert('Sorry, that was not the correct number. The secret number was ' + secretNumber + '.');
}