import { Task, TaskPriority1 } from "./9-API-Service";
// Task:
/* Eleventh Exercise
Write a function named getTasksByPriority that:

Takes two parameters:

tasks (an array of Task: Task[])

targetPriority (of type TaskPriority1)

Returns a filtered array of Task (Task[]) where task.priority === targetPriority.

Call your function passing a sample array and "medium", and store the result in a variable named mediumTasks. */
export let taskList: Task[] = [
  {
    id: 1,
    title: "website design",
    priority: "low",
    completed: true,
    dueDate: "15th Nov 26",
  },
  {
    id: 2,
    title: "database setup",
    priority: "medium",
    completed: true,
    dueDate: "25th Nov 26",
  },
  {
    id: 3,
    title: "documentation",
    priority: "medium",
    completed: false,
    dueDate: "30th Nov 26",
  },
];

function getTasksByPriority(
  tasks: Task[],
  targetPriority: TaskPriority1,
): Task[] {
  return tasks.filter((task) => task.priority === targetPriority);
}

let mediumTasks = getTasksByPriority(taskList, "medium");
// console.log(mediumTasks);
