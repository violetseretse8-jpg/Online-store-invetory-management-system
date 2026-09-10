
/*
TASK 2 - LOGIC BASED TASKS
IPO Analysis
INPUT: Array numbers = [3,56,23,78...980]
PROCESS: Use loops to sort, filter, sum, count
OUTPUT: New arrays logged to console
*/

const numbers = [3, 56, 23, 78, 23, 78, 100, 123, 148,193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

// TASK 1a - IPO
// INPUT: numbers array
// PROCESS: bubble sort ascending - compare and swap with temp
// OUTPUT: sortedAscending low to high
let sortedAscending = [];
for (let i = 0; i < numbers.length; i++) { sortedAscending[i] = numbers[i]; }
for (let i = 0; i < sortedAscending.length; i++) {
  for (let j = 0; j < sortedAscending.length - 1; j++) {
    if (sortedAscending[j] > sortedAscending[j+1]) {
      let temp = sortedAscending[j];
      sortedAscending[j] = sortedAscending[j+1];
      sortedAscending[j+1] = temp;
    }
  }
}
console.log("A Ascending:", sortedAscending);

// PART 1b - IPO
// INPUT: numbers array
// PROCESS: bubble sort descending - compare and swap if smaller
// OUTPUT: sortedDescending high to low
let sortedDescending = [];
for (let i = 0; i < numbers.length; i++) { sortedDescending[i] = numbers[i]; }
for (let i = 0; i < sortedDescending.length; i++) {
  for (let j = 0; j < sortedDescending.length - 1; j++) {
    if (sortedDescending[j] < sortedDescending[j+1]) {
      let temp = sortedDescending[j];
      sortedDescending[j] = sortedDescending[j+1];
      sortedDescending[j+1] = temp;
    }
  }
}
console.log("B Descending:", sortedDescending);

// PART 1c - IPO
// INPUT: numbers array
// PROCESS: loop and keep only first occurrence of each number
// OUTPUT: uniqueNumbers array
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  let found = false;
  for (let j = 0; j < uniqueNumbers.length; j++) {
    if (numbers[i] === uniqueNumbers[j]) { found = true; }
  }
  if (!found) { uniqueNumbers[uniqueNumbers.length] = numbers[i]; }
}
console.log("C Unique:", uniqueNumbers);

// PART 1d - IPO
// INPUT: numbers array
// PROCESS: loop to add all numbers
// OUTPUT: total sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log("D Sum:", sum);

// PART 1e - IPO
// INPUT: numbers array
// PROCESS: loop and keep numbers > 50
// OUTPUT: greaterThan50 array
let greaterThan50 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    greaterThan50[greaterThan50.length] = numbers[i];
  }
}
console.log("E >50:", greaterThan50);

// PART 1f - IPO
// INPUT: numbers array
// PROCESS: loop and keep even numbers
// OUTPUT: evenNumbers array
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers[evenNumbers.length] = numbers[i];
  }
}
console.log("F Even:", evenNumbers);

// PART 1g - IPO
// INPUT: numbers array
// PROCESS: loop and keep divisible by 3
// OUTPUT: divisibleBy3 array
let divisibleBy3 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    divisibleBy3[divisibleBy3.length] = numbers[i];
  }
}
console.log("G Divisible by 3:", divisibleBy3);

// PART 1h - IPO
// INPUT: numbers array
// PROCESS: loop and keep divisible by 5
// OUTPUT: divisibleBy5 array
let divisibleBy5 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    divisibleBy5[divisibleBy5.length] = numbers[i];
  }
}
console.log("H Divisible by 5:", divisibleBy5);

// PART 1i - IPO
// INPUT: numbers array
// PROCESS: loop and keep divisible by both 3 and 5
// OUTPUT: divisibleByBoth array
let divisibleByBoth = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    divisibleByBoth[divisibleByBoth.length] = numbers[i];
  }
}
console.log("I Divisible by 3 and 5:", divisibleByBoth);

// PART 1j - IPO
// INPUT: numbers array
// PROCESS: loop to count how many times 34 appears
// OUTPUT: count of 34
let count34 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 34) {
    count34 = count34 + 1;
  }
}
console.log("J Count of 34:", count34);
