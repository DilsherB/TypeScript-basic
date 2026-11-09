type MyTaskPriority = "low" | "medium" | "high";

type NewTask = Omit<Task, "id">;

interface Task {
  id: number;
  title: string;
  priority: MyTaskPriority;
  completed: boolean;
  dueDate?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

type TaskPatch = Partial<Task>;

let myTasks: Task[] = [
  {
    id: 1,
    title: "learn TS",
    priority: "high",
    completed: false,
    dueDate: "30th Nov 2026",
  },
  {
    id: 2,
    title: "build projects with TS",
    priority: "high",
    completed: false,
    dueDate: "15th Dec 2026",
  },
  {
    id: 3,
    title: "build a web app",
    priority: "medium",
    completed: false,
    dueDate: "31st Dec 2026",
  },
  {
    id: 4,
    title: "learn cloud dev",
    priority: "medium",
    completed: false,
  },
  {
    id: 5,
    title: "rsign from Accounts job",
    priority: "low",
    completed: false,
    dueDate: "11th Jan 2027",
  },
];

function getTasksByPriority(
  tasks: Task[],
  taskPriority: MyTaskPriority,
): { taskWithGivenPriority: Task[]; taskPriority: MyTaskPriority } {
  const taskWithGivenPriority = tasks.filter(
    (task) => task.priority === taskPriority,
  );
  return { taskWithGivenPriority, taskPriority };
}

function findTaskById(tasks: Task[], id: number): Task | undefined {
  return tasks.find((task) => task.id === id);
}

function getSafeTaskTitle(task: Task | undefined): string {
  return task ? `${task.id}: ${task.title}` : `Task not found`;
}

function updateTaskById(
  tasks: Task[],
  id: number,
  patch: TaskPatch,
): ApiResponse<Task | undefined> {
  let taskToUpdate = tasks.find((task) => task.id === id);
  return taskToUpdate
    ? {
        success: true,
        message: "Task updated successfully",
        data: Object.assign(taskToUpdate, patch),
      }
    : {
        success: false,
        message: `Task not found with id: ${id}`,
        data: undefined,
      };
}
function deleteTaskById(
  tasks: Task[],
  id: number,
): { deletedTask: Task[]; tasks: Task[], indexToDelete: number, id: number} {
  const indexToDelete = tasks.findIndex((task) => task.id === id);
  return indexToDelete === -1
  ? {deletedTask: [], tasks, indexToDelete: id, id: id}
  : {deletedTask: tasks.splice(indexToDelete, 1), tasks, indexToDelete, id: id}
}
// function deleteTask(tasks: Task[], id: number): Task[] {
//   const indexToDelete: number = myTasks.findIndex(task => task.id === id);
//   let deletedTask = myTasks.splice(indexToDelete, 1)
//   return {deletedTask, myTasks}
// }

function addTask(task: NewTask): ApiResponse<Task> {
  let nextId: number = 1;
  while (myTasks.some((t) => t.id === nextId)) {
    nextId++;
  }
  const newTask: Task = { id: nextId, ...task };
  myTasks.push(newTask);
  // myTasks.length > 0 ? Math.max(...myTasks.map(task => task.id)) + 1 : 1;
  // const newTask: Task = {
  //   id: nextId,
  //   title,
  //   priority,
  //   completed,
  //   dueDate
  // }
  return {
    success: true,
    message: "Task added successfully",
    data: newTask,
  };
}

console.log("\n\n====Your result by Priority=====\n");
let byPriority = getTasksByPriority(myTasks, "high");
console.log(`====you ask for priority: ${byPriority.taskPriority}====`);
console.log(byPriority.taskWithGivenPriority);

console.log("\n\n =====Your result by ID=====\n");
let byId = findTaskById(myTasks, 1);
console.log(byId);

console.log("\n\n ====Title of found task====\n");
let titleFound = `Title of id ${getSafeTaskTitle(byId)}`;
console.log(titleFound);

let newAndDeletedTasks = deleteTaskById(myTasks, 9);
console.log(
  `\n\n =======Deleted Task id: ${newAndDeletedTasks.id}========\n`,
  newAndDeletedTasks.deletedTask,
  `\n\n =====updated task list=====\n`,
  newAndDeletedTasks.tasks,
);

console.log("\n\n =====New Task Addition=====\n");
let taskToAdd: NewTask = {
  title: "build projects with TS 1",
  priority: "high",
  completed: false,
  dueDate: "15th Dec 2026",
};
let addNewTask = addTask(taskToAdd);
console.log(myTasks.sort((a, b) => a.id - b.id));
