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

// Collections
// Arrays
// An array is a ordered list of values
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
// const arrayA = [1, 2, 3];
// console.log("arrayA", arrayA);
// const arrayB = [arrayA];
// console.log("arrayB=[arrayA]", arrayB);
// console.log("arrayB.length", arrayB.length);
// //in arrayB we see one item wich contains an array that matches arrayA('nested array')
// const arrayC = [...arrayA];
// console.log("arrayC = [...arrayA]", arrayC);
// console.log(
//   "arrayC contains three separate elements: arrayC.length",
//   arrayC.length
// );
// console.log("the contents of arrayC are the same elements as arrayA", arrayC);
// //The spread operator can be used to merge the elements from two or more arrays into a new arrays
// const fruit = ["Pineaple", "Melon"];
// console.log("const fruit = ['Pineaple', 'Melon']", fruit);
// const savory = ["Burger", "Fries"];
// console.log("const savory = ['Burger', 'Fries']", savory);
// const sweets = ["Cookie", "Popcorn"];
// console.log("const sweets = ['Cookie', 'Popcorn']", sweets);
// const food = [...fruit, ...savory, ...sweets];
// console.log("const food = [...fruit, ...savory, ...sweets]", food);
// console.log(
//   "food contents are: ['Pineaple', 'Melon', 'Burger', 'Fries', 'Cookie', 'Popcorn']",
//   food
// );
// const food1 = [fruit, savory, sweets];
// console.log("const food1 = [fruit, savory, sweets]", food1);
// console.log(
//   "[['Pineaple', 'Melon'],['Burger', 'Fries'], ['Cookie', 'Popcorn']]"
// );
// console.log(
//   "We use the spread operator to add new items to an array: [...food, 'Coffee']",
//   [...food, "Coffee"]
// );
// console.log(
//   "The spread operator unpacks all the items out of the 'food' array and places them inside the new array as separate items"
// );
// console.log(
//   "We can add the string 'Coconut' to the beginning of the array: food = ['Coconut', ...food]",
//   ["Coconut", ...food]
// );
// console.log("lets see the content of food", food);

//Slicing and Splicing
//slice() method creates a subarray, chopping out a slice of an original array
//starting at one position and finishing at another, without including it
// const food = [
//   "🥥Coconut",
//   "🍍Pineaple",
//   "🍉Melon",
//   "🍔Burger",
//   "🍟Fries",
//   "🍪Cookie",
//   "🍿Popcorn",
//   "☕Coffee",
// ];
// console.log("food.slice(2, 4): ['🍉Melon', '🍔Burger']", food.slice(2, 4));
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍔Burger','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee']",
//   food
// );
// console.log(
//   "food.splice(2, 1, '🥭Mango'): '🍉Melon'",
//   food.splice(2, 1, "🥭Mango")
// );
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🥭Mango','🍔Burger','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee']",
//   food
// );
// //splice() can be used to insert or remove: destructive
// //to insert into an array without removing any items,
// //we indicate that zero items are to be removed
// console.log('food.splice(4, 0, "🍕Pizza")://[]', food.splice(4, 0, "🍕Pizza"));
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍔Burger','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee']",
//   food
// );
// console.log('food.splice(3, 1)://["🍔Burger"]', food.splice(3, 1));
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee']",
//   food
// );

//Finding if a Value is in an Array
// const food = [
//   "🥥Coconut",
//   "🍍Pineaple",
//   "🍉Melon",
//   "🍕Pizza",
//   "🍟Fries",
//   "🍪Cookie",
//   "🍿Popcorn",
//   "☕Coffee",
// ];
// //indexOf()- method to find the first occurence of a value in an array
// //if the item is in the array, it will return the index of the first occurence
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee'], food.indexOf('🍕Pizza')",
//   food.indexOf("🍕Pizza")
// ); //3
// //if the item isn't in the array, it will return -1
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee'], food.indexOf('Burger')",
//   food.indexOf("Burger")
// );
// //includes() returns a Boolean value(true/false)
// //depending on whether the array contains a particular element or not
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee'],food.includes('🍕Pizza')",
//   food.includes("🍕Pizza")
// ); //true
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee'],food.includes('Burger')",
//   food.includes("Burger")
// ); //false
// //add an extra parameter to indicate which index to start the search from
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee'],food.includes('🥥Coconut',1)",
//   food.includes("🥥Coconut", 1)
// ); //false

//Joining Array Items into a String
// const food = [
//   "🥥Coconut",
//   "🍍Pineaple",
//   "🍉Melon",
//   "🍕Pizza",
//   "🍟Fries",
//   "🍪Cookie",
//   "🍿Popcorn",
//   "☕Coffee",
// ];
//join() method can be used to turn the array into a string
//that comprises all the items in the array, separated by commas:
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee'],food.join()",
//   food.join()
// ); //🥥Coconut,🍍Pineaple,🍉Melon,🍕Pizza,🍟Fries,🍪Cookie,🍿Popcorn,☕Coffee
// //choose another separator insted of comma (' & ')
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee'],food.join(' & ')",
//   food.join(" & ")
// ); //🥥Coconut & 🍍Pineaple & 🍉Melon & 🍕Pizza & 🍟Fries & 🍪Cookie & 🍿Popcorn & ☕Coffee

// Reversing the Order of Array Items
// reverse()- to reverse permanent the order of the array
// const food = [
//   "🥥Coconut",
//   "🍍Pineaple",
//   "🍉Melon",
//   "🍕Pizza",
//   "🍟Fries",
//   "🍪Cookie",
//   "🍿Popcorn",
//   "☕Coffee",
// ];
// console.log(
//   "food:['🥥Coconut','🍍Pineaple','🍉Melon','🍕Pizza','🍟Fries','🍪Cookie','🍿Popcorn','☕Coffee'],food.reverse()",
//   food.reverse()
// ); //['☕Coffee', '🍿Popcorn', '🍪Cookie', '🍟Fries', '🍕Pizza', '🍉Melon', '🍍Pineaple', '🥥Coconut']

// Sorting Array Values permanently
// const food = [
//   "Coconut",
//   "Pineaple",
//   "Melon",
//   "Pizza",
//   "Fries",
//   "Cookie",
//   "Popcorn",
//   "Coffee",
// ];
// console.log(
//   "food:['Coconut','Pineaple','Melon','Pizza','Fries','Cookie','Popcorn','Coffee'],food.sort()",
//   food.sort()
// ); //['Coconut', 'Coffee', 'Cookie', 'Fries', 'Melon', 'Pineaple', 'Pizza', 'Popcorn']
// //Strings are sorted in alphaberical order by defalult, so are numbers
// //numbers are sorted by their first digit, rather than numerically
// console.log("[5, 9, 10].sort()", [5, 9, 10].sort()); //[10, 5, 9]

//Multi-dimentional Arrays
// const coordinates = [
//   [1, 3],
//   [4, 2],
// ];
// console.log(
//   "const coordinates = [[1, 3],[4, 2]], coordinates[0][0] //The first value of the first array",
//   coordinates[0][0]
// ); //1
// console.log(
//   "const coordinates = [[1, 3],[4, 2]], coordinates[1][0] //The first value of the second array",
//   coordinates[1][0]
// ); //4
// console.log(
//   "const coordinates = [[1, 3],[4, 2]], coordinates[0][1] //The second value of the first array",
//   coordinates[0][1]
// ); //3
// console.log(
//   "const coordinates = [[1, 3],[4, 2]], coordinates[1][1] //The second value of the second array",
//   coordinates[1][1]
// ); //2
// //use the Spread Operator to 'flatten' multidi-dimentional arrays
// //Flattening an array involves removing the nested arrays
// //by taking all the values out of their arrays
// //and placinf them on the same level in the parent array
// const summer = ["Jun", "Jul", "Aug"];
// const winter = ["Dec", "Ian", "Feb"];
// const nested = [summer, winter];
// console.log(
//   'const summer = ["Jun", "Jul", "Aug"];const winter = ["Dec", "Ian", "Feb"];const nested = [summer, winter];',
//   nested
// ); //[["Jun", "Jul", "Aug"], ["Dec", "Ian", "Feb"]]
// const flat = [...summer, ...winter];
// console.log("const flat = [...summer, ...winter]; flat()", flat); //['Jun', 'Jul', 'Aug', 'Dec', 'Ian', 'Feb']
// console.log("(nested.flat()", nested.flat()); //['Jun', 'Jul', 'Aug', 'Dec', 'Ian', 'Feb']
// console.log(
//   '[["Jun", "Jul", "Aug"], ["Dec", "Ian", "Feb"]].flat()',
//   [
//     ["Jun", "Jul", "Aug"],
//     ["Dec", "Ian", "Feb"],
//   ].flat()
// ); //['Jun', 'Jul', 'Aug', 'Dec', 'Ian', 'Feb']

//Challenges
// 1.Create a variable called shopping list that starts as an empty array
//Experiment using pop, push, shift, unshift and splice, along
//with the spread operator to add and remove items from the list

// //use push to add items to the shoppingList
// const shoppingList = [];
// console.log("const shoppingList = []; shoppingList =", shoppingList);
// console.log(
//   "const shoppingList = []; shoppingList.push('Dero')",
//   shoppingList.push("Dero")
// );
// // 1
// console.log("const shoppingList = []; shoppingList =", shoppingList);
// //['Dero']
// console.log(
//   "const shoppingList = []; shoppingList.push('Servetele umede')",
//   shoppingList.push("Servetele umede")
// );
// //2
// console.log(
//   "const shoppingList = []; shoppingList = ['Dero', 'Servetele umede']",
//   shoppingList
// );
// //['Dero', 'Servetele umede']
// console.log(
//   "const shoppingList = []; shoppingList.push('Ciocolata')",
//   shoppingList.push("Ciocolata")
// );
// // 3
// console.log(
//   "const shoppingList = []; shoppingList = ['Dero', 'Servetele umede', 'Ciocolata']",
//   shoppingList
// );
// // ['Dero', 'Servetele umede', 'Ciocolata']

// //use shift to delete the first item in shoppingList
// console.log(
//   "const shoppingList = []; shoppingList.shift()",
//   shoppingList.shift()
// );
// //Dero
// console.log(
//   "const shoppingList = []; shoppingList.shift()",
//   shoppingList.shift()
// );
// //Servetele umede
// console.log(
//   "const shoppingList = []; shoppingList = ['Ciocolata']",
//   shoppingList
// );
// //['Servetele umede', 'Ciocolata']
// //use push to add 'Ceai' to shoppingList
// console.log(
//   "const shoppingList = []; shoppingList.push('Ceai')",
//   shoppingList.push("Ceai")
// );
// //2
// console.log(
//   "const shoppingList = []; shoppingList = ['Ciocolata', 'Ceai']",
//   shoppingList
// );
// //['Ciocolata', 'Ceai']

// //use pop to delete the last item in shoppingList
// console.log("const shoppingList = []; shoppingList.pop()", shoppingList.pop());
// //Ceai
// // the removed item
// console.log(
//   "const shoppingList = []; shoppingList = ['Ciocolata']",
//   shoppingList
// );
// // ["Ciocolata"];

// //use unshift to add at the beginning of the array
// console.log(
//   "const shoppingList = []; shoppingList.unshift('Servetele uscate')",
//   shoppingList.unshift("Servetele uscate")
// );
// //2
// // logs out - the length of shoppingList
// console.log(
//   "const shoppingList = []; shoppingList = ['Servetele uscate', 'Ciocolata']",
//   shoppingList
// );
// //['Servetele uscate', 'Ciocolata']

// //use splice to remove 'Servetele umede'
// console.log(
//   "const shoppingList = []; shoppingList.splice(1)",
//   shoppingList.splice(1)
// );
// //['Ciocolata'] - the rest of the array logs out
// console.log(
//   "const shoppingList = []; shoppingList = ['Servetele uscate']",
//   shoppingList
// );
// //['Servetele uscate'] - the removed item logs out
// const shoppingList1 = ["Bomboane", ...shoppingList, "Caramele"];
// console.log(
//   "const shoppingList = []; shoppingList = ['Servetele uscate']",
//   shoppingList1
// );

// Challenge 2. Use three prompt boxes to ask the user for
//  three different words and place them in an array.
// Use an alert box to display the array
// const list = [
//   prompt("Please enter your shopping list item1"),
//   prompt("Please enter your shopping list item2"),
//   prompt("Please enter your shopping list item3"),
// ];
// console.log(list.join(", "));
// alert(`Your list is: ${list.join(", ")}`);
// const list1 = [prompt("Please enter your shopping list item1")];
// const list2 = [prompt("Please enter your shopping list item2")];
// const list3 = [prompt("Please enter your shopping list item3")];
// const result = [list1, " " + list2, " " + list3];
// alert(result);

//Challenge 3. Use a prompt box to ask the user to enter a word.
//Then use a combination of split, reverse() and join() methods to write
//the word backwords. For ex, "hello" would become  "olleh".
//Hint: provide an empty string as the parameter to the split() and join() methods
// let word = prompt("Please enter a word to reverse it");
// alert(`The reversed word is: ${word.split("").reverse().join("")}`);

// console.log("word:", word);
// let splitWord = word.split("");
// console.log("split word:", splitWord);
// let reversedWord = splitWord.reverse();
// console.log("reversed word:", splitWord);
// let joinedWord = reversedWord.join("");
// console.log("joined word: ", joinedWord);

