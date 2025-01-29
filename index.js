const button = document.getElementById("button");

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "rebeccapurple",
  "violet",
  "lightblue",
  "brown",
  "chocolate",
  "darkorchid",
  "gold",
];
function change() {
  document.body.style.background = colors[Math.floor(7 * Math.random())];
}

//add event listener for button
button.addEventListener("click", change);
// {
//   //this is a block containing a comment and two statemets
//   const name = prompt("Please enter your name!");
//   alert("Hello there, " + name);
// }

// console.log("Hello, World!", button, colors);

//this is a short comment

//this is a large comment=>
/*console.log("Challenge:");
console.log(
  "1. Try writing pseudocode to describe some common tasks such as brushing your teeth or riding a bike:"
);
console.log(
  "Answer: 1: get (toothbrush); 2: get (toothpaste); 3: open(toothpaste)&& put(toothepaste) on(brush); 4: add(water) on(brush); 5: for (2 minutes) brush (teeth) && moveToothbrush(circular-motion); 6:clean(toothbrush && mouth)"
);
console.log(
  "2. Write pseudocode that will find the largest number in a list of numbers"
);
console.log(
  "Answer: 1. get(listOfNumbers); 2:sort(numbers); 3:get max(numbers); 4: write (max)"
);
console.log(
  "3. Try logging some different messages in the console using console.log"
);
console.log("Answer: all of the above!");
console.log(
  "4. Add some more colours to the array in the 'I can Code a Ranbow'"
);*/
// console.log(typeof "hello");
// console.log(typeof 10);
// console.log(typeof true);
// console.log(typeof [(1, 2, 3)]);
// console.log(typeof function () {});
// let name = "Voichita Truscai";
// const name1 = "JavaScript";
// console.log(typeof name1);
// name1 = "JS";
// let score = 0;
// score = 5;
// let score1;
// score1;
// // let $name;
// let _answer;
// let firstName;
// let address_line1;
// let firstNameAndLastName;
// let first_name_and_last_name;

// alert("Hello");
// const message = "HELLO THERE!";
// alert(message);
// const name2 = prompt("What is your name?");
// const permision = confirm(
//   "Do you give consent for us to steel your personal data?"
// );

//ask the user for their name
// const name3 = prompt("Please enter your name");
//say Hello
// alert("Hello!");
//then personalize it
// alert(name3);

// console.log(typeof 42);
// console.log(typeof "Twenty20");
// console.log(typeof "123");
// console.log(typeof -68);
// console.log(typeof true);
// console.log(typeof FALSE);
// console.log(typeof "true");
// console.log(typeof 0);

//Ask the user something
// const height = prompt("How tall are you?");
// alert("You are...");
// alert(height + "cm");
// alert("...tall");

// //string examples
// console.log(typeof "M");
// console.log(typeof "@");
// console.log(typeof "Easy as 1, 2, 3");
// console.log(typeof "What The F*!#?");
// console.log(typeof "A long time ago, in the galaxy, far far away...");
// console.log(typeof " ");
// console.log(typeof "");
// //Put the content inside the console.log in the console
// console.log("Hello");
// console.log("I'm also a string literal.");
// // console.log('Don't do this.');
// //SyntaxError: missing ) after argument list
// console.log("That's the way to do it!");
// // console.log('It\'s okey if you escape the apotrophe');
// //The backslash can be used to insert special whitespace into strings:
// //\n: end of line
// //\r: carriage return
// //\t: tab

// console.log("This is a backslash: \\");

//Find the Char
// console.log('console.log("Hello".charAt(1)")');
// console.log("Hello".charAt(1));
// console.log('"Hello"[0]');
// console.log("Hello"[0]);

