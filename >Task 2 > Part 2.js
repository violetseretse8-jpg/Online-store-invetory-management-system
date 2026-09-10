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
