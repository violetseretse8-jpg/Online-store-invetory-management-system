// TASK 2 PART 3 - IPO
// INPUT: developers array with nested objects
// PROCESS: loop through developers to extract and count
// OUTPUT: various stats about phones, setups, gadgets

const developers = [
  {
    name: "Vee",
    laptops: ["Dell"],
    phones: ["Samsung", "Xiaomi"],
    computerSetups: [{ brand: "Lenovo", monitors: 1, keyboards: 1, mice: 1, speakers: 1 }]
  },
  {
    name: "Katlego",
    laptops: ["HP", "Samsung"],
    phones: ["Apple", "Samsung", "Tecno", "Samsung"],
    computerSetups: [
      { brand: "Lenovo", monitors: 2, keyboards: 1, mice: 1, speakers: 2 },
      { brand: "Dell", monitors: 1, keyboards: 1, mice: 1, speakers: 1 }
    ]
  },
  {
    name: "Rethabile",
    laptops: ["Samsung"],
    phones: ["Samsung", "Huawei", "Poco"],
    computerSetups: [
      { brand: "Asus", monitors: 1, keyboards: 1, mice: 1, speakers: 1 },
      { brand: "Acer", monitors: 1, keyboards: 1, mice: 1, speakers: 2 }
    ]
  },
  {
    name: "Gift",
    laptops: [],
    phones: ["Samsung"],
    computerSetups: [
      { brand: "Acer", monitors: 3, keyboards: 1, mice: 1, speakers: 2 },
      { brand: "HP", monitors: 2, keyboards: 1, mice: 1, speakers: 2 }
    ]
  },
  {
    name: "Thokozile",
    laptops: ["Lenovo"],
    phones: ["Apple"],
    computerSetups: [
      { brand: "Dell", monitors: 1, keyboards: 1, mice: 1, speakers: 2 },
      { brand: "Asus", monitors: 1, keyboards: 0, mice: 1, speakers: 1 },
      { brand: "Dell", monitors: 1, keyboards: 1, mice: 1, speakers: 1 }
    ]
  }
];

// PART 3a - IPO
// INPUT: developers array
// PROCESS: for loop, get each name
// OUTPUT: names array
let devNames = [];
for (let i = 0; i < developers.length; i++) {
  devNames[devNames.length] = developers[i].name;
}
console.log("3a Names:", devNames);

// PART 3b - IPO
// INPUT: developers array
// PROCESS: loop and count phones length
// OUTPUT: total phones
let totalPhones = 0;
for (let i = 0; i < developers.length; i++) {
  totalPhones = totalPhones + developers[i].phones.length;
}
console.log("3b Total Phones:", totalPhones);

// PART 3c - IPO
// INPUT: developers array
// PROCESS: loop phones and count Samsung
// OUTPUT: samsung count
let samsungCount = 0;
for (let i = 0; i < developers.length; i++) {
  for (let j = 0; j < developers[i].phones.length; j++) {
    if (developers[i].phones[j] === "Samsung") {
      samsungCount++;
    }
  }
}
console.log("3c Samsung Phones:", samsungCount);

// PART 3d - IPO
// INPUT: developers array
// PROCESS: loop and count laptops
// OUTPUT: total laptops
let totalLaptops = 0;
for (let i = 0; i < developers.length; i++) {
  totalLaptops = totalLaptops + developers[i].laptops.length;
}
console.log("3d Total Laptops:", totalLaptops);
