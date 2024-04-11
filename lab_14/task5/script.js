let shoppingList = [];

function printShoppingList() {
    let unbought = [];
    let bought = [];
    
    shoppingList.forEach(function(item) {
        if (item.bought) {
            bought.push(item);
        } else {
            unbought.push(item);
        }
    });
    
    console.log("Unbought products:");
    unbought.forEach(function(item) {
        console.log(`${item.name}: ${item.quantity}`);
    });
    
    console.log("Bought products:");
    bought.forEach(function(item) {
        console.log(`${item.name}: ${item.quantity}`);
    });
}

function addPurchase(name, quantity) {
    let existingPurchase = shoppingList.find(item => item.name === name);
    if (existingPurchase) {
        existingPurchase.quantity += quantity;
    } else {
        shoppingList.push({ name: name, quantity: quantity, bought: false });
    }
}

function markAsBought(name) {
    let purchase = shoppingList.find(item => item.name === name);
    if (purchase) {
        purchase.bought = true;
    } else {
        console.log(`Product "${name}" not found in the shopping list.`);
    }
}

function addPurchaseWithPrompt() {
    let name = prompt("Enter the name of the product:");
    let quantity = parseInt(prompt("Enter the quantity:"));
    
    if (isNaN(quantity)) {
        console.log("Invalid quantity. Please enter a number.");
        return;
    }
    
    addPurchase(name, quantity);
}

addPurchase("Apples", 3);
addPurchase("Milk", 1);
addPurchase("Bread", 2);
addPurchase("Milk", 2);
markAsBought("Bread");

addPurchaseWithPrompt();

printShoppingList();