//Finding Chars
//indexOf() method
// console.log("Hello.indexOf('l'): ", "Hello".indexOf("l"));
// //if a character doesnt appear -1 will be returned
// console.log("Hello.indexOf('z'): ", "Hello".indexOf("z"));
// //lastIndexOf() method:
// console.log("Hello.lastIndexOf('l'): ", "Hello".lastIndexOf("l"));
// //includes() method to check for a certain character
// console.log("Hello.includes('e'): ", "Hello".includes("e"));
// console.log("Hello.includes('z'): ", "Hello".includes("z"));
// //startsWith() method - to check if a string starts with a certain character
// console.log("Hello.startsWith('H'): ", "Hello".startsWith("H"));
// console.log("Hello.startsWith('h'): ", "Hello".startsWith("h"));
// //endsWith method- to check if a string ends with a particular character
// console.log("Hello.endsWith('O'): ", "Hello".endsWith("O"));
// console.log("Hello.endsWith('o'): ", "Hello".endsWith("o"));
// //length
// console.log("Hello.length: ", "Hello".length);
// const myString = "Hello, is it me you're looking for?";
// console.log(
//   'const myString = "Hello is it me you\'re looking for?", console.log(myString.length)',
//   myString.length
// );
// myString.length = 36;
// console.log(myString.length);

// String Arithmetic
//concatenation:
// console.log('"Java" + "Script" + ": "', "Java" + "Script");
// console.log('"Hello" + " World" + ": "', "Hello" + " World");
// console.log('"Hello" + " " + "World"', "Hello" + " " + "World");
// //concat() method
// console.log('"Java".concat("Script")', "Java".concat("Script"));
// //find the last character of the string
// console.log('"Hello"[4] ', "Hello"[4]);
// console.log('"Goodbye"[6] ', "Goodbye"[6]);

//What's in a name?
// const person = prompt("What's your name?");
// alert(
//   "Hello " +
//     person +
//     " . The first letter of your name is " +
//     person[0] +
//     " and the last letter is " +
//     person[person.length - 1]
// );

// Changing Cases
// const name1 = "JavaScript";
// console.log();
// console.log(
//   'console.log(const name1="JavaScript";name1.toUpperCase")',
//   name1.toUpperCase()
// );
// console.log(
//   'console.log(const name1="JavaScript";name1.toLowerCase")',
//   name1.toLowerCase()
// );
//These two methods don't change the string stored in name1!
//They just return a value with the case changed

//Trimming Space
//trim() removes any whitespace from beginning and end of a string
// console.log("     Hello World  ".trim());
// console.log("   \t\t  JavaScript ".trim()); //escaped tabs and carriage returns
// // are also removed
// //trimStart() removes whitespace from beginning
// console.log("     Hello World  ".trimStart());
// //trimEnd() removed whitespace from end of string
// console.log("     Hello World  ".trimEnd());

//Template Literals
// console.log(`Hello!`);
// console.log(`She said, "It's me!"`);
// //interpolation
// const name = `World`;
// console.log(`Hello ${name}!`);
// const name1 = `World`;
// console.log(`Hello ${name1.toUpperCase()}!`);
// console.log(`This is the start...\n\n\n ... and this is the end`);
// // console.log("This is the start...

// //     ... and this is the end");
// //Uncaught SyntaxError: Invalid or unexpected token
// console.log(`This charcter,\`, is a backtick`);

//Mad Libs
//ask the user for some words
// const animal = prompt("Please enter an animal.");
// const color = prompt("Please enter a color.");
// const verb = prompt("Please enter a verb.");
// const job = prompt("Please enter a job.");
// //create a Mad Lib
// const madlib = `The ${animal} wanted to be a ${job}, but turned a funny shade of ${color} after trying to ${verb}!`;
// alert(madlib);

//Challenge
//1. Use a prompt box to ask the user's name then use a template literal
//to insert their name into a personalized "hello" message in an alert box.
// const userName = prompt("Please enter your name");
// alert(`Hello there ${userName}! You will win a new pair of socks today!`);
// //2.Now try changing the code so that tells the user how many letters their name contains
// const letters = userName.length;
// alert(
//   `Did you know that your name, ${userName} , contains ${letters} letters?`
// );
// //3.Try changing the Mad Libs code to ask for more words and create a funnier result
// const day = prompt("What day is today?");
// const year = prompt("What year were you born?");
// const season = prompt("What is your favourite season?");
// const place = prompt("Where do you spend your evening?");
// const madLibs = alert(
//   `How funny!!! You were born in the ${place}. You like to drink a lot ${day}. Your favourite number is ${year}. Not a fan of ${season}, aren't you?`
// );
// //4.Try writing some code that asks for a user's name, tells them their "swapy name"
// //by swapping the first and last letter around
// const username = prompt("Please enter your name: ");
// const usernameFirstLetter = username.slice(0, 1).toLowerCase();
// const usernameMiddleLetters = username.slice(1, -1);
// const usernameLastLetter = username.slice(username.length - 1).toUpperCase();
// console.log(usernameFirstLetter);
// console.log(usernameMiddleLetters);
// console.log(usernameLastLetter);
// alert(
//   `Your name is:${username}...Your swappy name is: ${usernameLastLetter}${usernameMiddleLetters}${usernameFirstLetter}`
// );

