import { NavLink } from 'react-router-dom';
import './navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className="nav__link" to="/">
        Home
      </NavLink>
    </nav>
  );
};
