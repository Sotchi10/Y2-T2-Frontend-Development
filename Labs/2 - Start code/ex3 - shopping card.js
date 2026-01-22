// 1- List of products in the shop : each product having a unique id, name and unit price:
const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

// 2-  Shopping cart : which contain the items the customer wants to buy and their quantity
// Exemple : Here the cart contains 2 apples and 1 orange  and the cart amount is 8 dollars
const SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

/**
 *  TODO  : Complete this function to get the total amount of the current shopping cart.
 * @returns the Shopping cart total amount
 */
function getCartTotalAmount() {
  let result = 0;
  // Write your code here
  SHOPPING_CART.forEach(item => {
    let prd = PRODUCTS.find((p, idx) => (
      (item.id === p.id)
    ));

    if(prd) {
      result += prd.price * item.quantity;
    }
  })
  return result;
}

/**
 *  TODO  : Complete this function to add a product to the shopping cart
 *
 *  - CASE 1 : if the product id already exists in the cart, just increment its quantity
 *      example :  addProductToCart(1)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 3 }]
 *
 *  - CASE 2 : if the product id does NOT exist in the cart, add a new item, with a quantity 1
 *      example :  addProductToCart(2)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }]
 *
 * @param {*} productId  the product id to add
 */
function addProductToCart(productId) {
  // Write your code here
  if(productId === 0 || productId < 0) {
    console.log("There is no product with ID equals 0 or lower!");
    return;
  }
  let prdFound = SHOPPING_CART.find((item, idx) => (
    (item.id === productId) 
  ))
  if(prdFound) {
    prdFound.quantity++;
  } else {
    SHOPPING_CART.push(
      {
        id: productId,
        quantity: 1
      }
    )
  }
}

/**
 *  TODO  : Complete this function to remove a product from the shopping cart
 *
 *  - CASE 1 : if the product id already exists in the cart,  and quantity if >=2    :  just decrement its quantity
 *      example :  removeProductToCart(1)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 1 }]
 *
 *  - CASE 2 : if the product id already exists in the cart,  and quantity is 1    :  remove the item from the card
 *      example :  removeProductToCart(1)    :   [{ id: 1, quantity: 1 }]   ------>   []
 *
 *  - CASE 2 : if the product id does NOT exist : do nothing !
 
 *
 * @param {*} productId  the product id to add
 */
function removeProductFromCart(productId) {
  // Write your code here
  if(productId === 0 || productId < 0) {
    console.log("There is no product with ID equals 0 or lower!");
    return;
  }
  let prdFound = SHOPPING_CART.find((item, idx) => (
    (item.id === productId) 
  ))
  if(prdFound) {
    if(prdFound.quantity > 0) {
      prdFound.quantity--;
    } 
    if(prdFound.quantity === 0) {
      SHOPPING_CART.pop(
      {
        id: productId,
        quantity: prdFound.quantity
      }
    )
    }
  } else {
    console.log(`Product ${productId} with did no exist in the list`);
  }
  
}

// --------------------------------------------------------
// TESTS ZONE
// --------------------------------------------------------

// test 1  -
console.log("Calculate Total:" + getCartTotalAmount());

// test 2  -

//Case 1
console.log("-----------------------------------------------------------");
console.log("CASE1:ID EQUALS 0 OR LOWER");
addProductToCart(0);
addProductToCart(-1);
console.log("\n>Nothing Updates<\n")
console.log(JSON.stringify(SHOPPING_CART));
console.log("-----------------------------------------------------------");


//Case2
console.log("-----------------------------------------------------------");
console.log("CASE2:EXISTING ID");
console.log("\nBefore Adding:");
console.log(JSON.stringify(SHOPPING_CART));

console.log("\n>Added product with ID equals 1 to the list<\n");
addProductToCart(1);
console.log("After Adding:");
console.log(JSON.stringify(SHOPPING_CART)); //  Shoud be    [{"id":1,"quantity":3},{"id":3,"quantity":1}]
console.log("-----------------------------------------------------------");

// test 3  -
console.log("-----------------------------------------------------------");
console.log("CASE3:NON-EXISTING ID");

console.log("\nBefore Adding:");
console.log(JSON.stringify(SHOPPING_CART));

console.log("\n>Added product with ID 2 to the list<\n");
addProductToCart(2);
console.log("After Adding:");
console.log(JSON.stringify(SHOPPING_CART)); //  Shoud be    [{"id":1,"quantity":3},{"id":3,"quantity":1},{"id":2,"quantity":1}]
console.log("-----------------------------------------------------------");

// test 4  -

//Case1
console.log("-----------------------------------------------------------");
console.log("CASE4:ID EQUALS 0 OR LOWER");
removeProductFromCart(0);
removeProductFromCart(-1);
console.log("\n>Nothing Updates<\n");
console.log(JSON.stringify(SHOPPING_CART));
console.log("-----------------------------------------------------------");

// Case2
console.log("-----------------------------------------------------------");
console.log("CASE5:REMOVE EXISTING ID quantity equals 0");
console.log("\nBefore Removing:");
console.log(JSON.stringify(SHOPPING_CART));

console.log("\n>Removed product with ID 2 from the list<\n");
removeProductFromCart(2);
console.log("After Removing:");
console.log(JSON.stringify(SHOPPING_CART)); 
console.log("-----------------------------------------------------------"); //  Shoud be    [{"id":1,"quantity":3},{"id":3,"quantity":1}]

// test 5  -
console.log("-----------------------------------------------------------");
console.log("CASE6:REMOVE EXISTING ID quantity greater than 0");

console.log("\nBefore Removing:");
console.log(JSON.stringify(SHOPPING_CART));

console.log("\n>Removed product with ID 1 from the list<\n");
removeProductFromCart(1);
console.log("After Removing:");
console.log(JSON.stringify(SHOPPING_CART)); 
console.log("-----------------------------------------------------------");

// test 6 -
console.log("Final Total: " + getCartTotalAmount() + "$"); //  Shoud be    [{"id":1,"quantity":2},{"id":3,"quantity":1},{"id":2,"quantity":1}]