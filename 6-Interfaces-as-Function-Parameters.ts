// Example 6:
/* Now that you know how to create custom object shapes (interfaces) and functions, 
you can combine them! In real-world enterprise applications, 
functions frequently accept complex objects as parameters. */

export interface User {
  username: string;
  id: number;
  isLoggedIn: boolean;
  email?: string;
}
let dilsher1: User = { username: "Dilsher", id: 1, isLoggedIn: true };
let balouch1: User = {
  username: "Balouch",
  id: 2,
  isLoggedIn: true,
  email: "balouch@gmail.com",
};

// Exercise 6:
/* Write a function named displayUserInfo that:
Takes a parameter named user of type User (using our existing User interface).
Returns a string summarizing the user, for example: "User ID 1: Dilsher (Logged In)" (you can handle the login status or email however you like using template literals).
Call your function by passing either dilsher or balouch into it, and store the result in a variable named userInfoString. */
function displayUserInfo(user: User): string {
  if (user.isLoggedIn) {
    return `User ID ${user.id}: ${user.username} (Logged In)`;
  }
  return `Please login first Mr. ${user.username}`;
}
let userInfoString: string = displayUserInfo({
  username: "Dilsher",
  id: 1,
  isLoggedIn: true,
});

// output: User ID 1: Dilsher (Logged In)
