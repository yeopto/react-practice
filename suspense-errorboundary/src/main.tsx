import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './mocks/worker';

const main = async () => {
  await worker.start();
  const { default: App } = await import('./App');
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

main();