//Challenge 4. Write a snippet of code that asks for a list of comma-separated
//names in a prompt and then creates an alert thar displays the names
//in alphabetical order
// const inputNames = prompt("Please enter some names, separated by comma").split(
//   ","
// );
// console.log("inputNames:", inputNames);
// const sortedInputNames = inputNames.sort();
// alert(`Sorted names are:  ${sortedInputNames}`);
// console.log("sortedInputNames: ", sortedInputNames);
// const names = ["Ioana", "Diana", "Alina"];
// console.log("names: ", names);
// const sortedNames = names.sort();
// console.log("sorted names:", sortedNames);

//Logic
//Booleans
// console.log("(Boolean('Hello'))", Boolean("Hello")); //true
// console.log("(Boolean(42))", Boolean(42)); //true
// console.log("(Boolean(0))", Boolean(0)); //false

// //There are nine faulty values in JavaScript:
// //double quoted empty string literal ""
// console.log('(Boolean(""))', Boolean("")); //false
// //single quoted empty string literal ''
// console.log("(Boolean(''))", Boolean("")); //false
// //empty template literal ``
// console.log("(Boolean(``))", Boolean(``)); //false
// //zero : 0
// console.log("(Boolean(0))", Boolean(0)); //false
// //negative zero : -0
// console.log("(Boolean(-0))", Boolean(-0)); //false
// //Not a Number : NaN
// console.log("(Boolean(NaN))", Boolean(NaN)); //false
// //...
// // console.log("(Boolean(...))", Boolean(...)); //false
// //null
// console.log("(Boolean(null))", Boolean(null)); //false
// //undefined
// console.log("(Boolean(undefined))", Boolean(undefined)); //false

//Logical Operators
//can be used to combine two or more statements to produce
//a compound statement that returns a Boolean value.
//Guess Who?
//  const guessWho = ["🧑Alphie", "🤶Betty", "👩‍🍳Gemma", "👴Del"];

//Negation(Logical NOT)
//Negation return the opposite of a value's Boolean value.
//So thruthy values will return false and falsy values will return true
//Who is NOT wearing glasses? Alphie and Gemma
//Who is NOT wearing a hat? Alphie and Del
//negation is achieved by placing the logical NOT operator(!) in front of a value
// console.log("!true: //negating true returns false", !true);
// console.log("!0: //0 is falsy, so negating it returns true", !0);
// console.log("'hello': //all non-empty strings are truthy", !"hello");
// //Double negation(!!) to find out if a value is truthy or falsy
// //"negates the negation"
// console.log("empty atrings are falsy: (!!'')", !!"");
// //empty atrings are falsy
// console.log("all non-empty strings are truthy: (!!'hello')", !!"hello");
// //all non-empty strings are truthy
// console.log("all non-zero numbers are truthy: (!!3)", !!3);
// //all non-zero numbers are truthy
// console.log("zero  is falsy: (!!0)", !!0);
// //Double negation(!!) has the same effect as using the Boolean() function

// Logical AND
// const guessWho = ["🧑Alphie", "🤶Betty", "👩‍🍳Gemma", "👴Del"];
// console.log("Who is wearing glasses AND a hat? // Betty");
// //The logical AND operator acts on two oe more values and returns true
// // if all the values are thruthy and false if any of them are falsy
// //&& is used as the logical AND operator
// //The value that gets returned is the last truthy value if they are
// // all truthy, or the first falsy value if some of them are falsy
// console.log('"hello" && 42: //42', "hello" && 42);
// //both the string 'hello' and the number 42 are truthy values
// //so the last value, 42 is returned
// console.log('42 && "hello": //"hello"', 42 && "hello");
// console.log("true && false: //false because it is falsy", true && false);
// console.log("false && true: //false because it is falsy", false && true);

//Logical OR
// const guessWho = ["🧑Alphie", "🤶Betty", "👩‍🍳Gemma", "👴Del"];
// console.log(guessWho);
// console.log("Who is wearing glasses OR a hat? // Betty, Gemma, Del");
// //The logical OR operator acts on two or more values and
// //returns the first true value if any values are truthy
// //and the last false value if all the values are false
// //|| is the logical OR operator
// console.log('"hello" || "goodbye" : ', "hello" || "goodbye");
// //if both expressions are thuthy, the first is returned
// console.log('"all" || 0 :', "all" || 0);
// //if only one of the values is truthy, it will be this value that's returned
// console.log("false || 0 : ", false || 0);
// //both value are falsy, so the last is returned

//Comparison
//Equality
//The equality operator can be used to check if two values are equal to each other
//== the double-equals operator is used to check for equality
// const answer = 42;
// console.log("answer == 42 : //true ", answer == 42); // returns true if answer = 42
// const answer1 = 40;
// console.log("answer1 == 42 : //false", answer1 == 42); // returns false if answer1 is not = 42

// //Soft Equality
// const answer2 = 42;
// console.log("answer2 == 42 : //true", answer2 == 42);
// //check if var answer2 is equal to the value of 42
// console.log("answer2 == '42' : // true", answer2 == "42");
// //check if var answer 2 is equal to the string '42'
// //Important difference: the string '42' is not the same as the number 42
// // they are completly different data types
// console.log('"  " == 0 : //true', "  " == 0);
// //A string containing white space is the same as number zero
// console.log('false == "0" : //true', false == "0");
// //The Boolean false is considered the same as the string "0"
// //Soft equality should never be used to check if two values are equal!!!

// //Hard Equality
// //=== triple-equals to test for hard equality
// //This will only return true if the two values are equal AND
// // are the same data types
// const answer3 = 42;
// console.log("answer3: ", answer3);
// console.log("answer3 === 42 : //true", answer3 === 42);
// //answer3 is equal to the number 42
// console.log("answer3 === '42' : //false", answer3 === "42");
// //answer3 is NOT equal to the string 42
// //Always use hard equality to test if two values are equal!!!
// //If you want to check weather a number represented by a string
// //is equal to a number, you should convert it to a number yourself
// console.log('answer3 === Number("42") : //true', answer3 === Number("42"));

//Inequality
//inequality operator  - to check if two values are not equal
//(!=)- soft inequality operator
//(!==) - hard inequality operator
// console.log("16 != '16' : //false", 16 != "16");
// //type coercion makes these equal
// console.log("16 !== '16' : //true", 16 !== "16");

//Greater Than or Less Than
// const answer = 42;
// console.log("answer > 10  //true", answer > 10);
// console.log("answer < 50  //true", answer < 50);
// console.log("answer <= 42  //true", answer <= 42);
// console.log("'apples' < 'Bananas'  //false", "apples" < "Bananas");

// Flow Control
//If Statements
// an if statement can be used to run a block of code
// only if a certain condition returns true
//Are you tired? => yes => Sleep
//pseudocode: if you are tired then go to sleep
// JS: if (tired){
// sleep();
// }
//The code inside the block will only run
//  if the condition in the parentheses is true.
//If the condition is not a Boolean value,
//it will be converted to a Boolean
//depending on whether or not is's truthy or falsy
// let energy = 10;
// // let energy = 2;

// if (energy < 3) {
//   alert("ZZZZ...");
//   console.log("ZZZZ...");
// }

//Else Statements
//Are you tired? => No => go for a run
//Are you tired? => Yes => go to sleep
//pseudocode: if you are tired then go to sleep
//else go for a run
//JS: if (tired){
// sleep();
// } else {
// run();
// }
//The else keyword adds an alternative block of code to be executed
//if the original condition isn't true;
//This means only one block of code will run
// let energy1 = 10;
// if (energy1 < 3) {
//   alert("ZZZ...");
// } else {
//   alert("Time to start running!");
// }

//The Ternary Operator
//the ternary operator (?) is a shorthand way of writing an if-else statement
//it takes two operands, a condition and two blocks of code
// format:
// condition ? code to run if condition is true : code to run if cond is false
// let energy = 10;
// energy < 5 ? alert("ZZZ...") : alert("Time to start running!");

//What's Your Favorite Animal?
// <= Does it live in water? Yes <= Is it big? => No => Does it live in water? =>
// Is it big? => No =>Does it live in water? => No => mouse
// Is it big? => No =>Does it live in water? => Yes => fish
//  Whale <= Yes <= Does it live in water? Yes <= Is it big?
//  Elephant <= No <= Does it live in water? Yes <= Is it big?
// const big = confirm("Is it a big animal?");
// const liveInWater = confirm("Does it live in water?");
// if (big && liveInWater) {
//   alert("Your favourite animal is a whale!");
// } else if (big && !liveInWater) {
//   alert("Your favorite animal is an elephant!");
// } else if (!big && liveInWater) {
//   alert("Your favorite animal is a fish!");
// } else if (!big && !liveInWater) {
//   alert("Your favorite animal is a mouse!");
// }

//Switch statements
// const legs = Number(prompt("How many legs does your favourite animal have?"));
// if (legs === 0) {
//   alert("Your favorite animal is a 🐟fish!");
// } else if (legs === 2) {
//   alert("Your favorite animal is a 🐧penguin!");
// } else if (legs === 4) {
//   alert("Your favorite animal is an 🐘elephant!");
// } else if (legs === 8) {
//   alert("Your favorite animal is an 🐙octopus!");
// } else {
//   alert("I'm not sure what animal has that many legs!");
// }

// const legs1 = Number(prompt("How many legs does your favourite animal have?"));
// switch (legs1) {
//   case 0:
//     alert("Your favorite animal is a 🐟fish");
//     break;
//   case 2:
//     alert("Your favorite animal is a 🐧penguin!");
//     break;
//   case 4:
//     alert("Your favorite animal is an 🐘elephant!");
//     break;
//   case 8:
//     alert("Your favorite animal is an 🐙octopus!");
//     break;
//   default:
//     alert("I'm not sure what animal has that many legs!");
// }
//Taking a break
//It's important to finish each case block with a break keyword,
//as this stops any more of the case blocks being executed.
// Without a break statement, the program will "fall through"
//and continue to evaluate case blocks

// Rock Paper Scissors
// const player = prompt("Choose rock, paper or scissors").toLowerCase().trim();
// const number = Math.ceil(3 * Math.random());
// //to choose a random number between 1 and 3 and store it in var number
// let computer;
// switch (number) {
//   case 1:
//     computer = "rock";
//     break;
//   case 2:
//     computer = "paper";
//     break;
//   case 3:
//     computer = "scissors";
// }
// if (player === computer) {
//   alert(`It's a draw, we both chose ${player}`);
// }
//all the options that result in the player winning:
//player chooses "rock" and computer chooses "scissors"
//player chooses "paper" and computer chooses "rock"
//player chooses "scissors" and computer chooses "paper"
// else if (
//   (player === "rock" && computer === "scissors") ||
//   (player === "paper" && computer === "rock") ||
//   (player === "scissors" && computer === "paper")
// ) {
//   alert(`You win! ${player} always beats ${computer}`);
// } else {
//   alert(`You lose! ${player} will never beat ${computer}`);
// }

// Challenge 1. Write some code that will ask a question and
//  then check to see if the answer provided by the user is correct.
//It should then provide feedback to say if they were right or wrong
//  in the alert box
// const currentDay = prompt("What day of the week is it today?")
//   .split("")
//   .join("")
//   .toLowerCase()
//   .trim();
// console.log(currentDay);
// switch (currentDay.toLowerCase()) {
//   case "monday":
//     alert("Correct. Today is Monday!");
//     break;
//   case "tuesday":
//     alert("Nope. Today is not Tuesday!");
//     break;
//   case "wednesday":
//     alert("Nope. Today is not Wednesday!");
//     break;
//   case "thursday":
//     alert("Nope. Today is not Thursday!");
//     break;
//   case "friday":
//     alert("Nope. Today is not Friday!");
//     break;
//   case "saturday":
//     alert("Nope. Today is not Saturday!");
//     break;
//   case "sunday":
//     alert("Nope. Today is not Sunday!");
//     break;
//   default:
//     alert("Hmm... I am not sure what if you did write a day of the week...");
// }

//Challenge 2. Write a "higher or lower" game. The computer should pick
//  a random number between 1 and 10, then ask if the next number
//will be higher using a confirm box. The computer should then choose
//another random number between 1 and 10 and tell the user if
//they were right or wrong

// const computerFirstNumber = Math.ceil(10 * Math.random());
// let player = confirm(
//   `The computer has chosen this number: ${computerFirstNumber}.
//   Will the next number be higher?`
// );
// let computerSecondNumber = Math.ceil(10 * Math.random());
// if (computerFirstNumber < computerSecondNumber) {
//   alert(
//     `Correct! You were right! ${computerFirstNumber} < ${computerSecondNumber}`
//   );
// } else if (computerFirstNumber > computerSecondNumber) {
//   alert(
//     `Wrong! You were wrong! ${computerFirstNumber} > ${computerSecondNumber}`
//   );
// }

//Challenge 3. Write some code that picks two numbers at random and
//  then asks the user to multiply them together.Use an alert box
// to tell the user if they're got the answer right or wrong.
// const random1 = Math.ceil(Math.random() * 10);
// const random2 = Math.ceil(Math.random() * 10);
// let userAnswer = Number(
//   prompt(`What is the result of ${random1} * ${random2}`)
// );
// if (userAnswer === random1 * random2) {
//   alert(`Correct! ${random1} * ${random2}= ${userAnswer} `);
// } else {
//   alert(`Wrong! ${random1} * ${random2} != ${userAnswer}`);
// }

