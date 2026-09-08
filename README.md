# Online Store Inventory - IPO Analysis

## Main Program
**Input:** The inventory list and the product name we want to check   

**Process:** The program searches for the product in the inventory 

**Output:** Shows the product details or the updated inventory

## Function 1: getItemDetails
**Input:** product name like "keyboard"

**Process:** Checks if the item exists. If yes, gets price at [0] and quantity at [1]

**Output:** Returns an object with name, price, quantity

## Function 2: restockItem
**Input:** product name and new quantity like "keyboard", 10

**Process:** Changes the quantity: inventory[productName][1] = newQuantity

**Output:** Returns the updated inventory

## Function 3: getInventoryValue
**Input:** product name like "keyboard"

**Process:** Calculates price * quantity

**Output:** Returns total value as a number
