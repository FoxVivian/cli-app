import { readTasks } from '../bin/utils.js';
export function listAllTask() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("📭 No tasks available.");
    return;
  }

  console.log("📋 Tasks:");
  tasks.forEach((task) => {
    console.log(
      `ID: ${task.id}\nTitle: ${task.title}\nDescription: ${task.description}\nStatus: ${task.status}\nCreated At: ${task.createdAt}\nUpdated At: ${task.updatedAt}\n`
    );
  });
}
export function listTaskByStatus(commandStatus) {
  let status = none;
  switch (commandStatus) {
    case "todo":
      status = "pending";
      break;
    case "done":
      status = "completed";
      break;
    case "in-progress":
        status = "in-progress";
      break;
    default:
      console.log(`Invalid status: ${status}. Valid statuses are: pending, in-progress, completed.`);
      return;
  }
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const filteredTasks = tasks.filter((task) => task.status === status);
  if (filteredTasks.length === 0) {
    console.log(`No tasks found with status: ${status}`);
    return;
  } else {
    console.log(`Tasks with status "${status}":`);
    filteredTasks.forEach((task) => {
      console.log(
        `ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Status: ${task.status}, Created At: ${task.createdAt}, Updated At: ${task.updatedAt}`
      );
    });
  }
}
