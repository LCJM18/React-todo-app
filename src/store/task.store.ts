import { create } from 'zustand';
import { Todo } from '../models/todo.models';

interface TaskStore {
  tasks: Todo[];
  addTask: (newTask: Todo) => void;
  deleteTask: (task: Todo) => void;
  updateTask: (task: Todo) => void;
}

const taskStore = create<TaskStore>((set) => ({
  tasks: [] as Todo[],
  addTask: (newTask: Todo) =>
    set((state) => ({ tasks: [...state.tasks, newTask] })),
  deleteTask: (task: Todo) =>
    set((state) => ({
      tasks: [...state.tasks.filter((item) => task.id !== item.id)],
    })),
  updateTask: (task: Todo) =>
    set((state) => ({
      tasks: [
        ...state.tasks.map((item) =>
          task.id === item.id ? { ...task } : { ...item }
        ),
      ],
    })),
}));

export default taskStore;