//Numbers
//Integers and Floats
// console.log(typeof 42);
// console.log(typeof 3.14159);
// //Numeric Literals = sequence of digits that form a decimal number and don't start with a leading zero
// console.log(3);
// console.log(-4.67);
// //Exponential Notation
// console.log(1e6); //1 multiplied by 10 to the power of 6
// console.log(2e3); //2 multiplied by 10 to the power of 3
// console.log(2.5e-3); //2.5 multiplied by 10 to the power of -3
// //When is a Number Not a Number(NaN)?
// //string multiplied to a number
// console.log("hello" * 5); //NaN
// //typeof NaN = number
// console.log(typeof NaN); //number

//Arithmetic operations
//Addition
// console.log("5 + 4.3 = ", 5 + 4.3); // 9.3
// //Subtraction
// console.log("6 - 11 = ", 6 - 11); // -5
// //Multiplication
// console.log("6 * 7 = ", 6 * 7); // 42
// //Division
// console.log("3/7 = ", 3 / 7); // 0.42857142857142855
// //Exponentiation
// console.log("2**3 = ", 2 ** 3); // 8
// //Order matters:Exponentioation->Multiplication->Division->Addition->Subtraction
// console.log("(8 - 5) + 6 / 3 =", 8 - 5 + 6 / 3);
// //Remainder
// console.log("23 % 6 =", 23 % 6);
// //What day will be a million days from now on?
// console.log("1e6 % 7 =", 1e6 % 7); //1=>same day as tomorrow

//Varying Variables
// let score = 0;
// console.log(score); // 0
// score = score + 10;
// console.log("score = score + 10; score =", score); //10
// //compound assignment operator
// score += 10;
// console.log("score += 10; score =", score); // 20
// score -= 5;
// console.log("score -= 5; score =", score); //15
// score *= 2;
// console.log("score *= 2; score =", score); // 30
// score /= 3;
// console.log("score /= 3; score =", score); // 10
// score **= 2;
// console.log("score **= 2; score =", score); // 100
// score %= 7;
// console.log("score %= 7; score =", score); //2

// //Increments
// let points = 5;
// console.log("points: ", points); //5
// points++;
// console.log("points++", points); //6
// ++points;
// //Decrements
// console.log("++points", points); //7
// points--;
// console.log("points--", points); //6
// --points;
// console.log("--points", points); //5

// How Old?
// const ageInYears = prompt("How old are you (in years)?");
// const ageInSeconds = ageInYears * 365.25 * 24 * 60 * 60;
// alert(`That means you have been alive for ${ageInSeconds} seconds!!!`);

// Calculations with Numbers and Strings
// console.log("2 + 'two' =", 2 + "two"); //2two concatenation
// console.log("'2' * 8 = ", "2" * 8); //16
// console.log("'2' + 8 = ", "2" + 8); // 28 concatenation

//Converting Between Strings and Numbers
//Number constructor
// console.log('Number("23") convert to =>', Number("23"));
// //if the string can't be converted to a number, NaN is returned
// console.log('Number("hello") convert to =>', Number("hello"));
// //String-to change a number literal into a string literal
// console.log("String(3) convert to =>", String(3));
// const ageInYears = Number(prompt("How old are you (in years)?"));

//Random numbers
//Math.random() generates a number between 0(inclusive) and 1(inclusive)
// console.log("Math.random()", Math.random()); //0.97888268565043
// //Math.random() * 6 will return a random number between 0 and 6(not including)
// console.log("6 * Math.random()", 6 * Math.random()); //3.258344621372284
// //Math.ceil() rounds up the value to the next bigger integer
// console.log("Math.ceil(3.258344621372284)", Math.ceil(3.258344621372284)); // 4
// //To generate a random whole number from 1 to 6
// //Math.ceil(6 * Math.random())
// console.log("Math.ceil(6 * Math.random())", Math.ceil(6 * Math.random())); // 5
// //How many sides does a dice have?
// const sides = prompt("How many sides does a dice have?");
// alert("Press Enter or click close to roll the dice...");
// const number = Math.ceil(sides * Math.random());
// alert(`The dice landed on number ${number}`);

