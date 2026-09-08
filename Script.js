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
function getInventoryValue() {
  let total = 0;
  for (let item in inventory) {
    total += inventory[item][0] * inventory[item][1];
  }
  return total;
}

// testing
console.log(getItemDetails("keyboard"));
console.log(restockItem("keyboard", 10));
console.log(getInventoryValue());
