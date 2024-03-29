import Navigation from './Navigation';
import classes from './MainHeader.module.css';

interface MainHeaderProps {
  onLogout: () => void;
}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