//Going Loopy
//What's a loop?
//A loop is a piece of code that will continue to run
// until a certain condition is met.
//Start at number 10 => Say the number out loud =>
// => Subtract one from the number => Have you reached zero?
// => YES => BLAST OFF!
//=> NO=> Say the number out loud...
//We start at 10, say the number out loud, subtract one from the number
//and then check to see if we've reached zero.
//If we haven't reached zero, we loop back and repeat the process over again
//so we continue to say the number out loud, then subtract 1
// until we get to zero. Once this happens,
//we break out from the loop and the rocket can blast off!

//Infinite loops
//It's important that the condition to stop a loop is met at some point
//Otherwise will get an infinite loop
//Start at number 10 => Say the number out loud =>
// => Add one from the number => Have you reached zero?
// => YES => BLAST OFF!
//=> NO=> Say the number out loud...
//The problem is that the number goes up by one every time it runs
//through the loop, so it will never reach zero and therefore will never
// break out of the loop and stop!

//While loop
//This will repeatedly run a block of code while a certain condition is true
// while(some condition is true){
// do something
// }

//Ten Green Bottles
//Number of bottles = 10 => Is the number of bottles more than zero =>
//YES => Sing the song... => Reduce the number of bottles by 1
// => Is the number of bottles more than zero =>...
//NO => Stop
//We start by initializing the number of bottles to be 10
//  before entering the main loop.
//There is a check to see if there are more than zero bottles
//at the start of every loop and if there are, the loop continues.
// Otherwise, it breaks out and stops
// let bottles = 10;
// while (bottles > 0) {
//   console.log(`There were ${bottles} green bottles, hanging on the wall.
//     And if one green bottle should accidentaly fall,
//     there'd be ${bottles - 1} green bottles hanging on the wall.`);
//   bottles--;
// }
//The loop starts with the while keyword, which is followed by the
//condition in parentheses that the bottles variable has to be greater
// than zero. The loop will continue to execute for as long as this
//condition is true. This basically means "keep repeating the block of code,
// as long as the number of bottles is greater than zero"
//The decrement operator(--) is used to decrease the bottles variable by one

//Do-while loops
//The difference between a do-while loop and a while loop is
//that the condition comes after the block of code
//do{
// //do something
// } while (condition)
//The key  difference between a do-while loop and a while loop is that
//in the do-while loop the do block of code comes first,
//meaning that it will always run at least once,
//regardless of whether the condition is true or not
//Number of bottles = 10
// =>Sing the song...
// => Reduce the number of bottles by 1
// => Is the number of bottles more than zero
// => YES =>  Sing the song...
// => NO => Stop
//The condition has been moved to the end of the loop
// let bottles = 10;
// do {
//   console.log(`There were ${bottles} green bottles, hanging on the wall.
//     And if one green bottle should accidentaly fall,
//     there'd be ${bottles - 1} green bottles hanging on the wall.`);
//   bottles--;
// } while (bottles > 0);
//This has exactly the same result!

//For Loops
// for (initialization; condition; update){
// //do something
// }

//The initialization code is run before the loop starts and is usually
//employed to initialize any variables that are used it the loop.
//The condition has to be satisfied for the loop to continue
//The update code is what to do after each iteration of the loop
// and it is typically used to update any values
//Initialization=>Set the number of bottles to 10
// => Sing the song...
//=> condition => Is the number of bottles more than zero?
//=> NO => Stop
// => YES=> Update => Reduce number of bottles by 1
// =>Sing the song... => condition => Is the number of bottles more than zero?
// for (let bottles = 10; bottles > 0; bottles--) {
//   console.log(`There were ${bottles} green bottles, hanging on the wall.
//      And if one green bottle should accidentaly fall,
//     there'd be ${bottles - 1} green bottles hanging on the wall.`);
// }
//This initializes the variable bottles to 10, then sets the condition
// to be bottles > 0, and uses the decrement operator bottles --
// to reduce the value of the bottles variable by one after every loop
//A while loop, a do-while loop and a for loop achieve exactly the same result

//Nested loops
//You can loop inside another loop to create a nested loop
//The inner loop runs all the was through every step of the outer loop
//Once the inner loop has run all the way through, the variables for
//the outer loop are updated and it runs the inner loop all the way through
//again. This continues until the condition has been met for the outer loop
// to stop
//Lets create a set of multiplication tables, going from "one times" table
// up to "twelve times" table.
//1x1=1,1x2=2,1x3=3,1x4=4... all the way to 12x12=144
//To achieve this, we want the outer loop to set the first number to 1
// then use the inner loop to multiply it by a second number that will go
//from 1 to 12 in each step. After we've multiplied 1 by every number, we'll
// increase the first number to 2 in the outer loop and multiply this by
//all the numbers from 1 to 12 in the inner loop, untill we get 12  x 12

//outer loop
// for (let i = 1; i < 13; i++) {
//   //inner loop
//   for (let j = 1; j < 13; j++) {
//     console.log(`${j} x ${i} is ${i * j}`);
//   }
// }
//Loop variables
//We've created two varibles in the code above, i and j
//In loops, it's traditional to use a single letter for these "counter" var
//It's important to note that you need to use different letter for the var
//in each nested loop, so that they don't get confused
//We used i for the outer loop and j for the inner loop

//The outer loop increases the var i from 1 to 12.
//For every step of the outer loop, the inner loop increases the var j
// from 1 to 12. So the first iteration starts with i=1 anf j=1
// and logs out to console: 1 X 2 is 1
//In the next step, we're still inside the inner loop,
// so i remains 1 but j increases to 2, giving this:
//<< 1 x 2 is 2
//j continues to increase untill it reaches 12.
//After this, the program breaks out of the inner loop and returns to the
//outer loop, where i is updated from 1 to 2.
//It then re-enters the inner loop and j is initialized back to 1 and
//begins counting up to 12 again.
//This continues untill the last iteration produces the line:
// <<12 x 12 is 144

//Challenge 1. Write a loop that counts from 1 to 100 and checks
//if the number is a multiple of 3 or 5.
//It it is a multiple of 3, it should log "Fizz" to the console.
//If it is a multiple of 5, it should log "Buzz" to the console.
//If it is a multiple of 3 and 5, it should log "FizzBuzz" to the console
//and it it's neither, it should just log to the console.
//The initial output should look something like this:
//<< 1, 2, Fizz, 4, Buzz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz..
//You'll need to use the modulud operator (%) for this
// let result = [];

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     // console.log("FizzBuzz");
//     result.push("FizzBuzz");
//   } else if (i % 3 === 0) {
//     // console.log("Fuzz");
//     result.push("Fizz");
//   } else if (i % 5 === 0) {
//     // console.log("Buzz");
//     result.push("Buzz");
//   } else {
//     // console.log(i);
//     result.push(i);
//   }
// }
// console.log("Result:", result.join());

//Challenge 7.2. In the last chapter, we wrote some code for a higher
//and lower game, but it only gave user one go at guessing higher or lower.
//Write some code that allows the user to keep guessing until they
//get it wrong. It should also tell them how many times they managed
//to guess correctly at the end of the game.

// let correct = 0;
// let wrong = 0;

// for (let i = 0; i < 3; i++) {
//   let computer1 = Math.ceil(Math.random() * 10);
//   // console.log("1", computer1);
//   let computer2 = Math.ceil(Math.random() * 10);
//   // console.log("2", computer2);
//   let userChoice = confirm(
//     `The computer has chosen this number: ${computer1}.
//       Will the next number be higher?
//       Click Ok for Yes and Cancel for No`
//   );
//   if (
//     (userChoice && computer2 > computer1) ||
//     (!userChoice && computer2 < computer1)
//   ) {
//     alert(
//       `Corect! ${computer2} was ${
//         computer2 > computer1 ? "higher" : "lower"
//       } than ${computer1}`
//     );
//     correct++;
//   } else {
//     alert(
//       `Wrong! ${computer2} was ${
//         computer2 > computer1 ? "higher" : "lower"
//       }  than ${computer1}`
//     );
//     wrong++;
//   }
// }

// alert(`Game Over!
//    Correct guesses: ${correct},
//    Wrong Guesses: ${wrong}`);
// Another version with while loop
// 1. Initialize variables
// let gameOver = false;
// //a boolean flag to track whether the game is over(false=game is running)
// let guesses = 0;
// //a counter to track how many correct guesses the user has made
// let number = Math.ceil(Math.random() * 10);
// //the first random number between 1 and 10
// while (!gameOver) {
//   //the while loop runs indefinetely untill the user makes a wrong guess
//   //since gameOver is false, the loop runs at least once
//   const userSayHigher = confirm(`The current number is ${number}.
//      Do you think the next number will be higher?`);
//   //the confirm() funtion presents the user with a Yes/No(OK/Cancel) dialog
//   //if the user clicks OK, userSayHigher becomes true
//   //if the user clicks Cancel, userSayHigher becomes false
//   const nextNumber = Math.ceil(Math.random() * 10);
//   // a new random number(nextNumber) is generate, again between 1 and 10
//   if (
//     (nextNumber > number && userSayHigher) ||
//     (nextNumber <= number && !userSayHigher)
//   ) {
//     //this condition checks whether the user prediction was correct:
//     //if the user predicted "Higher"(true) and the new number is greater=>Correct!
//     //if the user predicted "Lower"(false) and the new number is equal or smaller=>Correct!
//     alert(`Correct! It was ${nextNumber}`);
//     guesses++;
//     number = nextNumber;
//     //displays a message saying they were correct
//     //increment guesses(correct guess counter)
//     //updates number to the new number(nextNumber) for the next round
//   } else {
//     alert(`Wrong! It was ${nextNumber}`);
//     gameOver = true;
//     //if the user made the wrong guess, an alert notifies them
//     //the gameOver flag is set to true, which exits the loop
//   }
//   alert(`Game Over! You managed to guess correctly ${guesses} times.`);
//   //the user sees how many correct guesses they made before losing
// }

// //Guess game- for loop version
// let guesses = 0;
// let number = Math.ceil(Math.random() * 10);
// for (let i = 0; i < Infinity; i++) {
//   //the for loop runs indefinitely
//   //infinite loop will break when the user loses
//   const userSayHigher = confirm(`The current number is ${number}.
//      Do you think the next number will be higher?`);
//   //the user is asked if the next number will be higher
//   const nextNumber = Math.ceil(Math.random() * 10);
//   // a new random number is generated
//   if (
//     (userSayHigher && nextNumber > number) ||
//     (!userSayHigher && nextNumber <= number)
//   ) {
//     //the guess is checked:
//     //if correct, the loop continues
//     //if incorrect, break; stops the loop
//     alert(`Correct! It was ${nextNumber}`);
//     guesses++;
//     number = nextNumber;
//     //updates the number for the next round
//   } else {
//     alert(`Wrong! It was ${nextNumber}`);
//     break;
//     //Exit the loop when the user is wrong
//   }
// }
// alert(`Game Over! You managed to guess correctly ${guesses} times. `);
// //After the loop ends, the final score is displayed.

// Challenge 7.3
//In the last chapter, we wrote a times table question game.
//Modify the code so that it asks five questions and
//keeps score of how many the user gets right
// let correct = 0;
// for (let i = 0; i < 5; i++) {
//   let random1 = Math.ceil(Math.random() * 10);
//   let random2 = Math.ceil(Math.random() * 10);
//   let userAnswer = Number(
//     prompt(`What is the result of ${random1} * ${random2}`)
//   );
//   if (userAnswer === random1 * random2) {
//     alert(`Correct! The answer is ${random1 * random2}`);
//     correct++;
//   } else if (userAnswer !== random1 * random2) {
//     alert(`Wrong! It was ${random1 * random2}`);
//   }
// }
// alert(`Your have ${correct} correct answers`);

//8. Functions
//A function is a block of code that's almost like a small, self-contained
//mini program.
//Functions are a perfect application of the DRY principle:
//Don't Repeat Yourself!
//input=>Function=>Output
//cake example:mInput=ingredients; process=mixing&Baking; output=cake
//Ex: Functionn that doubles a number:
//Input = a number; Process = number * 2; Output = answer
//A named block of code is known as a subroutine.
//If the code just performs a task, it should technically be called a
//procedure
//It only if the block of code outputs(or returns) a value it's called
//a function
// JS functions will return a value of undefined if a return value is
//not explicitly specified

// //Defining a function
// function hello() {
//   alert(`Hello, World`);
// }
// //Calling a function
// //Calling a function will run the block of code inside the function's body
// hello();
// // edit the function hello:
// function hello() {
//   console.log("Hello, World!");
// }

//Function Expressions
//-another way to defining a function
//-this assigns an "anonymous function" to a variable:
// const goodbye = function () {
//   alert(`Goodbye, World!`);
// };
// //Notice that the example above ends with a semicolon!
// goodbye(); //A pop up window alert with "Goodbye, World"
//It's important to remember that you need parentheses to call a function
//If you forget to add the parentheses, yo're just referencing the actual
//function, rather than calling it

//Arrow functions (=>)
//Arrow functions are always anonymous, so if you want to refer to them
//you must always assign them to a variable
// const hola = () => alert("Hola, Mundo!");
//The arrow functions start with the parentheses and arrow, ()=>
//Everything after that is the code that will run when the function is called
//Arrow function are called as any other functions:
// hola();

// Return Values
//Functions always return(or output) a value!
// function howdy() {
//   return "Howdy, World!";
// }
//Returned values can be any type of values, even functions
//!!If a return value isn't explicitly stated, it will return undefined
//This is because the function must return a value in order
// to be considered a function
//You'll often see undefined in the console after calling a function
//that in essence in just a procedure and doesn't need to return a value
//Ex: alert("hello") //undefinded
//When using arrow functions, you don't need to explicitly use the return
// keyword if the body of the function is just one line of code!
//In this case, the result of that code is the returned value
// const howdy = () => "Howdy, World!";
//Short, one line functions are good candidated for using arrow functions

