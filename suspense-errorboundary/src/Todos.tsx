import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  todo: string;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    fetch('/todos')
      .then(response => response.json())
      .then(todos => setTodos(todos));
  }, []);

  if (todos === null) return <p>Fetching todos...</p>;

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};

export default Todos;
