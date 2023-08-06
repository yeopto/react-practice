import { useEffect, useState } from 'react';
import Todos from './components/Todos';

export type Todo = {
  id: number;
  todo: string;
};

const fetchName = async (): Promise<string> => {
  const response = await fetch('/name');

  return response.json();
};

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch('/todos');

  return response.json();
};

export const fetchAll = async () => {
  return Promise.all([fetchName(), fetchTodos()]).then(([name, todos]) => ({ name, todos }));
};

const App = () => {
  const [name, setName] = useState<string | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchAll().then(data => {
      setName(data.name);
      setTodos(data.todos);
    });
  }, []);

  if (name === null) return <p>Fetching name...</p>;

  return (
    <div>
      <h2>Simple Todo</h2>
      <div>{name}</div>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