//Parameters and Arguments
//Parameters and arguments are terms taht are often used interchangeably
//to represent values that are provided for the function as in input
//Difference:
//-the parameters of a function are set when the function is defined
//-the arguments of a function are provided when it is called
// function square(n) {
//   return n * n;
// }
//A function that squares numbers
//The function accepts a single parameter(n), which is the number
//to be squared
//In the body of the function, the name of the parameter
//  acts just like a variable.
//We multiply this value by itself and return the result
// square(4.5); //<20.45
//When we call the square function, we need to provide an argument
//which takes the place of the parameter in the definition
//and is the number to be squared
//When defining arrow functions with a single parameter, the parameter
//come before the arrow and the main body of the function comes after
// const square1 = (n) => n * n;
//You can use as many parameters as you like when defining functions
//This function finds the mean of any three numbers by adding them
//together and dividing the result by three:
// function mean(a, b, c) {
//   return (a + b + c) / 3;
// }
//Let's run that in console
// mean(8, 3, 4);
// console.log(mean(8, 3, 4)); //< 5
//When using more than one parameter with arrow functions, you need to
//olace them in parentheses, so the mean function would be written
//in arrow notation like this:
// let mean1 = (a, b, c) => (a, b, c) / 3;
//If the parameter isn't provided as an argument when the arrow function
//is called, the function eill still be called, but the missing argument
//will be given the value of undefined.
// console.log(mean1(1, 2)); //Nan
//If too many arguments are provided, when a function is called,
//the function will work as normal and the extra parameters will be ignored
// console.log(mean(1, 2, 3, 4, 5)); //2

//Default Parameters
// function hello(name = "World") {
//   alert(`Hello, ${name}!`);
// }
//Now if we call this function without any arguments, it will default to
//using "World" as the name argument:
// hello(); //<"Hello, World!"
// console.log(hello()); //< undefined
//Lets change the argument "World" to "Universe"
// hello("Universe"); //<"Hello, Universe!"
//Default parameters should always come after non-default parameters
//Otherwise, you'll have to enter default values when you call the function
//anyway.
// function discount(price, amount = 10) {
//   return (price * (100 - amount)) / 100;
// }
//This function takes two arguments: the price of an item, and the
//percentage discount to be applied. The store's most common discount
//is 10%, a default value. This means that the amount argument can be
//ommited in most cases and the 10% discount will still be applied.
//Let's calculate the sale price of an item that was $20 with 10% discount
// console.log(discount(20)); //<< 18
//Note that we didnt have to specify that the discount was 10%
//If a different discount needed to be applied, the amount argument can be provided
// console.log(discount(15, 20)); //<< 12 //an item that was 15$ discount 20%
//This will fain to work if the parentheses are defined in reversed order:
// function discount1(amount = 10, price) {
//   return (price * (100 - amount)) / 100;
// }
// console.log(discount1(20)); //NaN //because the price hasn't been set
// console.log(discount1(10, 20)); // 18 //works if both values are entered
//Always put default parameters after all other parameters!!!

//Random Integers
//creates a random number between 1 and 10
// Math.ceil(Math.random() * 10);
//helper function
// function randomInt(n) {
// return Math.ceil(Math.random() * n);
// }
//This will return a random integer between 1 and the number provided as an argument
//We can generate a random number between 1 and 6 using the following code:
// console.log(randomInt(6)); //<< 2
//It would be useful if we could add an optional lower bound to this function
//Let's set 1 as default value:
// function randomInt1(upper, lower = 1) {
// return Math.floor(Math.random() * (upper - lower + 1) + lower);
// }
//This will now return a random integer between lower and upper values provided
//as arguments
//The following code will return a random integer between 4 and 7:
// console.log(randomInt1(7, 4)); //<< 5
//Because we've given the lower bound a default value of 1, we can use it
//as before with a single argument to generate a random number between 1 and 10
// console.log(randomInt1(10)); //<< 4
//!The default parameters have to come last
//If the second argument isn't provided, it's given the value of undefinded
//We can check for this and assign the value of the upper and lower bound accordingly
// function randomInt2(lower, upper) {
// if (upper === undefined) {
// upper = lower;
// lower = 1;
// }
// return Math.floor(Math.random() * (upper - lower + 1) + lower);
// }
//We set the upper bound to be equal the argument provided(stored in var lower)
//and then set lower to be our default value of 1
// console.log(randomInt2(4, 7)); //<< 6

//Asigning Return Values to Variables
//Function are first-class-object in JS
//This mean they behave like all other data types
//-they can be assigned
//-they can even be used by other functions
//We can assign the return value of a function call to a variable
// function hello() {
//   return "Hello, World!";
// }
// const message = hello();
// console.log(message); //<<Hello, Wold!
//We want to check if a person was over 18.
//We could write a function that accepted age as an argument and
// returned true if they were over 18 or false if they weren't
// userIsChild = function (age) {
//   if (age < 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const restrictedAccess = userIsChild(age);
// const restrictedAccess1 = userIsChild(18);
// console.log(restrictedAccess1); //<< false

//Callbacks
//A function that's passed as an argument to another function is know as
//calback
//The callback can then be called from within the body of the function
//that's an argument of.
// function bake(ingredients, calback) {
//   console.log(`Mix together ${ingredients}...`);
//   console.log("Bake in the oven...");
// }
// console.log(bake("flour, water & sugar"));
//<< Mix together flour, water & sugar...
//<< Bake in the oven...
// function bake1(ingredients, calback) {
//   console.log(`Mix together ${ingredients}`);
//   console.log("Bake in the oven");
//   calback();
// }
//!You can overwrite a function declaration by declaring it again
//later in the code, but this won't work if you've assigned a function
//expression to a variable using const
// console.log(
//   bake1("flour, water & sugar", () => console.log("Add icing on top..."))
// );
//<< Mix together flour, water & sugar
//<< Bake in the oven
//<< Add icing on top...
//The calback doesnt have to be an anonymous function that's defined
// in the function call. We can definde a named function and then
//provide the name as an argument:
// function eat() {
//   console.log("Eat every last crumb!");
// }
//Let's try providing this function as an argument to the bake function
// console.log(bake1("flour, water and sugar", eat));
// << Mix together flour, water and sugar
// << Bake in the oven
// << Eat every last crumb!

//Sorting Arrays with a Callback
//the sort() method sorts items in the array into alphabetical order
//this works fine for strings but not so well for numbers
// console.log([1, 3, 12, 5, 23, 18, 7].sort()); //<<[1, 12, 18, 23, 3, 5, 7]
//The numbers are converted into strings and then placed in alphabetical
//Lets provide a callback as an argument to the sort() method.
//This callback tells the method how to compare any two values in the array
//Let's call them a and b. The callback function should return the following:
//-a negative value if a comes before b
//-0 if a and b are equal
//-a positive value if a comes after b
//An easy way to sort values numerically is to use subtraction a-b
//This will return a negative value if b is bigger than a,
//zero if a and b are equal, or positive if a is bigger than b
// console.log([1, 3, 12, 5, 23, 18, 7].sort((a, b) => a - b));
//<< [1, 3, 5, 7, 12, 18, 23] //sorted increasingly
//The result returned by the callback function help the sort() method
//understand whether an item is bigger or smaller than another
//so it can then order the items numerically

//Challenge-8.1
//1. Write a function called lastChar that accepts a string as an
//argument and returns the last letter of the string.
//For ex: lastChar('JavaScript') should return 't'
// function lastChar(string) {
//   let splitedWord = string.split("");
//   let reversedWord = splitedWord.reverse();
//   let joinedWord = reversedWord.join("");
//   return joinedWord[0];
// }
// console.log(lastChar("String"));

// //Version2:
// function lastChar2(string) {
//   return string[string.length - 1];
// }
// console.log(lastChar2("Version2"));

//Challenge-8.2
//Write a function called reverse that accepts a string and returns
// the string written backwards. For ex: reverse('JavaScript') should
//return 'tpircSavaJ'.
//Applying the function twice should return the original value, so
//reverse(reverse('JavaScript')) should return 'JavaScript'
// function reverse(string) {
//   return string.split("").reverse().join("");
// }
// console.log(reverse("Aurel"));  //leruA
// console.log(reverse(reverse("Aurel"))); //Aurel

//Challenge-8.3
//Write some functions that will add and remove some items from a list
//The list should be stored as an array and add('apples') should add
//the string 'apples' to the array and remove('apples') should remove
//'apples' from the array
// let list = [];

// function add(item) {
//   return list.push(item);
// }
// console.log(add("apples")); //<< 1
// console.log(add("pears")); //<< 2
// console.log(add("bananans")); //<< 3
// console.log(list); //<< (3) ['apples', 'pears', 'bananans'

// function remove(item) {
//   return list.pop(item);
// }
// console.log(remove("bananas")); //<< bananans
// console.log("list:", list); //<< list: (2) ['apples', 'pears']

//Version 2
// function remove2(item) {
//   i = list.indexOf(item);
//   if (i > -1) {
//     list.splice(i, 1);
//   }
//   return list;
// }
// console.log(remove2("bananas")); //<< (2) ['apples', 'pears']
// console.log("list:", list); //<< (2) ['apples', 'pears']

//Objects
//Properties and Methods
//Objects are abstract data types used in programming.
//Properties are information about the object
//Methods are actons that the object can perform
//Octopus🐙
//Properties Name: "Octavius"
//           Legs: 8
//Methods    Swim
//           Walk
//Square 🟥
//Properties Length: 5
//Methods    Perimeter = 4 * Length
//           Area = Length * Length

//Creating Objects in JavaScript
//An object-literal is a self-contained set of related values
//Properties can be of almost any data type, such as numbers, strings,
//Booleans, arrays anf even other objects
//If a property is a function, then it's known as a method
//To create an object literal in JS, simply enter a pair of curly braces
// const myObject = { key: "value" };
// const square = {
//   sides: 4,
//   length: 5,
//   perimeter: 20,
//   area: 25,
// };
//Each property has a key and an associated value

//Methods
//Methods look similar to other properties but are defined as a function
//Here is an object literal of a duck🦆 with a quack() method
// const duck = {
//   name: "Quacky",
//   legs: 2,
//   quack: function () {
//     alert("QUACK! QUACK!");
//   },
// };
//There's also an alternative notation for describing methods that omit
//the function keyword and just places parentheses after the method name
// const duck1 = {
//   name: "Quacky",
//   legs: 2,
//   quack() {
//     alert("QUACK! QUACK!");
//   },
// };

//Guess Again
//Remember the characters from our mini Game Guess Who?
//["🧑Alphie", "🤶Betty", "👩‍🍳Gemma", "👴Del"]
//We could create objects to reperesent each of them.
//Each object would contain properties describing their name and
//Boolean values to indicate if they're wearing glasses and a hat or not
// const alfie = {
//   name: "Alphie",
//   picture: "🧑",
//   glasses: no,
//   hat: no,
// };

//Creating Object From Variables
//You can also create objects from variables that already exist
// const name4 = "Dumbo🐘";
// const legs = 4;
// const fly = () => console.log("Fly, fly away!");
// const elephant = { name4, legs, fly };
// console.log(elephant); //{name4: 'Dumbo🐘', legs: 4, fly: ƒ}
//Notice that if the variable have already been declared and assigned
//to values or functions, you only have to place the variable names
//inside the object literal and it will assign the properties and
//methods to match the variable
//This is an example of object property shourthand syntax
//that makes it easier to create an object with property and method
//names that are the same as variables and functions that already exist
//The long-hand version would involve some repetition when creating
//the elephant object
// const elephant1 = {
//   name4: name4,
//   legs: legs,
//   fly: fly,
// };
// console.log(elephant1); //{name4: 'Dumbo🐘', legs: 4, fly: ƒ}

//Objects Properties And Methods
// const name4 = "Dumbo🐘";
// const legs = 4;
// const fly = () => console.log("Fly, fly away!");
// const elephant = { name4, legs, fly };
//You can access the properties of an object using the dot notation
// elephant.name4;
// console.log(elephant.name4); //Dumbo🐘
//You can also access an object's properties using bracket notation
// elephant["name4"];
// console.log(elephant["name4"]);
// const info = "name4";
// elephant[info];
// console.log(elephant[info]);
//If you try to access a property that doesn't exist, undefined will be
//returned
// elephant.arms;
// console.log(elephant.arms); //undefined
//The in operator can be used to check whether an object has a particular
//property. So, for example, we can check if the elephant object has a
//properties called arms and legs using :
// "arms" in elephant;
// console.log("arms" in elephant); //false
// "legs" in elephant;
// console.log("legs" in elephant); //true

//Calling Methods
// const name4 = "Dumbo🐘";
// const legs = 4;
// const fly = () => console.log("Fly, fly away!");
// const elephant = { name4, legs, fly };
//Methods are just like functions, so we call them in the same way
//We can refer to the object's method using dot or bracket notation
//just like with properties, but with parentheses at the end, so we
//would use the following code to call the fly method
// elephant.fly();
// console.log(elephant.fly()); //Fly, fly away!
//We can use the square bracket notation to call methods:
// elephant["fly"](); //Fly, fly away!
// console.log(elephant["fly"]());

