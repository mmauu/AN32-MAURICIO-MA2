// STORE DETAILS : 3 VARIABLES
const storeName = "BlitzData";
const storeLocation = "Tunasan, Muntinlupa";
const storeCapacity = 30;

//  VARIABLES FOR PRODUCT (STRING AND NUMBER)
let name;
let price;
let quantity;

// TOTAL VALUE FOR TOTAL NO. OF PRODUCT
let products = [
    {name: "Laptop", price: 18999, quantity: 50},
    {name: "Smartphone", price: 9999, quantity: 100},
    {name: "Tablet", price: 12999, quantity: 80}
];

let totalNumberProducts = 0;
// LOOP ON ALL PRODUCTS FOR QUANTITY
for (let product of products) {
    totalNumberProducts += product.quantity;
}
// STORE TOTAL VALUE OF INV.
let totalInventoryValue = 0;

for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
}

// NO. OF PRODUCT RECEIVED
const addLaptop = 10;
products[0].quantity += addLaptop; // UPDATED NO. OF PRODUCT 

// VARIABLES TO DETERMINE THE EXPENSIVE PRODUCTT
let highestPriceProductName = "";
let highestPrice = 0;

for (let product of products) {
    if (product.price > highestPrice) {
        highestPrice = product.price;  // EXPENSIVE PRODUCT PRICE
        highestPriceProductName = product.name;  // PRODUCT NAME UPDATE
    }
}

console.log("Store Name: ", storeName);
console.log("Store Loc.: ", storeLocation);
console.log("Total No. of Products: ", totalNumberProducts);
console.log("Total Inventory Value: ", totalInventoryValue);
console.log("Updated Laptop Quantity: ", products[0].quantity);
console.log("Most Expensive Product: ", highestPriceProductName);