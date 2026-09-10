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

// PART 3e - IPO
// INPUT: developers array
// PROCESS: loop computerSetups and add monitors
// OUTPUT: total monitors
let totalMonitors = 0;
for (let i = 0; i < developers.length; i++) {
  for (let j = 0; j < developers[i].computerSetups.length; j++) {
    totalMonitors = totalMonitors + developers[i].computerSetups[j].monitors;
  }
}
console.log("3e Total Monitors:", totalMonitors);

// PART 3f - IPO
// INPUT: developers array
// PROCESS: loop and count computerSetups length
// OUTPUT: total setups
let totalSetups = 0;
for (let i = 0; i < developers.length; i++) {
  totalSetups = totalSetups + developers[i].computerSetups.length;
}
console.log("3f Total Setups:", totalSetups);

// PART 3g - IPO
// INPUT: developers array
// PROCESS: find who has most phones
// OUTPUT: name and count
let mostPhones = 0;
let mostPhonesName = "";
for (let i = 0; i < developers.length; i++) {
  if (developers[i].phones.length > mostPhones) {
    mostPhones = developers[i].phones.length;
    mostPhonesName = developers[i].name;
  }
}
console.log("3g Most Phones:", mostPhonesName, mostPhones);

// PART 3h - IPO
// INPUT: developers array
// PROCESS: loop to find empty laptops
// OUTPUT: names with no laptops
let noLaptopNames = [];
for (let i = 0; i < developers.length; i++) {
  if (developers[i].laptops.length === 0) {
    noLaptopNames[noLaptopNames.length] = developers[i].name;
  }
}
console.log("3h No Laptops:", noLaptopNames);
