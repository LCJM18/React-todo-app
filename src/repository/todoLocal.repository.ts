import { Todo } from '../models/todo.models';
import taskStore from '../store/task.store';

export default class TaskRepository {
  private store;

  constructor() {
    this.store = taskStore();
  }

  // Los parámetros y el tipo de retorno de estas funciones están tipados correctamente
  createTodoLocal(newTask: Todo) {
    if (newTask) {
      this.store.addTask(newTask);
    }
  }

  deleteTodoLocal(id: string) {
    this.store.deleteTask(id);
  }

  updateTodoLocal(task: Todo) {
    this.store.updateTask(task);
  }

  // El tipo de retorno está tipado como un array de Todo
  getTasks(): Todo[] {
    return this.store.tasks;
  }
}
