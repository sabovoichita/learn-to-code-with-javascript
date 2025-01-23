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
let score = 0;
score = 5;
let score1;
score1;
let $name;
let _answer;
let firstName;
let address_line1;
let firstNameAndLastName;
let first_name_and_last_name;

// alert("Hello");
const message = "HELLO THERE!";
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
console.log("     Hello World  ".trim());
console.log("   \t\t  JavaScript ".trim()); //escaped tabs and carriage returns
// are also removed
//trimStart() removes whitespace from beginning
console.log("     Hello World  ".trimStart());
//trimEnd() removed whitespace from end of string
console.log("     Hello World  ".trimEnd());
