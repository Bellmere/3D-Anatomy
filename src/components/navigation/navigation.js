import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import './navigation.css';

export const Navigation = () => {
  return (
    <nav className='main__nav'>
      <NavLink className="nav__link" to="/">
        Home
      </NavLink>
      <NavLink className="nav__link" to="*">About Us</NavLink>
    </nav>
  );
};
