import { styled } from 'styled-components';
import type { Expense } from '../../types';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ item }: { item: Expense[] }) => {
  return (
    <Wrapper>
      {item.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Wrapper>
  );
};

export default Expenses;

const Wrapper = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;
