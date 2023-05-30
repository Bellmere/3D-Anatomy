import { NavLink } from 'react-router-dom';
import './style.css';

export const AuthNav = () => {
  return (
    <div className="auth__nav--wrap">
      <NavLink className="auth__nav__link" to="/singin">
        Sign In
      </NavLink>
    </div>
  );
};
