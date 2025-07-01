import readline from "readline-sync";
import { readTasks, writeTasks } from "../bin/utils.js";

export function removeTask(taskID) {
  let tasks = readTasks();

  const filteredTasks = tasks.filter((task) => task.id !== Number(taskID));
  if (filteredTasks.length === tasks.length) {
    console.log("Task not found!");
  } else {
    tasks = filteredTasks;
    writeTasks(tasks);
    console.log("Task removed successfully!");
  }
}
