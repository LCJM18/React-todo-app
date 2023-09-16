import Status from './status.models';

interface Todo {
  status: Status;
  name: string;
  description: string;
  created_at: Date;
  id: number;
}

export type { Todo };
