import Layout from './components/Layout/Layout';
import InputAdd from './components/UI/InputAdd/InputAdd';
import TaskInfo from './components/UI/TaskInfo/TaskInfo';
import getRandomColor from './components/UI/TaskInfo/utils/TaskInfo.utils';
import { Todo } from './models/todo.models';
import TodoLocalRepository from './repository/todoLocal.repository';
import TodoLocalService from './service/todoLocal.service';
import { v4 as uuid } from 'uuid';

const App: React.FC = () => {
  const todo = new TodoLocalService(new TodoLocalRepository());
  const todos = todo.getTasks();

  const handleAddTodo = (value: string) => {
    if (value !== '') {
      const todoObject: Todo = {
        name: value,
        id: uuid(),
        backgroundColor: getRandomColor(),
      };
      todo.createTodoLocal(todoObject);
    }
  };

  return (
    <Layout>
      <section className="w-full max-w-[1000px] h-full flex flex-col items-center justify-center">
        <h1 className=" text-[30px] xl:text-[50px] text-white">
          ¿Cúal es el plan para hoy?{' '}
        </h1>
        <div className="mt-5 xl:w-[60%] relative">
          <InputAdd handleClick={handleAddTodo} />
          <div className="mt-6 w-full max-h-[250px] overflow-auto gap-[3px] flex  flex-col ">
            {todos.length > 0 ? (
              todos.map((item) => (
                <TaskInfo
                  key={item.id}
                  backgroundColor={item.backgroundColor}
                  name={item.name}
                  id={item.id}
                />
              ))
            ) : (
              <p className="text-white text-center text-lg">
                {' '}
                No existen tareas por hacer{' '}
              </p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
