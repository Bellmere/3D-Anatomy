import { Link } from 'react-router-dom';
import './logo.css';

export const Logo = () => {
  return (
    <div className="logo">
      <Link className='logo__link' to='/'>
        {' '}
        3D
        <span>Anatomy</span>
      </Link>
    </div>
  );
};
