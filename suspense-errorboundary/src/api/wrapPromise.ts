const wrapPromise = <T>(promise: Promise<T>) => {
  let status: 'pending' | 'error' | 'success' = 'pending';
  let response: T | Error;

  const suspender = promise.then(
    (res: T) => {
      status = 'success';
      response = res;
    },
    (err: Error)  => {
      status = 'error';
      response = err;
    },
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response as T;
    }
  };
  return { read };
};

export default wrapPromise;
