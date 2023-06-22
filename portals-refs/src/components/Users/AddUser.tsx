import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import { FormEvent, useRef, useState } from 'react';

const AddUser = ({ onAddUser }: { onAddUser: (uName?: string, uAge?: string) => void }) => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const userAgeRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<null | Error>(null);

  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userName = userNameRef.current?.value;
    const userAge = userAgeRef.current?.value;

    if (userName?.trim().length === 0 || userAge?.trim().length === 0) {
      setError({
        name: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (userAge && +userAge < 1) {
      setError({
        name: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    onAddUser(userName, userAge);

    if (userNameRef.current !== null) {
      userNameRef.current.value = '';
    }

    if (userAgeRef.current !== null) {
      userAgeRef.current.value = '';
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.name} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={userNameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={userAgeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
