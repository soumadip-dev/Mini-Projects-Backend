import { readTask, writeTask } from '../utils/task.js';

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

// TODO: Implement task update logic
export const updateTask = (req, res) => {};

// TODO: Implement task delete logic
export const deleteTask = (req, res) => {};
