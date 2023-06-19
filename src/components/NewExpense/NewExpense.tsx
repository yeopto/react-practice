import { styled } from 'styled-components';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = () => {
  return (
    <Wrapper>
      <NewExpenseForm />
    </Wrapper>
  );
};

export default NewExpense;

const Wrapper = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
