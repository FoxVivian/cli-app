import { readTasks, writeTasks } from "../bin/utils.js";

export function updateTask(taskID, newTitle, newDescription) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === Number(taskID));

  if (taskIndex === -1) {
    console.log("❌ Task not found!");
    return;
  }

  if (newTitle) {
    tasks[taskIndex].title = newTitle;
  }
  if (newDescription) {
    tasks[taskIndex].description = newDescription;
  }

  tasks[taskIndex].updatedAt = new Date().toISOString();

  writeTasks(tasks);
  console.log("✅ Task updated successfully!");
}

export function updateStatus(taskID, newStatus) {
  const validStatuses = ["pending", "in-progress", "completed"];
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === Number(taskID));

  if (taskIndex === -1) {
    console.log("❌ Task not found!");
    return;
  }
  if (!validStatuses.includes(newStatus)) {
    console.log(`❗ Invalid status. Valid statuses are: ${validStatuses.join(", ")}`);
    return;
  }

  tasks[taskIndex].status = newStatus;
  tasks[taskIndex].updatedAt = new Date().toISOString();

  writeTasks(tasks);
  console.log("✅ Task status updated successfully!");
}
