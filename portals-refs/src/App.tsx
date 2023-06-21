import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { User } from './types/Users';

const App = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUserHandler = (uName: string, uAge: string) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
