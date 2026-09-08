// My inventory
let inventory = {
  keyboard: [500, 5],
  mouse: [250, 10],
  monitor: [3000, 3]
};

// Function 1 - get details
function getItemDetails(productName) {
  // check if item is there
  if (inventory[productName]) {
    let price = inventory[productName][0];
    let qty = inventory[productName][1];
    return productName + " price is " + price + " qty is " + qty;
  }
}

// Function 2 - restock
function restockItem(productName, newQuantity) {
  inventory[productName][1] = newQuantity;
  return inventory;
}

// Function 3 - total value
function getInventoryValue(productName) {
  let price = inventory[productName][0];
 ...
  return total;
};
}

// testing
console.log(getItemDetails("keyboard"));
console.log(restockItem("keyboard", 10));
console.log(getInventoryValue("keyboard"));
