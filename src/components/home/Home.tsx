import {Link} from 'react-router-dom';
import classes from './Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link className={classes.link} to="/useState">
        useState
      </Link>
      <Link className={classes.link} to="/useEffect">
        useEffect
      </Link>
      <Link className={classes.link} to="/useRef">
        useRef
      </Link>
      <Link className={classes.link} to="/useContext">
        useContext
      </Link>
    </div>
  );
}