//Adding More Properties And Methods
// const name4 = "Dumbo🐘";
// const legs = 4;
// const fly = () => console.log("Fly, fly away!");
// const elephant = { name4, legs, fly };
//Objects are mutable by default, which means that their properties
//and methods can be changed or removed and new properties and methods
//can be added, even if they were declared using const
// !!It's possible to freeze an object and make it immutable
//New properties and methods can be added at any time in a program
// elephant.ears = 2;
// console.log(elephant); //{name4: 'Dumbo🐘', legs: 4, ears: 2, fly: ƒ}

//Changing-Properties
// const name4 = "Dumbo🐘";
// const legs = 4;
// const fly = () => console.log("Fly, fly away!");
// const elephant = { name4, legs, fly };
// elephant.ears = 2;
// console.log(elephant); //{name4: 'Dumbo🐘', legs: 4, ears: 2, fly: ƒ}
//We can change the properties of an object's properties at any time
//using assignment
// elephant.name4 = "Elmer";
// console.log(elephant);
//  { name4: "Elmer",
//   legs: 4,
//   ears:2
//   fly: [function:fly]
// };

//Removing-Properties
// const name4 = "Dumbo🐘";
// const legs = 4;
// const fly = () => console.log("Fly, fly away!");
// const elephant = { name4, legs, fly };
// elephant.ears = 2;
// elephant.name4 = "Elmer";
// console.log(elephant); //{name4: 'Elmer', legs: 4, ears: 2, fly: ƒ}
// //- Any property can be removed from an object using the delete operator
// delete elephant.fly;
// console.log(elephant); //{name4: 'Elmer', legs: 4, ears: 2}

//Nested-Objects
//It's even possible for an object to contain other objects=nested objects
//Each nested object represents a different shape 📐, 🟥, 🛑
// const shapes = {
//   triangle: { sides: 3 },
//   square: { sides: 4 },
//   pentagon: { sides: 5 },
//   hexagon: { sides: 6 },
//   octagon: { sides: 8 },
//   megagon: { sides: 10e6 },
// };
//The values in nested objects can be accessed by referencing each
//property name in order using either dot or bracket notation:
// shapes.triangle.sides;
// console.log(shapes.triangle.sides); //3
// shapes.megagon.sides;
// console.log(shapes.megagon.sides); //10000000
// //You can mix the different notations
// shapes.hexagon["sides"]
// console.log(shapes.hexagon["sides"]) //6

//this
//The this keyword can be used inside an object to refer to the object
//itself.
//It is often used in methods to gain access to the object's properties
// const square = {
//   sides: 4,
//   length: 5,
//   perimeter: 20,
//   area: 25,
// };
//The problem with this object is that all the info about the square is
//hard-coded as properties. This isn't necessary, since wew can use methods
//to calculate the perimeter and area based on the values of the sides
//and length properties. We can use this to gain access to those prop
// const square1 = {
//   sides: 4,
//   length: 5,
//   perimeter() {
//     return this.sides * this.length;
//   },
//   area() {
//     return this.length * this.length;
//   },
// };
// console.log(square1); //{sides: 4, length: 5, perimeter: ƒ, area: ƒ}
//The perimeter and area properties have now been changed to methods
//that return the desired value. Inside the body of these methods there
//are references to other properties of the object: this.sides. is
//equivalent to writing square.sides, and this is number 4
// square1.perimeter();
// console.log(square1.perimeter()); // 20
// square1.area();
// console.log(square1.area()); // 25
//If we change the value of the length property, the perimeter and area
//also change to reflect this:
// const square2 = {
//   sides: 6,
//   length: 7,
//   perimeter() {
//     return this.sides * this.length;
//   },
//   area() {
//     return this.length * this.length;
//   },
// };
// console.log(square2); //{sides: 6, length: 7, perimeter: ƒ, area: ƒ}
// square2.length = 8; //8
// square2.perimeter();
// console.log(square2.perimeter()); // 48
// square2.area();
// console.log(square2.area()); // 64

//Roll-The-Dice
//-the sides property tells us that the dice has 6 sides
//-the roll() method will return a random number between 1 and 6
// const dice = {
//   sides: 6,
//   roll() {
//     return Math.ceil(Math.random() * this.sides);
//   },
// };
// dice.roll();
// console.log(dice.roll()); // 4
// console.log(dice.roll()); // 6
// dice.sides = 20;
// //The dice will return a random number between 1 and 20
// console.log(dice.roll()); // 17
// console.log(dice.roll()); // 13

//Challenge-9.1
//Create objects that describe some of your favourite things.
//For ex, you could create some objects that model your favorite sports
//stars and provide properties such as speed, power, agility.
//Or you could create some objects that represent products for sale
//on an ecommerce site, including properties as description, price and rating
//Have a play around in the console and practice reading and updating
//properties and calling the methods
// const dragon = {
//   strength: 10,
//   skill: 98,
//   "magic power": 90,
//   "fear factor": 99,
//   mPower: () => console.log(Math.ceil(Math.random() * 10 * this.skill)),
// };
// console.log("dragon:", dragon);
// //{strength: 10, skill: 98, magic power: 90, fear factor: 99}
// dragon.skill = 99;
// console.log("dragon:", dragon);
// //dragon: {strength: 10, skill: 99, magic power: 90, fear factor: 99}
// const cake = {
//   ingredients: ["flour", "sugar", "milk"],
//   stir: () => console.log("Stir well everything"),
//   bake: () => console.log("Bake for 15 minutes"),
//   review: () => console.log("Please rate this recipe"),
//   reviewList: [],
// };
// console.log("cake", cake);
// cake.reviewList.push("Smells nice!!");
// cake.ingredients.push("salt");

//Challenge-9.2
//Write objects that represents Betty, Gemma and Del in the Guess Who game
"🤶Betty", "👩‍🍳Gemma", "👴Del";
// const betty = {
//   name:"Betty",
//   picture:"🤶",
//   glasses: true,
//   hat: true,
// };
// const gemma = {
//   name:"Gemma",
//   picture:"👩‍🍳",
//   glasses:no,
//   hat:true,
// }
// const del ={
//   name:"Del",
//   picture:"👴",
//   glasses:true,
//   hat:false
// }

//Challenge-9.3
//Create a circle object that has a radius property and calculates the
//circumference and area. Hint: you might need to use the Math.PI const
// const circle = {
//   radius: 7.9,
//   circumference() {
//     return 2 * Math.PI * this.radius;
//   },
//   area() {
//     return Math.PI * this.radius * this.radius;
//   },
// };
// console.log("area: ", circle.area());
// console.log("circumference: ", circle.circumference());
// console.log("radius: ", circle.radius);

//The-Document-Object-Model
//DOM allows us to access the elements of a web page from within our code
//The DOM is language agnostic, which means it can be used in any program
//DOM represents an HTML document as a network of connected nods that form
//a tree-like structure
//The DOM treats everything on  web page as a node.
//It represents HTML tags as elements nods
//All these nods are connected to make a node-tree that describes the overall
//structure of the web page
//<h1 id="greeting">
// Hello, <em>World!</em>
//</h1>;
//The h1 tag contains everything, so this appears as an element node,
//at the top of the node tree
//The word "Hello" is text, so this is a child text node
//The <em> element is inside the <h1> tag, so it's a child element node
//This makes the <h1> element node a parent node of these child nodes
//The text inside the <em> tags is a child node of the <em> element node

//Getting-An-Element
//The DOM provides a useful method called getElementById that returns
//a reference to the element with a particulat ID attribute.
//Ex: we can get a reference to the h1 heading element using its id of
//greeting
// const hello = document.getElementById("greeting");
// console.log(hello); //h1#greeting
//If no elements with the ID provided, null is returned

//Updating-The-HTML
//The easiest way to update the HTML on a page is to use the innerHTML
//property
//This will return all the HTML that's enclosed inside that element's
//tag as a string
// const hello = document.getElementById("greeting");
// console.log(hello); //h1#greeting
// console.log(hello.innerHTML); //Hello <em>World!</em>
//The great thing about the innerHTML property is that it's writable
// const hello1 = document.getElementById("greeting");
//Next, we'll use a prompt box to ask for their name and store it in
// a variable name:
// const name = prompt("What is your name?");
//Last of all, we'll replace the innerHTML property with our own
//personalized greeting, which uses the name variable that we've just
//collected from the user:
// hello.innerHTML = `Hello, <em>${name}</em>`; //Hello name
//Notice that we've used a template literal to produce the HTML

//Getting-Multiple-Elements
//We gain access to the <ul> element using the following code:
// const food = document.getElementById("food");

//Getting elements by Tag Name
//We can use getElementsByTagName() to return a collection of all the
//elements with the tag name provided as an argument
// const items = document.getElementsByTagName("li");
//The var items now contains a collection of all the list-item elements
// console.log(items[0]); //li.fruit
// console.log(items.length); //3

//Getting Elements By Their Class Name
//We can also use the getElementsByClassName() method to return a collection
//of all the elements that have a particular class name.
// const fruit1 = document.getElementsByClassName("fruit");
// console.log(fruit1); //HTMLCollection(2) [li.fruit, li.fruit]
// console.log(fruit1.length); //2
// console.log(fruit1[0]); //<li class="fruit"><span>🍏</span>Apple</li>
// console.log(fruit1[1]); //<li class="fruit"><span>🍌</span>Banana</li>

// Query-Selectors
// - The document.guerySelector() method allows you to use CSS notation
// to target the first element in the document that matches the CSS selector
// const food1 = document.querySelector("#food");
// console.log(food1);
// {
/* <ul id="food">
      <li class="fruit"><span>🍏</span>Apple</li>
      <li class="fruit"><span>🍌</span>Banana</li>
      <li class="veg"><span>🥕</span>Carrot</li>
	</ul> */
// }
// - The document.querySelectorAll() metjod also uses CSS notatio, but
// returns a list of all the elements in the document that match the
// CSS query selector
// - These two statements are identical and return the same node list:
// const fruit2 = document.getElementsByClassName("fruit");
// console.log(fruit2); //HTMLCollection(2) [li.fruit, li.fruit]
// const fruit3 = document.querySelectorAll(".fruit");
// console.log(fruit3); //NodeList(2) [li.fruit, li.fruit]
// - The following code will return only the last item in the food list:
// const carrot = document.querySelector("ul#food li:last-child");
// console.log(carrot); //<li class="veg"><span>🥕</span>Carrot</li>

//Navigating-The-DOM-Tree
//Child nodes
//You can get a collection of all the child elements using the children
//property
//In our food example, food.children will return a node list of all the
//child elements of the <ul> element that has an ID of food
//The code below shows how we can get access to a node list containing
//the three child <li> elements:
// const food1 = document.querySelector("#food");
// console.log(food1.children.length); //3
// console.log(food1.children[0]);
//<li class="fruit"><span>🍏</span>Apple</li>
//Let's create some references to these child nodes
// const apple = food1.children[0];
// console.log(apple); //<li class="fruit"><span>🍏</span>Apple</li>
// const banana = food1.children[1];
// console.log(banana); //<li class="fruit"><span>🍌</span>Banana</li>
// const carrot = food1.children[2];
// console.log(carrot); //<li class="veg"><span>🥕</span>Carrot</li>
//Parent Node
//The parentNode property returns the parent node of an element
//The following code returns the food node because it's the parent
//of the apple node:
// console.log(apple.parentNode);
//<ul id="food">
//<li class="fruit"><span>🍏</span>Apple</li>
//<li class="fruit"><span>🍌</span>Banana</li>
//<li class="veg"><span>🥕</span>Carrot</li>
//</ul>

//Creating-Dynamic-Markup
//Creating an Element
//The document object has a createElement() method that takes a tag name
//as a parameter and returns that element.
//For ex: we could create a new item for our food list as a DOM fragment
//in memory by writing the following in the console:
// const melon = document.createElement("li");
//At the moment this element is empty
//To add some content, we'll use the innerHTML property to add HTML content
// melon.innerHTML = "<span>🍉</span>Melon";
// !!There's also a textContent property that can be used to add text
//to an element, but you can't use any HTML element for it.
// melon.textContent = "🍉Melon";
//But if you tried to add the <span> tags around the emoji, it wouldn't
//parse the HTML
// melon.textContent = "<span>🍉</span>Melon";
//'<span>🍉</span>Melon'

//Adding-Elements-To-The-Page
// Every DOM node has an appendChild() method that will add another node
//as a child node.
//The following ex will add the melon element we created above to
//  the end of food list:
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// console.log(food);
// <ul id="food">
// <li class="fruit"><span>🍏</span>Apple</li>
// <li class="fruit"><span>🍌</span>Banana</li>
// <li class="veg"><span>🥕</span>Carrot</li>
// <li>🍉Melon</li>
// </ul>

//Building-Elements-Node-By-Node
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
//An alternative to using innerHTML to populate the content of an element
// is to build each node individually and then use the appendChild()
// method to put them all together
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
//This will create all the nodes and assign variables to them
//Now we can put them together to form a list item:
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
//Now we need to insert this new list item into the HTML

//Insert-Before
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
//The insertBefore() method will pace a new element before another
//element in the markup
//This method is called on the parent node
//It takes two arguments: the first is the new node to be added,
//and the second is the node that you want it to go before
//The order of the parameters is the order they'll appear in the markup
//We can place the new brocoli element before apple element:
// food.insertBefore(brocoli, apple);

//Removing-Elements-From-A-Page
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
// food.insertBefore(brocoli, apple);
//An element can be removed from a page using remove() method
// carrot.remove();
//The carrot item has been removed from the rendered view(what we see in
// the browser)
//The original carrot code is still in the HTML
//JS has removed the carrot list item from DOM but not from actual HTML

