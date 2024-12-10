import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
