// Example 5:
/* In real-world applications, not every piece of data is mandatory. 
For instance, a user might have an email address, but they might not.
In TypeScript, you can make a property optional by adding a question mark (?) right after the 
property name inside an interface: */
let team1: User[] = [
  { username: "Dilsher", id: 1, isLoggedIn: true },
  { username: "Balouch", id: 2, isLoggedIn: false },
];

// Exercise 5:
/* Modify your User interface to add an optional property called email of type string.
Create two user objects in an array named accounts:
The first user should include an email.
The second user should omit the email. */

interface User {
  username: string;
  id: number;
  isLoggedIn: boolean;
  email?: string;
}
let dilsher: User = { username: "Dilsher", id: 1, isLoggedIn: true };
let balouch: User = {
  username: "Balouch",
  id: 2,
  isLoggedIn: true,
  email: "balouch@gmail.com",
};
