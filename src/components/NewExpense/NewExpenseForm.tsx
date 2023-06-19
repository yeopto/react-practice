import { styled } from 'styled-components';

const NewExpenseForm = () => {
  return (
    <form>
      <ContentWrapper>
        <div>
          <Label>Title</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Amount</Label>
          <Input type="number" min="0.01" step="0.01" />
        </div>
        <div>
          <Label>Date</Label>
          <Input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </ContentWrapper>
      <ButtonWrapper>
        <Button type="submit">Add Expense</Button>
      </ButtonWrapper>
    </form>
  );
};

export default NewExpenseForm;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const ButtonWrapper = styled.div`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  &:active {
    background-color: #510674;
    border-color: #510674;
  }
`;
