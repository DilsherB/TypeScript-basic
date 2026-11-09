// Exercise 9:
/** Imagine you are building a task management system for an enterprise app. We need:
A union type for TaskPriority ("low", "medium", "high").
An interface named Task containing:
id (number)
title (string)
priority (using TaskPriority)
completed (boolean)
dueDate (optional string)
A generic interface named ApiResponse<T> (similar to what we just practiced) with:
success (boolean)
data (of type T)
Your Ninth Exercise (Practical Problem)
Write the TypeScript code that defines:
The TaskPriority union type.
The Task interface.
The generic ApiResponse<T> interface.
An object named taskResponse typed as ApiResponse<Task[]> (an API response containing an array of tasks) with sample data.
 */
export type TaskPriority1 = "low" | "medium" | "high";

export interface Task {
  id: number;
  title: string;
  priority: TaskPriority1;
  completed: boolean;
  dueDate: string;
}

interface ApiResponse1<T> {
  success: boolean;
  data: T;
}

let taskResponse: ApiResponse1<Task[]> = {
  success: true,
  data: [
    {
      id: 1,
      title: "website",
      priority: "medium",
      completed: true,
      dueDate: "15th Nov 26",
    },
  ],
};
