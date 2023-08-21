import fetchData from '../api/fetchData';

const resource = fetchData<string>('/name');

const UserName = () => {
  const name = resource.read();
  return <div>{name}</div>;
};

export default UserName;
