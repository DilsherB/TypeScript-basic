import { User } from "./6. Interfaces as Function Parameters";
// Example 8:
// <T> acts as a placeholder for whatever data type we pass in
/* As you build larger applications, you often encounter situations where a structure or function 
needs to work with any data type, but you still want to preserve strict type safety.

Instead of using any (which throws away type checking entirely), TypeScript gives us Generics. 
Think of a generic as a "type variable" (usually represented by <T>) that acts as a placeholder 
for a type passed in later. */
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

// Using it with a User type
let userResponse: ApiResponse<User> = {
  status: 200,
  message: "Success",
  data: { username: "Dilsher", id: 1, isLoggedIn: true },
};

// Using it with a number (e.g., a count)
let countResponse: ApiResponse<number> = {
  status: 200,
  message: "Success",
  data: 42,
};

// Exercise 8:
// Create a generic interface named Box<T> that has:
// 1. A property "contents" of type T
// 2. A property "weight" of type number
// 3. Create an object named "stringBox" using "Box<string>" where "contents" is "Fragile Items".
// 4. Create another object named "numberBox" using "Box<number>" where contents is "500".
interface Box<T> {
  contents: T;
  weight: number;
}

let stringBox: Box<string> = {
  contents: "Fragile Items",
  weight: 50,
};

let numberBox: Box<number> = {
  contents: 500,
  weight: 50,
};
