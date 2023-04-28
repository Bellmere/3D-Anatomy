import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../../icons/logo.svg';

import './style.css';

export const Logo = () => {
  return (
    <div className="logo">
      <Link className='logo__link' to='/'>
        <LogoIcon className='logo__icon' />
      </Link>
    </div>
  );
};