//Replacing-Elements-On-A-Page
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
// food.insertBefore(brocoli, apple);
// carrot.remove();
//The replaceChild() method can be used to replace one node with another
//It's called on the parent node and has two parameters: the new node
//and the node that's to be replaced.
// const lemon = document.createElement("li");
// lemon.innerHTML = `<span>🍋</span>Lemon`;
// food.replaceChild(lemon, banana);
// console.log(food);
//<ul id="food">
//    <li><span>🥦</span>Brocoli</li>
//    <li class="fruit"><span>🍏</span>Apple</li>
//    <li><span>🍋</span>Lemon</li>
//  <li>🍉Melon</li>
//</ul>

//Getting-An-Element's-Attribute
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
// food.insertBefore(brocoli, apple);
// carrot.remove();
//All HTML elements have a large number of possible attributes such as:
//class, id, src and href.
//The getAttribute() method returns the value of the attibute provided
//as an argument
//We can find the clss of apple element:
// apple.getAttribute("class");
// console.log(apple.getAttribute("class")); //fruit
//If an element doesn't have the given attribute, it returns null
// brocoli.getAttribute("src");
// console.log(brocoli.getAttribute("src")); //null

//Setting-An-Elements-Attribute
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
// food.insertBefore(brocoli, apple);
// carrot.remove();
//- The setAttribute() method can change the value of the elemen's attribute
//- It takes two arguments: the attribute that you wish to change and
//the new value of the attribute
//We want to add the class of veg to the brocoli element:
// brocoli.setAttribute("class", "veg");
// console.log(brocoli); //<li class="veg"><span>🥦</span>Brocoli</li>
//Using the setAttribute() method will overwrite the current value
//When used to update the class attribute, this will overwrite all the
//classes that an element has

//The-className-Property
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
// food.insertBefore(brocoli, apple);
// carrot.remove();
// brocoli.setAttribute("class", "veg");
//The className property allows the class of an element to be set directly
//It can be used to find out the value of the class attribute too
// apple.className;
// console.log(apple.className); //fruit
//We can also use it to set the class attribute of an element
// melon.className = "fruit";
// console.log(melon.className); //fruit
//!!Changing the className property of an element by assignment will
//also overwrite all other classes that have already been set on the element

//The-classList-Property
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
// food.insertBefore(brocoli, apple);
// carrot.remove();
// const lemon = document.createElement("li");
// lemon.innerHTML = `<span>🍋</span>Lemon`;
// food.replaceChild(lemon, banana);
// brocoli.setAttribute("class", "veg");
// melon.className = "fruit";
//The classList property is a list of akk the classes an element has.
//The add() method can be used to add a class to an element without
//overwriting any classes that already exist.
// lemon.classList.add("fruit");
// console.log(lemon); //<li class="fruit"><span>🍋</span>Lemon</li>
//The remove() method will remove a specific class from an element
// lemon.classList.remove("fruit");
// console.log(lemon); //<li class=""><span>🍋</span>Lemon</li>
//The contains() method will check if  an element has a particular class
// console.log(apple.classList.contains("fruit")); //true
// console.log(apple.classList.contains("veg")); //false

//Doing-It-With-Style
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
// food.insertBefore(brocoli, apple);
// carrot.remove();
// const lemon = document.createElement("li");
// lemon.innerHTML = `<span>🍋</span>Lemon`;
// food.replaceChild(lemon, banana);
// brocoli.setAttribute("class", "veg");
// melon.className = "fruit";
//Every element has a style property
//This can be used to dynamically modify the presentation of any element
//on a web page
// apple.style.border = "red 2px solid";
//!!Any CSS propery names that are separated by hyphens must be written
//in camelCase notation when referenced in JS
//So the hyphen is removed and the next letter is capitalized.
//This is because JS doesn't allow hyphens in property names
//Ex: background-color becomes backgroundColor, font-size->fontSize

//Being-Classy
// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];
// const melon = document.createElement("li");
// melon.innerHTML = "<span>🍉</span>Melon";
// melon.textContent = "🍉Melon";
// food.appendChild(melon);
// const brocoli = document.createElement("li");
// const text = document.createTextNode("Brocoli");
// const span = document.createElement("span");
// const emoji = document.createTextNode("🥦");
// span.appendChild(emoji);
// brocoli.appendChild(span);
// brocoli.appendChild(text);
// food.insertBefore(brocoli, apple);
// carrot.remove();
// const lemon = document.createElement("li");
// lemon.innerHTML = `<span>🍋</span>Lemon`;
// food.replaceChild(lemon, banana);
// brocoli.setAttribute("class", "veg");
// melon.className = "fruit";
//A better alternative is to dynamically change the class of an element
//and have a different style for each class in the CSS
// apple.classList.add("highlighted");
//Using classes to update the style of elements is much more DRY aproach

//A-Simple-TO-DO-List
// const list = document.createElement("ul");
// document.body.appendChild(list);
//This created an unordered list(<ul>) and appends it in the <body> tag
//Next, we'll write a function for adding tasks:
// function add(item) {
//   const li = document.createElement("li");
//   li.innerHTML = item;
//   list.appendChild(li);
// }
//This function will create a list item(<li>) tag and append it as a
//child to the <ul> element we just created.
//The content of the list item will be whatever is provided to the
//function as an argument, so add("Read a book") will append the following
//HTML to the list element:
//<li>Read a Book</li>
//Open up the console and add a few tasks to the list:
// add("Bake cake");
// add("Sing song");
// add("Read book");
//Now let's write a function that wil toogle a class of complete to an item
//If the item does't have a class of complete, it will be added
//and if it already has the class, it will be removed:
// function toggle(item) {
//   item.classList.toggle('complete');
// }
// toggle(list.firstChild);
// toggle(list.lastChild);

//Challenge-10.1
//Create some dynamic HTML in a new Pen, including at least a heading
// and paragraph of text, using just JS.
// There should be nothing in the HTML section
// const heading = document.createElement("h2");
// heading.innerHTML = "Learn JavaScript";
// heading.style.color = "red";
// document.body.appendChild(heading);
// const paragraph = document.createElement("p");
// paragraph.innerHTML = "Let's learn the basics of JavaScript";
// paragraph.style.backgroundColor = "orange";
// paragraph.style.color = "white";
// document.body.appendChild(paragraph);

//Challenge-10.2
//Add a function called destroy to the to-do list that we just wrote.
//It should remove a task from the list that's provided as an argument
//Ex:destroy(list.lastChild) should remove the last item in the list
// const list = document.createElement("ul");
// document.body.appendChild(list);
// function add(item) {
//   const li = document.createElement("li");
//   li.innerHTML = item;
//   list.appendChild(li);
// }
// function toggle(item) {
//   item.classList.toggle('complete');
// }
// function destroy(item){
//   item.classList.toggle("destroy")
// }
// function destroy2(item){
//   item.remove()
// }
// add("Bake cake");
// add("Sing song");
// add("Read book");
// toggle(list.firstChild);
// toggle(list.lastChild);
// destroy(list.lastChild)
// destroy2(list.firstChild)

//The-Main-Event
//Event-based Programming
//Event-based programming is a style of coding that reacts to events
//in a similar way to know how to react to the whistle on the kettle
//The events in a program are usually user actions, such as pressing a key
//moving the mouse or tapping the scree, but there are also other things
//such as a timmer, a notification or a change in a state of the application
//Event Listeners
//An event listener is triggered when an event happens.
//Event listeners work in a similar way to the whistle on the kettle
//Instead of the program having to constanstly check to see if an event
//occured, the event listener sits in the background until the event happens
//and then lets the program know so it can respond immediately.
//This allows the program to continue with other tasks while waiting for
//the event to happen
//Event Handlers
//An event handler is a set of instructions on what to do when an event
//happens.
//In programming, an event handler usually takes a form of a callback function
//that's called when the event listener is triggered.
//For ex: you might want a pop-up notification to appear when a user clicks
//a button. This would be achieved by setting an event listener that's
//triggered when the user clicks the button.
//The event listener would then call function that displays the notification.
//The function would be called every time the event listener is triggered.

//Click-Events
//In JS, we can atach an event listener to an element of the page by
//calling the addEventListener() method on the element
// document.addEventListener("click", bang);
//The event listener acccepts two arguments:
//-the first is the event to listen for("click")
//-the second is the event handler(a callback function)
// function bang() {
//   document.body.style.background = "yellow";
//   document.body.innerHTML = `<h1>BANG!!</h1>`;
// }

//Clicking-Events
//The event listeners that are listening out for clicks on the whole page
//are called global event listeners
//We can also attach event listeners to specific elements on the page
//Let's create a button that changes the page background when it's clicked
const redButton = document.getElementById("red");
redButton.addEventListener(
  "click",
  (e) => (document.body.style.background = "red")
);
//This is a listening click event, but the second parameter, insted of being
//the name of the function, is a anonymous function that's directed directly
//inside the event listener

// The-Event-Object
//- Whenever an event happens, the function that's called is automatically
//passed an event object as a parameter
//- The event object contains a large amount of information about the event
//stored as properties
//- The target property points to the element that's triggered the event
const greenButton = document.getElementById("green");
greenButton.addEventListener(
  "click",
  (e) => (document.body.style.background = e.target.textContent)
);
//- The target property points to the element that triggered the event
//when it was clicked, so the greenButton in this case
//- The textContent property refers to the text inside this element = "Green"

//Forms
//Forms are a very common method of interacting with a web page
//When a form is submitted, it's sent to the server where the information
//id processed using a "back-end" language such as Python or Ruby
//It's possible to stop the form from being sent to the server and
//to instead use JavaScript on the "font end" to process the information
//HTML code:
// <p>Enter your name in the box below</p>
//<form name="myForm">
//<input type="text" name="myName" />
//<button type="submit">Submit</button>
//</form>
//<div id="hello"></div>
//Submitting-A-Form
// const form = document.forms.myForm;
// const hello = document.getElementById("hello");
// form.addEventListener("submit", sayHello);
// function sayHello(e) {
//   hello.textContent = `Hello, ${form.myName.value}`;
// }
//This function updates the textContent property of the hello div with ``
//Inside the ``(template literal) there's reference to form.myName.value
//This returns a string that matches what's inside the <input> field,
//because the <input> tag has a name attribute of myName.
//So it you write "JS" inside the input box, the hello div will contain
//the following message "Hello, JS!"
// !!Any elements inside a form can be referenced as a property of the form
//using their name attribute
// !!Forms have an action attribute that can be used to specify the page
//you want to submit them on the server

//Preventing-Default-Behavior
//- Some elements on a page have default behaviours that are built into the browser
//- Forms get sent to server by default when they're submitted.
//- The method preventDefault will stop any default behaviour from happening
///when an event occurs.
//- We can use it in sayHello function to stop the form from being submitted
//to the server.
const form = document.forms.myForm;
const hello = document.getElementById("hello");
form.addEventListener("submit", sayHello);
function sayHello(e) {
  e.preventDefault();
  hello.textContent = `Hello, ${form.myName.value}`;
}

//Keyboard-Events
//- There are two main events that relate to a user pressing a key:
//    -keydown: when the key is pressed
//    -keyup: when it's released
//The event object for thsese two events contains two properties that can
//tell us which key was pressed:
//  -The code property returns a string that relates to the actual
//   physical key that was pressed.
//  -The key property returns the actual output that will appear on the page
//  This can be influenced by special keys being held, such as shift or alt.
//  the keyboard layout settings, and locale settings(such as current keys)
//For ex: if you pressed the spacebar, the code property will be Space, but
//the key property will be (empty space which is what it produces)
// document.addEventListener(
//   "keydown",
//   (e) =>
//     (document.body.innerHTML = `<div>e.code: ${e.code}</div><div>e.key: ${e.key}</div>`)
// );
//- Every time a key is pressed in the document and update the innerHTML
//property of the page body to show the value of e.code and e.key.
//- When pressing down shift key =>
// e.code:ShiftLeft
//e.key:Shift

//Live-Input
//- Add to HTML section:
// <input id="input" />
//<div id="output"></div>
const input = document.getElementById("input");
const output = document.getElementById("output");
//- Let's attach an event listener to the input element:
input.addEventListener("keyup", (e) => (output.textContent = input.value));
//- This contains an anonymous function that will be called when the keyup
//event is fired. The reason for using keyup instead of keydown is because
//the character on the key appears inside the input field between these
//two events, so when the keydown fires, the character isn't there, but
//it will be by the time the keyup event fires.
//- This is important because the function inserts whatever's in the input
//field into the output div by overwriting the textContent property

//Mouse-Events
//Mouse-Move
//Every time the mouse pointer moves, the mousemove event fires
//Let's write some code that tells us the coordinates of the mouse
// pointer whenever it moves:
// document.addEventListener("mousemove", showCoords);
// function showCoords(event) {
//   document.body.textContent = `(${event.x},${event.y})`;
// }
//This function updates the textContent property of the document body
//to contain the coordinates of the mouse pointer. The x and y properties
//of the event object tell us the horizontal and vertical position of the
//mouse pointer respectively. We can use a template literal to insert these
//values into the text content of the document's body every time the mouse
//moves.
//Try moving the mouse pointer on the page and you should see its exact
//coordinates displayed in the top left corner
//(162, 48);

