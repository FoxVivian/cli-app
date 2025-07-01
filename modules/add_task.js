import readline from 'readline-sync';
import { readTasks, writeTasks } from '../bin/utils.js';

export function addTask(title, description) {
    const tasks = readTasks();
    const newTask = {
        id: Date.now(),
        title,
        description,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }


tasks.push(newTask);
writeTasks(tasks);
console.log('Task added successfully!');
}