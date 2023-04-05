import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import './userMenu.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className='logout--wrapper'>
      <p className='logout__username'>{user.name}</p>
      <button className='logout__button' type="button" onClick={() => dispatch(logOut())}>
        logout
      </button>
    </div>
  );
};
