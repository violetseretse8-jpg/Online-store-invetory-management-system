// TASK 2 PART 2- IPO
// INPUT: mixed array with numbers, strings, booleans
// PROCESS: use loops to filter and process by type
// OUTPUT: different filtered arrays and greeting

let mixed = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];
console.log("Original:", mixed);

// PART 2a - IPO
// INPUT: mixed array
// PROCESS: for loop, check typeof number
// OUTPUT: numbersOnly array
let numbersOnly = [];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "number") {
    numbersOnly[numbersOnly.length] = mixed[i];
  }
}
console.log("2a Numbers:", numbersOnly);

// PART 2b - IPO
// INPUT: mixed array
// PROCESS: while loop, check if type is string
// OUTPUT: stringsOnly array
let stringsOnly = [];
let j = 0;
while (j < mixed.length) {
  if (typeof mixed[j] === "string") {
    stringsOnly[stringsOnly.length] = mixed[j];
  }
  j++;
}
console.log("2b Strings:", stringsOnly);

// PART 2c - IPO
// INPUT: mixed array
// PROCESS: do while loop, add only numbers
// OUTPUT: total sum
let sumMixed = 0;
let k = 0;
do {
  if (typeof mixed[k] === "number") {
    sumMixed = sumMixed + mixed[k];
  }
  k++;
} while (k < mixed.length);
console.log("2c Sum:", sumMixed);

// PART 2d - IPO
// INPUT: stringsOnly array from 2b
// PROCESS: loop to build greeting with commas and and
// OUTPUT: greeting string
let greeting = "Hello, ";
for (let i = 0; i < stringsOnly.length; i++) {
  if (i === stringsOnly.length - 1 && stringsOnly.length > 1) {
    greeting = greeting + "and " + stringsOnly[i] + ".";
  } else if (stringsOnly.length === 1) {
    greeting = greeting + stringsOnly[i] + ".";
  } else if (i === stringsOnly.length - 2) {
    greeting = greeting + stringsOnly[i] + " ";
  } else {
    greeting = greeting + stringsOnly[i] + ", ";
  }
}
console.log("2d Greeting:", greeting);


// PART 2e - IPO
// INPUT: mixed array
// PROCESS: loop and keep everything that is NOT a string
// OUTPUT: noStrings array
let noStrings = [];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i]!== "string") {
    noStrings[noStrings.length] = mixed[i];
  }
}
console.log("2e No Strings:", noStrings);
