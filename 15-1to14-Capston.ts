type Priority = "high" | "medium" | "low";
type Status = "completed" | "in process" | "yet to start";
interface Task {
  id: number;
  title: string;
  completed: boolean;
  deadLine: string;
  status: Status;
  priority: Priority;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

let tasks: Task[] = [
  {
    id: 1,
    title: "find dev job",
    completed: false,
    deadLine: "11th Jan 2026",
    status: "yet to start",
    priority: "high",
  },
  {
    id: 2,
    title: "learn TS",
    completed: false,
    deadLine: "30th Nov 2026",
    status: "in process",
    priority: "high",
  },
  {
    id: 3,
    title: "develop web app",
    completed: false,
    deadLine: "30th Dec 2026",
    status: "yet to start",
    priority: "medium",
  },
  {
    id: 4,
    title: "basic of TS",
    completed: true,
    deadLine: "10th Nov 2026",
    status: "completed",
    priority: "low",
  },
];
function getTasksByPriority(
  tasks: Task[],
  priority: Priority,
): { priority: Priority; tasks: Task[] } {
  // const filteredTasks = tasks.filter((task) => task.priority === priority);
  return {
    priority: priority,
    tasks: /**filteredTasks*/ tasks.filter(
      (task) => task.priority === priority,
    ),
  };
}

let taskFoundByPriority = getTasksByPriority(tasks, "high");
console.log(
  `\n\n=====The tasks by priority: ${taskFoundByPriority.priority}===== \n`,
  taskFoundByPriority.tasks,
);

function findTaskById(
  tasks: Task[],
  id: number,
): { task: Task | undefined; id: number } {
  const taskFound = tasks.find((task) => task.id === id);
  return {
    task: taskFound,
    id: id,
  };
}

let taskFoundById = findTaskById(tasks, 4);
console.log(
  `\n\n=====The task for id: ${taskFoundById.id}=====\n`,
  taskFoundById?.task ?? `Task not found for id: ${taskFoundById.id}`,
);

function getTaskTitle(task: Task | undefined): {
  title: string | undefined;
  id: number | undefined;
} {
  return {
    title: task?.title,
    id: task?.id,
  };
}

let taskTitleTaken = getTaskTitle(taskFoundById.task);

console.log(
  `\n\n=====The title for task number ${taskTitleTaken.id ?? taskFoundById.id}=====\n`,
  taskTitleTaken.title ?? `Task not found for id: ${taskFoundById.id}\n\n`,
);

function deleteTaskById(tasks: Task[], id: number) {
  const indexToDelete = tasks.findIndex((task) => task.id === id);
  let newTasks = tasks.splice(indexToDelete, 1);
  return { newTasks, tasks };
}

let newAndDeletedTasks = deleteTaskById(tasks, 1);
console.log(
  `\n\n ======Deleted Task======`,
  newAndDeletedTasks.newTasks,
  `\n =====updated task list=====\n`,
  newAndDeletedTasks.tasks,
);

console.log(tasks);

function addNewTask(task: Task): ApiResponse<Task> {
  tasks.push(task);
  return { success: true, message: "Task added successfully", data: task };
}

let addANewTask = addNewTask({
  id: 6,
  title: "abc",
  completed: true,
  deadLine: "string",
  status: "completed",
  priority: "high",
});

console.log(`after adding new task:`, tasks);
