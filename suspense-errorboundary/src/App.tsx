import { useEffect, useState } from 'react';
import Todos from './Todos';

const App = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    fetch('/name')
      .then(response => response.json())
      .then(name => setName(name));
  }, []);

  if (name === null) return <p>Fetching name...</p>;

  return (
    <div>
      <h2>Simple Todo</h2>
      <div>{name}</div>
      <Todos />
    </div>
  );
};

export default App;
