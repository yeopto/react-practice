import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import { createPortal } from 'react-dom';

const ErrorModal = ({
  title,
  message,
  onConfirm,
}: {
  title: string;
  message: string;
  onConfirm: () => void;
}) => {
  const BackDrop = ({ onConfirm }: { onConfirm: () => void }) => {
    return <div className={classes.backdrop} onClick={onConfirm} />;
  };

  const ModalOverlay = ({
    title,
    message,
    onConfirm,
  }: {
    title: string;
    message: string;
    onConfirm: () => void;
  }) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement,
      )}
      {createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm}></ModalOverlay>,
        document.getElementById('overlay-root') as HTMLElement,
      )}
    </>
  );
};

export default ErrorModal;
