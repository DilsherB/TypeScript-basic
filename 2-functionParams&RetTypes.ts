// Function Parameter and Return Types
/* In TypeScript, you can (and should) type your function parameters and the value the function returns. If you don't specify a return type, TypeScript can usually infer it, but being explicit helps prevent bugs.
Here is an example of a typed function: */

//Example 2:
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

let total: number = calculateTotal(1.8, 4); // Returns 7.2

// Exercise 2:
/* Write a TypeScript function named formatProduct that:
Takes two parameters: name (of type string) and price (of type number).
Returns a string that combines them (for example, returning something like "Product: chair - $1.8").
Call your function and store the result in a variable named productDescription. */
function formatProduct(name: string, price: number): string {
  return `Product: ${name} - $${price}`;
}
let productDescription: string = formatProduct("chair", 1.8);

// same as arrow function

// let formatProduct = (name: string, price: number): string => {
//     return `Product: ${name} - $${price}`
// }
// let productDescription: string = formatProduct("chair", 1.8);
