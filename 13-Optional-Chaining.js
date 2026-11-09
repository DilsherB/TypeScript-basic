import { taskFound } from "./12-find()-and-Union-Types.js";
function getTaskTitle(task) {
    return task?.title;
}
let taskTitle = getTaskTitle(taskFound);
console.log(taskTitle);
let taskTitle1 = getTaskTitle(undefined);
console.log(taskTitle1);
