import fs from 'fs'; // For file system operations (read/write)
import path from 'path'; // For resolving file paths
import { fileURLToPath } from 'url'; // Convert import.meta.url to a local file path

// Get the current file and directory names
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the JSON file storing tasks
const filePath = path.join(__dirname, '../data/tasks.json');

// Function to read tasks from the file
export const readTask = () => {
  try {
    ensureFileExists(); // Make sure the file exists before reading
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]'); // Return parsed tasks or empty array
  } catch (error) {
    console.error('Failed to read tasks', error);
    return [];
  }
};

// Function to write tasks to the file
export const writeTask = tasks => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to write tasks', error);
  }
};

// Function to delete a task by ID
export const deleteTaskById = taskId => {
  try {
    const tasks = readTask();
    const updatedTasksAfterDelete = tasks.filter(task => task.id !== taskId);
    writeTask(updatedTasksAfterDelete);
    return updatedTasksAfterDelete;
  } catch (error) {
    console.error('Failed to delete task', error);
    return [];
  }
};

// Function to update a task by ID
export const updateTaskById = (taskId, updatedFields) => {
  try {
    ensureFileExists();
    const tasks = readTask();
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updatedFields };
      }
      return task;
    });
    writeTask(updatedTasks);
    return updatedTasks;
  } catch (error) {
    console.error('Failed to update task', error);
    return [];
  }
};

// Ensure the tasks file exists; create it if not
const ensureFileExists = () => {
  try {
    if (!fs.existsSync(filePath)) {
      // Create the directory if it doesn't exist
      fs.mkdirSync(path.dirname(filePath), { recursive: true });

      // Create an empty array in the tasks file
      fs.writeFileSync(filePath, '[]', 'utf-8');
    }
  } catch (error) {
    console.error('Failed to ensure file exists', error);
  }
};
