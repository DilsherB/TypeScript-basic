import { taskList } from "./11-Typed-Functions-with-Arrays.js";
function findTaskById(tasks, idToFind) {
    return tasks.find((task) => task.id === idToFind);
}
export let taskFound = findTaskById(taskList, 1);
// console.log(taskFound);
