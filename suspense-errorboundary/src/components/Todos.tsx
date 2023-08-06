import { Todo } from '../App';

export type Props = {
  todos: Todo[];
};

const Todos = ({ todos }: Props) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};

export default Todos;
