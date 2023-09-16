import { Todo } from '../models/todo.models';
import taskStore from '../store/task.store';

export default class TodoLocalRepository {
  private taskStore = taskStore;
  constructor() {}

  public createTodoLocal(todoInfo: Todo) {
    const { addTask } = this.taskStore();
    addTask(todoInfo);
  }

  public deleteTodoLocal(todoTask: Todo) {
    const { deleteTask } = this.taskStore();
    deleteTask(todoTask);
  }

  public updateTodoLocal(todoTask: Todo) {
    const { updateTask } = this.taskStore();
    updateTask(todoTask);
  }
}
