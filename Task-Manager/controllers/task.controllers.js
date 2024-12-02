import { readTask, writeTask } from '../utils/task.js';
import crypto from 'crypto';

// Controller to get all tasks for the logged-in user
export const getAllTasks = async (req, res) => {
  // Check if user is authenticated
  if (!req.session.user) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
    });
  }

  const tasks = await readTask();

  // Return only the tasks that belong to the current user
  res.status(200).json(tasks.filter(task => task.userName === req.session.user.userName));
};

// Controller to create a new task
export const createTask = async (req, res) => {
  const { title, description } = req.body;

  // Read existing tasks
  const tasks = await readTask();

  // Add new task with a unique ID and current user's username
  tasks.push({
    id: crypto.randomUUID(),
    title,
    description,
    userName: req.session.user.userName,
    complete: false,
  });

  // Save updated task list
  await writeTask(tasks);

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
  });
};

// Controller to update an existing task
export const updateTask = async (req, res) => {
  // Check if user is authenticated
  if (!req.session.user) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
    });
  }

  const { id } = req.params;
  const { title, description, complete } = req.body;

  // Read existing tasks
  const tasks = await readTask();

  // Check if the id is valid and the task belongs to the current user
  const taskToUpdate = tasks.find(
    task => task.id === id && task.userName === req.session.user.userName
  );
  if (!taskToUpdate) {
    return res.status(404).json({
      success: false,
      error: 'Task not found or does not belong to the current user',
    });
  }

  // Update the task with the new values if new value is provided
  if (title) taskToUpdate.title = title;
  if (description) taskToUpdate.description = description;
  if (complete !== undefined) taskToUpdate.complete = complete;

  // Save updated task list
  await writeTask(tasks);

  res.status(200).json({
    success: true,
    message: 'Task updated successfully',
  });
};

// Controller to delete a task
export const deleteTask = (req, res) => {};
