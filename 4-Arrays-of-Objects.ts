// Example 4:
/* In applications, you rarely deal with just a single user or product; you usually work with arrays of them. 
In TypeScript, you type an array by appending [] to the type name (e.g., string[], number[], or User[]). */
let allUsers: User[] = [
  { username: "Alice", id: 1, isLoggedIn: true },
  { username: "Bob", id: 2, isLoggedIn: false },
];

// Exercise 4:
/* Using the User interface we just made:
Create an array variable named team typed as an array of User (User[]).
Populate the array with at least two user objects following the User shape. */
let team4: User[] = [
  { username: "Dilsher", id: 1, isLoggedIn: true },
  { username: "Balouch", id: 2, isLoggedIn: false },
];
