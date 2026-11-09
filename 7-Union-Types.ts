// Example 7:
/* In JavaScript and TypeScript, sometimes a variable or property can be one of several specific values 
or types. A Union Type allows you to combine multiple types using the pipe operator (|). */
type UserRole = "admin" | "editor" | "guest";

interface SystemUser {
  username: string;
  role: UserRole;
}

let activeUser: SystemUser = {
  username: "Dilsher",
  role: "admin", // Valid
};

// Exercise 7:
/* Create a type alias named AccountStatus that can be one of three string values: "active", "suspended", or "pending".

Create an interface named CustomerAccount with:

accountName (type string)

status (type AccountStatus)

Create an object named myAccount using the CustomerAccount interface with a status of "active". */
type AccountStatus = "active" | "suspended" | "pending";
interface CustomerAccount {
  accountName: string;
  status: AccountStatus;
}
let myAccount: CustomerAccount = {
  accountName: "Dilsher",
  status: "active",
};