//Challenges
//1.Create a prompt box that asks for user for their age.
//Then tell them how old they'll be in 25 years.(!type coercion)
// const age = Number(prompt("How old are you (in years?)"));
// alert(`You will be be ${25 + age} years old in 25 years`);

//2. Write some code that will use prompt boxes to ask the user for two numbers,
//then show an alert box that displays the result multiplying those numbers together
// const number1 = Number(prompt("Please enter a number: "));
// const number2 = Number(prompt("Please enter another number: "));
// alert(`The product of the numbers is ${number1 * number2}`);

//3.Can you write some code to split a bill for a meal?
//You'll need to use a prompt box to ask how much the meal was,
//and another to ask how many people it needs splitting between.
//Then an alert box to say how much each person has to pay.
//For this challenge, you;ll need to think about the units and rounding.
//Bonus if you can add an extra question that adds a tip as a percentage!
// const bill = Number(prompt("How much was the bill?"));
// const persons = Number(prompt("How many people were there eating?"));
// const tip = Number(
//   prompt("Please be kind and enter a tip percentage if you enjoyed it")
// );
// alert(`Each person has to pay ${(bill * tip) / persons}`);

// 4. Write some code that will produce a random number between two values.
//For example you can write some code that will return a random number between 5 and 10 inclusive
// const lower = Number(prompt("Please enter a small number"));
// const higher = Number(prompt("Please enter a higher number"));
// const randoValue = Math.floor((higher - lower + 1) * Math.random()) + lower;
// alert(`A radom number between ${lower} and ${higher} is ${randoValue}`);
// console.log(randoValue);

//Collections
//Arrays
//An array is a ordered list of values
// console.log(["🍎Apple", "🍌Banana", "🧁Cupcake"]);
// console.log("Array with numbers: ", [1, 3, 5, 7, 11]);
// console.log("Array with strings:", ["🐕Dog", "🐈Cat", "🐇Rabbit"]);
// console.log("Array with booleans", [true, false, true, false, true]);
// console.log("Array of different types:", [null, 1, "two", true]);
// // Arrays is JavaScript
// const shopping = ["🍎Apple", "🍌Banana", "🧁Cupcake"];
// console.log(shopping);
// console.log(
//   "Return the first item in the shopping list = shopping[0]: ",
//   shopping[0]
// );
// console.log(
//   "Return the third item in the shopping list = shopping[2]: ",
//   shopping[2]
// );
// console.log(
//   "If an element in the array is empty, undefined is returned: shopping[5]: ",
//   shopping[5]
// );
// //Adding values to arrays
// console.log(
//   "Add 'Donut' at position 3 in the array ,shopping[3]='🍩Donut' ",
//   (shopping[3] = "🍩Donut")
// );
// console.log("Take a look at content of shopping array ,shopping ", shopping);
// console.log(
//   "Change the value at position 2 to '🥕Carrot', shopping[2] = '🥕Carrot'",
//   (shopping[2] = "🥕carrot")
// );
// console.log("Check the contents from shopping: shopping", shopping);
// console.log(
//   "Use index notation to add new items to any position in the array: shopping[5] = '🍆eggplant'",
//   (shopping[5] = "🍆eggplant")
// );
// console.log(
//   "The position at shopping[4] is unused so will have the value of undefinded: shopping",
//   shopping[4]
// );
// console.log("Lets see the shopping array, shopping", shopping);

//Removing Values from Arrays
// const shopping = [
//   "🍎Apple",
//   "🍌Banana",
//   "🥕Carrot",
//   "🍩Donut",
//   "",
//   "🍆eggplant",
// ];
// console.log(
//   "Remove the value '🍩Donut' from the shopping array: delete shopping[3]",
//   delete shopping[3]
// );
// console.log("Lets see the shopping array: shopping", shopping);
// console.log("Shopping at position 3 is undefined: shoppping[3]", shopping[3]);

