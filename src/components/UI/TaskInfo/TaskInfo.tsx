import { Todo } from '../../../models/todo.models';
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillEdit,
} from 'react-icons/ai';
import TodoLocalService from '../../../service/todoLocal.service';
import TodoLocalRepository from '../../../repository/todoLocal.repository';
import React from 'react';

interface TaskInfoProps extends Todo {
  backgroundColor: { backgroundColor: string };
}

const TaskInfo: React.FC<TaskInfoProps> = ({ name, id, backgroundColor }) => {
  const todo = new TodoLocalService(new TodoLocalRepository());
  const [edit, setEdit] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>(name);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClickEdit = () => {
    setEdit(true);
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 200);
  };

  const onDelete = () => {
    if (edit) {
      setEdit(false);
    } else {
      todo.deleteTodoLocal(id);
    }
  };

  const onUpdate = () => {
    const newInfoTask: Todo = {
      name: value,
      id,
      backgroundColor,
    };
    todo.updateTodoLocal(newInfoTask);
    setEdit(false);
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      onUpdate();
    }
  };

  return (
    <div
      className="w-full flex items-center justify-between px-[24px] min-h-[50px]"
      style={backgroundColor}
      id={id}
    >
      {edit ? (
        <input
          value={value}
          ref={inputRef}
          onKeyDown={handleEnterKeyPress}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
          className="w-full border-2 rounded-sm bg-inherit text-black border-none  h-[50px] outline-none px-2"
        />
      ) : (
        <p className="text-xl w-full"> {name} </p>
      )}
      <div className="w-full flex gap-[12px] justify-end">
        <div className="cursor-pointer">
          {edit ? (
            <div onClick={onUpdate}>
              <AiFillCheckCircle size="1.3em" />
            </div>
          ) : (
            <div onClick={handleClickEdit}>
              <AiFillEdit size="1.3em" />
            </div>
          )}
        </div>
        <div className="cursor-pointer" onClick={onDelete}>
          <AiFillCloseCircle size="1.3em" />
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
