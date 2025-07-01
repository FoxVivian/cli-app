#!/usr/bin/env node

import { addTask } from "../modules/add_task.js";
import { removeTask } from "../modules/remove_task.js";
import { listAllTask, listTaskByStatus } from "../modules/list_task.js";
import { updateTask, updateStatus } from "../modules/update_task.js";

const [, , command, ...args] = process.argv;
const introMessage = () => {
  console.log("Hello!");
  console.log("This is a beginner NodeJS project called `Tasks Tracker`.");
  console.log("It is a simple command line application that allows you to manage your tasks.");
  console.log("You can add, remove, and list tasks.");
  console.log("To get started, run `npm install` to install the dependencies.");
  console.log("Then, run `npm start` to start the application.");
  console.log("You can also run `npm test` to run the tests.");
  console.log("For more information, check the README.md file.");
  console.log("Thank you for using Tasks Tracker!");
  console.log("Have a great day!");
};

switch (command) {
  case "intro":
    introMessage();
    break;
  case "add":
    const [title, description] = args;
    if (!title || !description) {
      console.log("Please provide a title and description for the task.");
    } else {
      addTask(title, description);
    }
    break;
  case "update":
    const [updateID, newTitle, newDescription] = args;
    if (!updateID) {
      console.log("Please provide a task ID to update.");
    } else if (!newTitle && !newDescription) {
      console.log("Please provide a new title or description to update the task.");
    } else {
      updateTask(updateID, newTitle, newDescription);
    }
    break;
  case "remove":
    const [taskID] = args;
    if (!taskID) {
      console.log("Please provide a task ID to remove.");
    } else {
      removeTask(taskID);
    }
    break;
  case "list-all":
    listAllTask();
    break;
  case "list-status":
    const [status] = args;
    if (!status) {
      console.log("Please provide a status to filter tasks by (e.g., 'completed', 'pending').");
    } else {
      listTaskByStatus(status);
    }
    break;
  case "mark-done":
    const [doneID] = args;
    if (!doneID) {
      console.log("Please provide a task ID to mark as done.");
    } else {
      updateStatus(doneID, "completed");
      console.log("Task marked as done successfully!");
    }
    break;
  case "mark-pending":
    const [pendingID] = args;
    if (!pendingID) {
      console.log("Please provide a task ID to mark as pending.");
    } else {
      updateStatus(pendingID, "pending");
    }
    break;
  case "mark-in-progress":
    const [inProgressID] = args;
    if (!inProgressID) {
      console.log("Please provide a task ID to mark as in-progress.");
    } else {
      updateStatus(inProgressID, "in-progress");
      console.log("Task marked as in-progress successfully!");
    }
    break;
  default:
    console.log("Unknown command. Please use 'add', 'remove', 'list', or 'update'.");
    console.log("For help, run 'npm start' without any arguments.");
    break;
}
