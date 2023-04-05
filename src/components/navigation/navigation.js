import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import './navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className="nav__link" to="/">
        3D Anatomy
      </NavLink>
    </nav>
  );
};
