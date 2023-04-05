import { NavLink } from 'react-router-dom';
import './AuthNav.css';

export const AuthNav = () => {
  return (
    <div className='auth__nav--wrap'>
      {/* <NavLink className='auth__nav__link' to="/singup">
        Sing Up
      </NavLink> */}
      <NavLink className='auth__nav__link' to="/singin">
        Sing In
      </NavLink>
    </div>
  );
};
