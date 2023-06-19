import Expenses from './components/Expenses/Expenses';
import { expenses } from './mock/data';
import { ResetStyle } from './styles/reset';

const App = () => {
  return (
    <>
      <ResetStyle />
      <Expenses item={expenses} />
    </>
  );
};

export default App;
