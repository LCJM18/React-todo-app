import Status from './status.models';

interface Todo {
  status: Status;
  name: string;
  id: number;
}

export type { Todo };
