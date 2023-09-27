import { Todo } from '../models/todo.models';
import TodoLocalRepository from '../repository/todoLocal.repository';

export default class TodoLocalService {
  private todoLocalRepository: TodoLocalRepository;

  constructor(todoLocalRepository: TodoLocalRepository) {
    this.todoLocalRepository = todoLocalRepository;
  }

  public createTodoLocal(todoInfo: Todo) {
    if (todoInfo) {
      this.todoLocalRepository.createTodoLocal(todoInfo);
    }
  }

  public deleteTodoLocal(taskId: string) {
    this.todoLocalRepository.deleteTodoLocal(taskId);
  }

  public updateTodoLocal(todoTask: Todo) {
    this.todoLocalRepository.updateTodoLocal(todoTask);
  }

  public getTasks(): Todo[] {
    return this.todoLocalRepository.getTasks() ?? [];
  }
}
