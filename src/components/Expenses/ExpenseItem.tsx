import styled from 'styled-components';
import ExpenseDateBox from './ExpenseDateBox';
import type { Expense } from '../../types';

const ExpenseItem = ({ title, amount, date }: Omit<Expense, 'id'>) => {
  return (
    <Wrapper>
      <ExpenseDateBox date={date} />
      <ExpenseDescription>
        <Title>{title}</Title>
        <ExpensePrice>${amount}</ExpensePrice>
      </ExpenseDescription>
    </Wrapper>
  );
};

export default ExpenseItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;

  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const ExpenseDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`;

const Title = styled.h2`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;

  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`;

const ExpensePrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;
