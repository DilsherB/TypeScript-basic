import { Task } from "./9-API-Service";
// Partial<Task>
/* Now that you've got Lesson 9 locked down, let's dive right back into Lesson 10 with Partial<T>:

Create a type alias named TaskPatch using Partial<Task>.

Create an object named myUpdate typed as TaskPatch where you only update the priority to "high" and completed to true (omitting all other properties). */
type TaskPatch = Partial<Task>;

let myUpdate: TaskPatch = {
  priority: "high",
  completed: true,
};
