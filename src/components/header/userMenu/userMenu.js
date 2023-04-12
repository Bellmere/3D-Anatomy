import { observer } from 'mobx-react-lite';
import { StoreContext, useContext} from '../../../context';
import './userMenu.css';

export const UserMenu = observer(() => {
  const { authUser } = useContext(StoreContext);
  return (
    <div className='logout--wrapper'>
      <p className='logout__username'>{authUser.email}</p>
      <button className='logout__button' type="button" onClick={authUser.signOut}>
        Logout
      </button>
    </div>
  );
});