//Mouse-Over
//The mouseover event is fired when the mouse pointer moves over an element
//Let's create a game called Find the Bomb.
// const bomb = document.createElement("div");
// bomb.textContent = "💣";
// bomb.style.position = "absolute";
// bomb.style.top = Math.floor(200 * Math.random()) + "px";
// bomb.style.left = Math.floor(200 * Math.random()) + "px";
// bomb.style.fontSize = "64px";
// document.body.appendChild(bomb);
//We've created a <div> element that contains a bomb emoji as it's text content
//It then sets the position propery to absolute which allows us to set
//the position of the bomb relative to the left side and top of the page
//using the Left and Top propeties respectively
//We then set these properties to a random number
//We use the appendChild to place the bomb on the page
// bomb.addEventListener("mouseover", (e) => {
//   document.body.style.background = "red";
//   document.body.innerHTML = "<h1>BOOOOM!!!</h1>";
// });

//Move-Up-And-Down
//- The mousedown event fires when the left mouse button is pressed down
//and the mouseup event fires when it's released
//- This event can be attached to a particular element, so the event only
//fire when the mouse pointer is over the element
//- We can combine these two events with mousemove event to implement
// a very simple drag-and-drop interface
//- Add to HTML:
//<div id="star">⭐</div>;
//- Add to CSS:
//#star {
//font-size: 64px;
//position: absolute;
//}
//- This makes the element a big bigger and sets the position property to
//absolute, which means that its position can be changed using left and top
// const star = document.querySelector("star");
// star.addEventListener("mousedown", start);
// star.addEventListener("mouseup", stop);
// function start(e) {
//   document.addEventListener("mousemove", move);
// }
// function move(e) {
//   star.style.left = `${e.x}px`;
//   star.style.top = `${e.y}px`;
// }
//- The move function makes the dragging possible.
//- It sets the position of the star(star.style.left and star.style.top)
// to equal the position of the mouse pointer that's stored in the event
//object properties of x and y.

//Removing-Event-Listener
//- Add to HTML: <div id="star">⭐</div>;
//- Add to CSS: #star {
//                  font-size: 64px;
//                  position: absolute;
//                }
// const star = document.querySelector("star");
// star.addEventListener("mousedown", start);
// star.addEventListener("mouseup", stop);
// function start(e) {
//   document.addEventListener("mousemove", move);
// }
// function move(e) {
//   star.style.left = `${e.x}px`;
//   star.style.top = `${e.y}px`;
// }
//An event listener can be removed using the removeEventListener() method.
//This will remove an event listener that matches the same parameters.
// !!You shouldn't use anonymous functions as an argument to addEventListener
//if you want to remove the event listener later in the program.
//This is because there needs to be a reference to the same function name
//in the arguments of the removeEventListener

// document.removeEventListener("mousemove", move);
// function stop() {
//   document.removeEventListener("mousemove", move);
// }
//This will remove the event listener, so the position of the star will stop
//matching the position of the mouse and so stop moving.
//If the user clicks on the star again, the event listener will be added
//once more and the dragging will start again

//Simple-To-Do-List
//- There is a form with a single input box and submit button + empty <ul>
//<form name="addTask">
//<input type="text" name="newTask" />
//<button type="submit">ADD</button>
//</form>
//<ul id="list"></ul>
//- This gives us a reference to the form and that empty <ul> element
// const list = document.getElementById("list");
// const form1 = document.forms.addTask;
//This attaches an event listener to the form
//This will call the addTask function when the form is submitted
//- The first thing this function does is to stop the form from being submitted
//-We create a new list item <li> that's assigned to the variable task
//- Next, we make the textContent property equal the text that was entered
//into the form field, which is stored in form.newTask.value
//- Last, we use the appendChild() method to add this new element to the bottom
// function addTask(e) {
//   e.preventDefault();
//   const task = document.createElement("li");
//   task.textContent = form1.newTask.value;
//   list.appendChild(task);
// }

//Event-Delegation
//<form name="addTask">
//<input type="text" name="newTask" />
//<button type="submit">ADD</button>
//</form>
//<ul id="list"></ul>
const list = document.getElementById("list");
const form1 = document.forms.addTask;
form1.addEventListener("submit", addTask);
function addTask(e) {
  e.preventDefault();
  const task = document.createElement("li");
  task.textContent = form1.newTask.value;
  list.appendChild(task);
}
//-Let's strike the item out when they're clicked on.
//-The DRY way is to use event delegation.
//-The event listener is added to the list, rather than the individual list items.
//-Then we use the target property of the event object to identify the actual
//element that was clicked on.
list.addEventListener("click", strikeTask);
// function strikeTask(e) {
//   // alert(e.target.textContent);
// }
//-This is the strikeTask function that fires when the list is clicked on.
//-It includes an alert to show the text content of the element that was clicked
//on and identified using event.target.
//-Try using it... once it's working, we'll update the code in the function.
function strikeTask(e) {
  e.target.classList.toggle("complete");
}

//Challenge-11.1
//- The drag-and-drop example
//HTML:   <div id='star'>⭐️</div>
//		<div id='heart'>❤️</div>
//CSS: body{
//  		background: #223;
//	}
//#star,#heart{
//  font-size: 64px;
//  cursor: move;
//}
//#star::selection,   #heart::selection {
//    color: none;
//    background: none;
//    cursor: move;
//}
//#heart{
//  left:60px;
//  top: 60px;
//}
function drag(el) {
  // set to position absolute
  el.style.position = "absolute";
  // these 2 var need to be available to all the event handler func so need declaring outside their scope
  let offsetX, offsetY; // start the drag and drop
  const start = (e) => {
    // calculate the offset between the mouse position when the click happened and the position of the element
    offsetX = e.pageX - parseInt(getComputedStyle(el).left);
    offsetY = e.pageY - parseInt(getComputedStyle(el).top);
    // add mouse and touch event listeners when the dragging starts
    addEventListener("touchmove", move);
    addEventListener("touchend", stop);
    addEventListener("mousemove", move);
    addEventListener("mouseup", stop);
  }; // set the position of element to be the same as the mouse, taking account of the offset
  const move = (e) => {
    el.style.left = `${e.pageX - offsetX}px`;
    el.style.top = `${e.pageY - offsetY}px`;
  }; // remove mouse and touch event listeners when the dragging stops
  const stop = () => {
    removeEventListener("touchmove", move);
    removeEventListener("touchend", stop);
    removeEventListener("mousemove", move);
    removeEventListener("mouseup", stop);
  }; // add event listener to initiate the drag and drop when element is clicked on or touched
  el.addEventListener("touchstart", start);
  el.addEventListener("mousedown", start);
} // A couple of elements to test
const star = document.querySelector("#star");
drag(star);
const heart = document.querySelector("#heart");
drag(heart);

//Challenge-11.2
//Can you update the simple to-do list code so that the add function clears the input box
//and gives it focus after an item has been added, insted of the text
//just remaining there?
// HTML:
//<form name='addItem'>
//  <input type='text' name='item'>
//  <button type='submit'>ADD</button>
//</form>
//<ul id='list1'></ul>
//CSS: .complete {
//  text-decoration: line-through;
//}
const list1 = document.getElementById("list1");
const form2 = document.forms.addItem;
//Add items
form2.addEventListener("submit", add);
function add(e) {
  e.preventDefault();
  const item = document.createElement("li");
  item.innerHTML = form2.item.value;
  list1.appendChild(item);
  form2.item.value = "";
  form2.item.focus();
}
//Cross items off list
list1.addEventListener("click", complete);
function complete(e) {
  e.target.classList.toggle("complete");
}

//Challenge-11.3
//Instead of crossing out the items in the simple to-do list, can you
//change the functionality so that it removes the items when they're
//clickd on? use remove()
//HTML: <form name='addItem4'>
//        <input type='text' name='item'>
//       <button type='submit'>ADD</button>
//    </form>
//<ul id='list4'></ul>
//CSS: #list {
//      cursor: pointer;
//      }
const list4 = document.getElementById("list4");
const form4 = document.forms.addItem4;
//Event Listeners
form4.addEventListener("submit", addTask);
list4.addEventListener("click", removeTask);
//Functions
function addTask(e) {
  e.preventDefault();
  const item = document.createElement("li");
  item.innerHTML = form4.item.value;
  list4.appendChild(item);
  form4.item.value = "";
  form4.item.focus();
}
function removeTask(e) {
  e.target.parentNode.removeChild(e.target);
}

// Going-Loopy-Over-Arrays
//Spreading-Strings(...)
//- The spread operator can also be used to spread out all the characters
// of a string inside an array
// console.log([..."Hello"]);
// console.log([..."Hello"].reverse().join(""));
//- The code above uses chaining, which is the process of applying
//one method after another in a chain of method calls.
//- Each subsequent method is called on the return value of the previous
//method.
//- Let's break it down:
//- The string starts as this:
//"Hello"
//- Then the spread operator is applied and returns the following array:
// [..."Hello"];
// console.log([..."Hello"]); // ['H', 'e', 'l', 'l', 'o']
//- Then the reverse() method is called to return the following array:
// [..."Hello"].reverse();
// console.log([..."Hello"].reverse()); //['o', 'l', 'l', 'e', 'H']
//- Finally, the join() method is called on the array to change it
//  back to a string
// [..."Hello"].reverse().join();
// console.log([..."Hello"].reverse().join("")); //olleH

//Array-Iteration-Methods
//- Array iteration Methods are methods that allow you to loop over
//an array and apply an operation on every item in the array.
//- Every application of the operation to an item in the array is called
//iteration.
//forEach
//- The forEach() method iterates over every item in an array and calls a
//callback function on every iteration.
//- The callback function takes three parameters:
//    -the value of the current item in the array
//    -the index of the curret item in the array
//    -a reference of the array itself
//- If the method doesn't use the index or array references, they don't
//need to be specified.
// ["🍏", "🍌", "🥕"].forEach((item, index, array) =>
//   console.log(
//     `Item at position ${index} is ${item} (there are ${array.length} items in total).`
//   )
// );
//Item at position 0 is 🍏 (there are 3 items in total).
//Item at position 1 is 🍌 (there are 3 items in total).
//Item at position 2 is 🥕 (there are 3 items in total).

//An-Array-Of-Cards
//- We can use the forEach() method to quickly create an array that
//represents a deck of cards.
//- We'll do it by iterating over an array that represents the suits,
//and another that represents the value of each card in the suit.
//Open up a console and declare the following:
const suits = ["♠", "♦", "♣", "♥"];
const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
const deck = []; //will hold the full deck of cards
//- Now that er have these set up, we can iterate over the suits array
//and the values array to combine the elements into a aingle card
//that can be placed into the deck array using the push() method
suits.forEach((suit) =>
  values.forEach((value) => deck.push(`${value} of ${suit}`))
);
// console.log(deck);
//['Ace of ♠', '2 of ♠', '3 of ♠', '4 of ♠', '5 of ♠', '6 of ♠',
//'7 of ♠', '8 of ♠', '9 of ♠', '10 of ♠', 'Jack of ♠', 'Queen of ♠',
//'King of ♠', 'Ace of ♦', '2 of ♦', '3 of ♦', '4 of ♦', '5 of ♦',
//'6 of ♦', '7 of ♦', '8 of ♦', '9 of ♦', '10 of ♦', 'Jack of ♦',
//'Queen of ♦', 'King of ♦', 'Ace of ♣', '2 of ♣', '3 of ♣', '4 of ♣',
//'5 of ♣', '6 of ♣', '7 of ♣', '8 of ♣', '9 of ♣', '10 of ♣',
//'Jack of ♣', 'Queen of ♣', 'King of ♣', 'Ace of ♥', '2 of ♥',
//'3 of ♥', '4 of ♥', '5 of ♥', '6 of ♥', '7 of ♥', '8 of ♥', '9 of ♥',
//'10 of ♥', 'Jack of ♥', 'Queen of ♥', 'King of ♥']

//Map
//- The map() method also iterates over an array and uses a callback
//function as a parameter that's called on each item in the array.
//In contrast to forEach, map returns a new array that replaces each value
//with the return value of the callback function.
//- The callback to the map() method has three parameters as the forEach():
//    -the value pf the current item in the array
//    -the index of the current item in the array
//    -a reference to the array itself
//Add this to console:
// console.log(["🍎", "🍌", "🥕"].map((value, index, array) => "😀"));
//['😀', '😀', '😀']
// console.log([1, 2, 3].map((x) => "😁")); //['😁', '😁', '😁']
//The return value can be based on hte arguments provided to the callback
//Ex: every number in the array is mapped to the square of itself in a new array
// console.log([1, 2, 3].map((n) => n * n)); //[1, 4, 9]
//You can use any name for the parameters
//The following takes an array of items and then returns each item inside <li>
// console.log(["Apple", "Banana", "Carrot"].map((item) => `<li>${item}</li>`));
//['<li>Apple</li>', '<li>Banana</li>', '<li>Carrot</li>']
//- We can then chain the join() method with an empty string argument
//to the end to concatenate all the items into a single string of HTML:
// console.log(
// ["Apple", "Banana", "Carrot"].map((item) => `<li>${item}</li>`).join("")
// );
//<li>Apple</li><li>Banana</li><li>Carrot</li>
//This can be inserted into a <ul> element to make an unordered list
// const list5 = document.getElementById("list5");
// list5.innerHTML = ["Apple", "Banana", "Carrot"]
// .map((item) => `<li>${item}</li>`)
// .join("");

