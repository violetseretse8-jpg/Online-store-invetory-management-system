
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
