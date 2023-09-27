import { create } from 'zustand';
import { Todo } from '../models/todo.models';

interface TaskStore {
  tasks: Todo[];
  addTask: (newTask: Todo) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (task: Todo) => void;
}

const taskStore = create<TaskStore>((set) => ({
  tasks: [] as Todo[],
  addTask: (newTask: Todo) =>
    set((state) => ({ tasks: [...state.tasks, newTask] })),
  deleteTask: (taskId: string) =>
    set((state) => ({
      tasks: [...state.tasks.filter((item) => taskId !== item.id)],
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
