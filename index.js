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
const name4 = "Dumbo🐘";
const legs = 4;
const fly = () => console.log("Fly, fly away!");
const elephant = { name4, legs, fly };
//Methods are just like functions, so we call them in the same way
//We can refer to the object's method using dot or bracket notation
//just like with properties, but with parentheses at the end, so we
//would use the following code to call the fly method
elephant.fly();
console.log(elephant.fly()); //Fly, fly away!
//We can use the square bracket notation to call methods:
elephant["fly"](); //Fly, fly away!
console.log(elephant["fly"]());
