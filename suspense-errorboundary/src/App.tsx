import { Suspense } from 'react';
import Todos from './components/Todos';
import UserName from './components/UserName';

export type Todo = {
  id: number;
  todo: string;
};

const App = () => {
  return (
    <div>
      <h2>Simple Todo</h2>
      <Suspense fallback={<div>loading userName...</div>}>
        <UserName />
      </Suspense>

      <Suspense fallback={<div>loading Todos...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default App;
