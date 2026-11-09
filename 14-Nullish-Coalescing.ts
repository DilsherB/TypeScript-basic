import { taskFound } from "./12-find()-and-Union-Types.js";
import { Task } from "./9-API-Service.js";
function getTaskTitle(task: Task | undefined) {
  return task?.title ?? `Task not found.`;
}

let taskTitle = getTaskTitle(taskFound);

console.log(taskTitle);

let taskTitle1 = getTaskTitle(undefined);

console.log(taskTitle1);