//Finding the length of an array
// const shopping = ["🍎Apple", "🍌Banana", "🥕Carrot", "", "", "🍆eggplant"];
// console.log(
//   "Find the number of items in the shopping array: shopping.length",
//   shopping.length
// ); //6
// const length = shopping.length;
// console.log(
//   "The last item in the array: shopping[length-1]",
//   shopping[length - 1]
// );
// console.log(
//   "The length property is mutable, we can change it directly: shopping.length = 8",
//   (shopping.length = 8)
// );
// console.log("See the content in shopping:", shopping);
// console.log("To delete items, make the array smaller", (shopping.length = 3));
// console.log("See the 3 items in shopping:", shopping);
// console.log(
//   "NO SECOND CHANCE! Once removed can't go back!",
//   ((shopping.length = 8), shopping)
// );

//Popping and Pushing
//pop() method removes the last item in the array
// const shopping = ["🍎Apple", "🍌Banana", "🥕Carrot", "🍩Donut", "🍆Eggplant"];
// console.log(
//   "To remove the last item from the array, shopping.pop()",
//   shopping.pop()
// );
// console.log(shopping);
// //push("something")
// console.log(
//   "To add one item to the end of the array, shopping.push('🧁Cupcake')",
//   shopping.push("🧁Cupcake")
// );
// console.log(shopping);

//Shifting and Unshifting
//shift() removes the first item of the array
// const shopping = ["🍎Apple", "🍌Banana", "🥕Carrot", "🍩Donut", "🍆Eggplant"];
// console.log("To see the array, shopping", shopping);
// console.log(
//   "To remove the first item from the array, shopping.shift()",
//   shopping.shift()
// );
// console.log("To see the array, shopping", shopping);
// //unshift("item") adds an aitem to the beginning of the array
// console.log(
//   "To add '🥑Avocado to the beginning of the array', shopping.unshift('🥑Avocado')",
//   shopping.unshift("🥑Avocado")
// );
// console.log(
//   "The return value is the length of the array after the new item has been added"
// );
// console.log(
//   "Let's see the new array, with the avocado added: shopping",
//   shopping
// );

//The Spread Operator(...)
//it spreads out all the elements of the array into separate values
//An array = a box; the spread operator is emptying the contents of the box into another box
const arrayA = [1, 2, 3];
console.log("arrayA", arrayA);
const arrayB = [arrayA];
console.log("arrayB=[arrayA]", arrayB);
console.log("arrayB.length", arrayB.length);
//in arrayB we see one item wich contains an array that matches arrayA('nested array')
const arrayC = [...arrayA];
console.log("arrayC = [...arrayA]", arrayC);
console.log(
  "arrayC contains three separate elements: arrayC.length",
  arrayC.length
);
console.log("the contents of arrayC are the same elements as arrayA", arrayC);
//The spread operator can be used to merge the elements from two or more arrays into a new arrays
const fruit = ["Pineaple", "Melon"];
console.log("const fruit = ['Pineaple', 'Melon']", fruit);
const savory = ["Burger", "Fries"];
console.log("const savory = ['Burger', 'Fries']", savory);
const sweets = ["Cookie", "Popcorn"];
console.log("const sweets = ['Cookie', 'Popcorn']", sweets);
const food = [...fruit, ...savory, ...sweets];
console.log("const food = [...fruit, ...savory, ...sweets]", food);
console.log(
  "food contents are: ['Pineaple', 'Melon', 'Burger', 'Fries', 'Cookie', 'Popcorn']",
  food
);
const food1 = [fruit, savory, sweets];
console.log("const food1 = [fruit, savory, sweets]", food1);
console.log(
  "[['Pineaple', 'Melon'],['Burger', 'Fries'], ['Cookie', 'Popcorn']]"
);
console.log(
  "We use the spread operator to add new items to an array: [...food, 'Coffee']",
  [...food, "Coffee"]
);
console.log(
  "The spread operator unpacks all the items out of the 'food' array and places them inside the new array as separate items"
);
console.log(
  "We can add the string 'Coconut' to the beginning of the array: food = ['Coconut', ...food]",
  ["Coconut", ...food]
);
console.log("lets see the content of food", food);
