import { Todo } from '../App';
import fetchData from '../api/fetchData';

export type Props = {
  todos: Todo[];
};

const resource = fetchData<Todo[]>('/todos');

const Todos = () => {
  const todos = resource.read();

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};

export default Todos;
