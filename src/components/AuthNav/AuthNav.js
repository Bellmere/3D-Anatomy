import { NavLink } from 'react-router-dom';
import './AuthNav.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className='nav__link' to="/register">
        Sing Up
      </NavLink>
      <NavLink className='nav__link' to="/login">
        Sing In
      </NavLink>
    </div>
  );
};
