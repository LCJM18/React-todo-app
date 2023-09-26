import Layout from './components/Layout/Layout';
import InputAdd from './components/UI/InputAdd/InputAdd';
import { Todo } from './models/todo.models';
import TodoLocalRepository from './repository/todoLocal.repository';
import TodoLocalService from './service/todoLocal.service';
import { v4 as uuid } from 'uuid';

const App: React.FC = () => {
  const todo = new TodoLocalService(new TodoLocalRepository());
  const todos = todo.getTasks();
  console.log(todos);

  const handleAddTodo = (value: string) => {
    if (value !== '') {
      const todoObject: Todo = {
        name: value,
        id: uuid(),
      };
      todo.createTodoLocal(todoObject);
    }
  };

  return (
    <Layout>
      <section className="w-full max-w-[1000px] h-full flex flex-col items-center justify-center">
        <h1 className="text-[50px] text-white">¿Cúal es el plan para hoy? </h1>
        <div className="mt-5 w-[60%]">
          <InputAdd handleClick={handleAddTodo} />
        </div>
        <div className="mt-6">
          {todos.length > 0 ? (
            todos.map((item) => <div> hola </div>)
          ) : (
            <p className="text-white text-lg"> No existen tareas por hacer </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default App;
