
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
