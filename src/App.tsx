import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { expenses } from './mock/data';
import { ResetStyle } from './styles/reset';

const App = () => {
  return (
    <>
      <ResetStyle />
      <NewExpense />
      <Expenses item={expenses} />
    </>
  );
};

export default App;
