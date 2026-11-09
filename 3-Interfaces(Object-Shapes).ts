/* In real-world applications, you often work with complex objects rather than just individual variables. 
TypeScript lets you define the "shape" of an object using an interface. */

// Example 3:
interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

// Now we can use the Product interface as a type
let item: Product = {
  name: "Desk",
  price: 120.5,
  inStock: true,
};

// Exercise 3:
/* Create an interface named User with three properties:
username (type string)
id (type number)
isLoggedIn (type boolean)
Create an object named currentUser that follows the User interface and assign sample values to it. */
interface User {
  username: string;
  id: number;
  isLoggedIn: boolean;
}
let currentUser: User = {
  username: "Dilsher",
  id: 1,
  isLoggedIn: true,
};