//Reduce
//- The reduce() method is another method that iterates over each value of an
//array, calling a callback function each time.
//- The main difference is that, instead of returning an array, it combines
//each result from the callback into a single value
//- The callback to the reduce() method describes how to combine each value
//of the array to produce a cumulative running total and has 4 parameters:
//  -an accumatator that stores the running total.The first final value
//    will be returned by the method;
//  -the value of the current item in the array;
//  -the index of the current item in the array;
//  -a reference of the array itself;
//- Most of the time, only the first two parameters are used
//Ex: add up all the numbers in the array and return the total:
// console.log([1, 2, 3].reduce((acc, value) => acc + value)); //6
//Let's multiply all the numbers together:
// console.log([1, 2, 3].reduce((acc, value) => acc * value)); //6
//The reduce() method also accepts an optional second argument
//that comes after the callback and allows us to set the initial
//value of the accumulator
//Ex: add all the numbers in the array, then add 10 to the result:
// console.log([1, 2, 3].reduce((acc, value) => acc + value, 10)); //16

// Filter
// - The filter() method tests each item in the array to see if they match
// certain conditions defined in a callback function.
// - Any item that return a truthy value in the callback are then returned
// as a new array
// - Ex: we can filter an array of numbers for numbers bigger than 2:
//
//  console.log([1, 2, 3, 4].filter((x) => x > 2)); //[3, 4]
// - In each iteratioon, the callback checks to see if the item in the array,
// represented by the parameter x, is greater than 2.
// - If it is, the callback returns true and the value is left in the new
// array that's returned.
// - The filter() method provides a useful way of finding all the truthy
// values from an array:
//
//  console.log([0, 1, "0", false, true, "hello"].filter(Boolean));
// [1, '0', true, 'hello']
// - Let's find all the falsy values:
//
//  console.log([0, 1, "0", false, true, "hello"].filter((x) => !x));
// [0, false]
// - This uses the not operator(!) to return the complement of a value's
// Boolean representation. This means that any falsy value will return
// true and be returned by the filter.

//Guess-Who-Filter
const alphie = {
  name: "🧑Alphie",
  glasses: false,
  hat: false,
};
const betty = {
  name: "🤶Betty",
  glasses: true,
  hat: true,
};
const gemma = {
  name: "👩‍🍳Gemma",
  glasses: false,
  hat: true,
};
const del = {
  name: "👴Del",
  glasses: true,
  hat: false,
};
const people = [alphie, betty, gemma, del];
// console.log(people.filter((person) => person.glasses && person.hat));
//{name: 'Betty', glasses: true, hat: true}
// console.log(people.filter((person) => !person.glasses && !person.hat));
//{name: 'Alphie', glasses: false, hat: false}

//Find
//- The find() method works in a similar way to the filter() method, but
//it returns the first value that matches the criteria defined in the callback.
//- This returns the first number that's greater than 2:
//console.log([1, 2, 3, 4].find((x) => x > 2)); //3
//- This returns the first programing language that begins with letter "J":
// console.log(
//   ["C", "C++", "Ruby", "Python", "JavaScript", "Swift", "Java"].find((word) =>
//     word.startsWith("J")
//   )
// );
//"JavaScript"
//- This finds the first person who wears glassses, but not a hat:
// console.log(people.find((person) => person.glasses && !person.hat).name);
//👴Del
//!Notice that, because the find() method returns the first matching
//element- which in this case is an object- we can chain the property
//of name on the end so that only the value of the property is returned
//rather than the whole object.

//Every
//- The every() method iterates over each item in the array and returns
//true if every item in the array matches the criteria defined in the
//callback
//Ex: Check if all the words in the array are longer than a single character
// console.log(
//   ["C", "C++", "Ruby", "Python", "JavaScript", "Swift", "Java"].every(
//     (word) => word.length > 1
//   )
// );
//false

//Some
//- The some() method is very similar to the every() method
//- It also iterates over each item in an array until a given condition
//defined in the callback returns true.
//- Once this happens, the iteration stops and the method returns true.
//- If it reaches the end of the array without any of the items
// returning true, it returns false.
//- It's a useful way to find out if at least one item in the array fits
//a certain criteria.
//Ex: this checks if any if the words are longer than 7 characters:
// console.log(
//   ["C", "C++", "Ruby", "Python", "JavaScript", "Swift", "Java"].some(
//     (word) => word.length > 7
//   )
// );
//true

//Iterating-Over-Objects
//Objects are collections, just like arrays, and it's possible
//to iterate over an object's properties
const rectangle = {
  height: 4,
  length: 5,
  perimeter() {
    return 2 * (this.height + this.length);
  },
  area() {
    return this.length * this.height;
  },
};
//We can loop through all the properties of an object using a for-in loop
//that iterates over every key in the object.
// for (const prop in rectangle) {
//   console.log(`${prop}: ${rectangle[prop]}`);
// }
//height: 4
//length: 5
//perimeter: perimeter() {
// return 2 * (this.height + this.length);
// }
// area: area() {
// return this.length * this.height;
// }
//The variable prop is used to reference each property name in
//each step in the iteration. We can then use rectangle[prop] to look
//up the value of that property

//Keys-And-Values
//- The object.keys() method returns an array of all the keys of the
//object that's provided as an argument:
// console.log(Object.keys(rectangle));
//['height', 'length', 'perimeter', 'area']
//- The key of each property is listed as a string in the array
//The object.values() method returns an array of all the values of
//each property
// console.log(Object.values(rectangle)); //[4, 5, ƒ, ƒ]
//Object.entries() method returns an array of key-value pairs
//These key-value pairs are returned as sub-arrays inside the array:
// console.log(Object.entries(rectangle));
// [Array(2), Array(2), Array(2), Array(2)]
//We could use forEach() to log the properties adn their values to console
// console.log(
//   Object.entries(rectangle).forEach((subArray) =>
//     console.log(`${subArray[0]}:${subArray[1]}`)
//   )
// );
// height:4
// length:5
//  perimeter:perimeter() {
//     return 2 * (this.height + this.length);
//   }
// area:area() {
//     return this.length * this.height;
//   }
//OR using destructuring:
// console.log(
//   Object.entries(rectangle).forEach(([prop, value]) =>
//     console.log(`${prop}:${value}`)
//   )
// );

//To-Do-List-Project
//The problem is that the items were added directly to the web page
//and never stored anywhere in the program.
//This concept is known as state management.
//One way to manage the state of the to-do list is to store the tasks
//in an array.
//We can use the array to find any of the tasks, or calculate how many
//tasks there are needing to be completed.
//Let's create an array to store the tasks in
//Next,the function that adds a task:
// function addTask(e) {
//   e.preventDefault();
//   tasks.push(form.item.value);
// }
//This adds tasks to the tasks array when the form is submitted,
//instead of writing them onto the page.
//When the user clicks a task, it's removed from the page using
//removeTask function.
// function removeTask(e) {
//   const index = tasks.indexOf(e.target.textContent);
//   if (index > -1) {
//     tasks.splice(index, 1);
//   }
// }
const list6 = document.getElementById("list6");
const form6 = document.forms.form6;
const count = document.getElementById("count");
const tasks = [];
function render() {
  list6.innerHTML = tasks.map((task) => `<li>${task}</li>`).join("");
  form6.item.value = "";
  form6.item.focus();
  count.innerText = `${tasks.length} task${
    tasks.length == 1 ? "" : "s"
  } left to complete`;
}
function addTask(e) {
  e.preventDefault();
  tasks.push(form6.item.value);
  render();
}
function removeTask(e) {
  const index = tasks.indexOf(e.target.textContent);
  if (index > -1) {
    tasks.splice(index, 1);
  }
  render();
}
form6.addEventListener("submit", addTask);
list6.addEventListener("click", removeTask);

//Challenge-12.1
//- Write a function that accepts an array of strings as an argument and
//uses map to return a new array of the same words written in uppercase
//- Can you get it to return an array with all the words written backwords?
const arrayOfStrings = ["Ana", "Ioana"];
function arrayToUpperCase(arrayOfStrings) {
  return arrayOfStrings.map((a) => a.split(" ").join("").toUpperCase());
}
// console.log(arrayToUpperCase(arrayOfStrings)); //['ANA', 'IOANA']
function reversedArrayToUpperCase(arrayOfStrings) {
  return arrayOfStrings
    .map((a) => a.split(" ").join("").toUpperCase())
    .reverse();
}
// console.log(reversedArrayToUpperCase(["Ana", "Maria"]));//["MARIA", "ANA"];

//Challenge-12.2
//- Write a spanner function that accepts a string and returns a string,
//with each individual character wrapped in a <span> tag using the map()
//and join() methods.
//- Ex: spanner ("Hello") should return the string
//  "<span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>"
const string = "Hello";
function spanner(string) {
  return string
    .split("")
    .map((a) => `<span>${a}</span>`)
    .join("");
}
// console.log(spanner(string));

//Challenge-12.3
//Extend the spanner function to create a coloredLetters function that
//colors each letter in a different color.
// It should accept a string and array of colors as parameters and then
//add a style attribute to each <span> tag.
const string1 = "Hello-There";
const arrayOfColours = ["red", "blue", "green", "yellow"];

function coloredLetters(string1, arrayOfColours) {
  return [...string1]
    .map(
      (char, index) =>
        `<span style="color:${
          arrayOfColours[index % arrayOfColours.length]
        }">${char}</span>`
    )
    .join("");
}
// console.log(coloredLetters(string1, arrayOfColours));
// document.body.innerHTML = `<h1>${coloredLetters(string1, arrayOfColours)}</h1>`

//Lets-Get-Functional
//Named-Parameters
const namedParam1 = document.getElementById("namedParam1");
const namedParam2 = document.getElementById("namedParam2");
//- When a function has a few parameters, it can be dificult to remember
//what order to write the arguments in when you call the function
function heading(text, color, size, bgcolor) {
  return `<h1 style='color:${color};background-color:${bgcolor};font-size:${size}'>${text}</h1>`;
}
//This uses positional parameters, which means that when the function
//is called, the position the argument is placed in determines which
//parameters it's assigned to in the function
//So, if we want a heading of "Hello, World!", sized 48px, colored
//red on a blue background:
heading("Hello, Wolrd!", "red", "48px", "blue");
namedParam1.innerHTML = heading("Hello, World!", "red", "48px", "blue");
//Let's rewritem the function, with the parameters listed as the
//  properties of an object literal:
function heading1({ text, color, size, bgcolor }) {
  return `<h1 style='color:${color};background-color:${bgcolor};font-size:${size}'>${text}</h1>`;
}
heading1({
  color: "red",
  bgcolor: "blue",
  text: "Hello, World!",
  size: "48px",
});
namedParam2.innerHTML = heading1({
  color: "red",
  bgcolor: "green",
  text: "Hello, World!",
  size: "48px",
});

// The-Rest-Parameter(...)
// - There are times when we don't know how many arguments will be provided
// to a function. The easiest way to deal with a varying number of
// arguments is to use the rest parameter. This consists of three dots
// placed in front of the last parameter declaration. It will collect
// all the arguments together in an array
// - This function accepts any number of arguments and uses the rest
// parameter to collect them all together in an array called numbers.
// - It the applies the reduce() method that we saw in the last chapter
// to this array and returns the sum of all the numbers that were entered
// as an argument:
function add(...numbers) {
  return numbers.reduce((acc, n) => acc + n);
}
// console.log(add(2, 3)); //5
// console.log(add(1, 2, 3, 4, 5)); //15

// Recursive-Functions
// - A recursive function is one that calls itself until a certain condition
// is met
// - Ex: Calc the factorial of a number:
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(3)); //6
// - This will multiply 3 by the return value of factorial(2), which will
// multiply 2 by the return number of factorial(1), which will multiply
// 1 by the return value of factorial(0), which is 1.
// - Working backwords gives 1 * 1 * 2 * 3 = 6

// Scope
// - The scope of a variable or function refers to the parts of the program
// where they can be accessed.
// - Often placing a variable inside a block will restrict its scope to that block.
// Global scope covers the entire program. Any variable or function that can be
// accessed anywhere in the program is said to have global scope.
// - Local scope refers to a function or a variable that's only available inside
// a particular code block. Any function or variable defined insidea block can
// only be accessed inside that particular block, when they're "in scope".
const global = "Hello, Global Scope!";
function local() {
  const secret = "Hello from the local scope.";
}
// console.log(global); //Hello, Global Scope!
// console.log(secret); //Uncaught ReferenceError: secret is not defined at...
// - To see how we can get access to the var secret from within the scopeof local
// function, let's redifine the function to log the secret var to the console:
function local1() {
  const secret1 = "Hello from the local scope.";
  console.log(secret1);
}
// console.log(local1()); //Hello from the local scope
// !!It's good practice to keep all variables declarations out of the global scope.
// - All variables in JS have local scope inside functions, but var only
// have block scope if they're declared using const and let.
// - If a var is declared using var, it can be accessed outside the scope of the
// block it was defined in.

// Hoisting
// - Functions that are defined using a function declaration are automatically
// hoisted to the top of a program's scope.
// - This means that they can be called before they're been defined.
// function is called at the start of the code
hoist();
//
//other code...
//
// function definition is at the end of the code
function hoist() {
  console.log("Hoist me!");
}
// - This is very useful, as it means that all functions definitions can
// be placed together, possibly at the end of the program, rather than
// every function having to be defined defore it's used.
// - An error will be thrown if you attempt to refer a variable before it has
// been declared using const and let.
// - For this reason you should try and declare any variables at the 
// beginning of a block so that hoisting isn't necessary.
// - This means that a function expression(where an anonymous function 
// is assigned to a variable) can't be called before it has been declared
// unlike a function declaration.