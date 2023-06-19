import styled from 'styled-components';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import type { Expense } from '../../types';

const ExpenseItem = ({ title, amount, date }: Omit<Expense, 'id'>) => {
  return (
    <Card>
      <ExpenseDate date={date} />
      <ExpenseDescription>
        <DescriptionHeader>{title}</DescriptionHeader>
        <ExpensePrice>${amount}</ExpensePrice>
      </ExpenseDescription>
    </Card>
  );
};

export default ExpenseItem;

const ExpenseDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  justify-content: flex-start;
  flex-flow: column-reverse;
  flex: 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`;

const DescriptionHeader = styled.h2`
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
