
import styled from 'styled-components';
import type { Expense } from '../../types';

const ExpenseDate = ({ date }: Pick<Expense, 'date'>) => {
  return (
    <ExpenseDateWrapper>
      <Month>{date.toLocaleString('en-US', { month: 'long' })}</Month>
      <Year>{date.toLocaleString('en-US', { day: '2-digit' })}</Year>
      <Day>{date.getFullYear()}</Day>
    </ExpenseDateWrapper>
  );
};

export default ExpenseDate;

const ExpenseDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
`;

const Month = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

const Year = styled.div`
  font-size: 0.75rem;
`;

const Day = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
