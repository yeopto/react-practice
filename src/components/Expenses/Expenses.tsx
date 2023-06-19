import type { Expense } from '../../types';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ item }: { item: Expense[] }) => {
  return (
    <Card>
      {item.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
