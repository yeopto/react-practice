import wrapPromise from './wrapPromise';

const fetchData = <T>(url: string) => {
  const promise: Promise<T> = fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());

  return wrapPromise<T>(promise);
};

export default fetchData;
