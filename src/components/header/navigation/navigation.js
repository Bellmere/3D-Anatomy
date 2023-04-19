import { NavLink } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import { StoreContext, useContext} from '../../../context';
import listHeaderMenu from 'constans/routes/listHeaderMenu';

import './navigation.css';

export const Navigation = observer(() => {
  const { authUser } = useContext(StoreContext);
  const menuList = listHeaderMenu.filter(route => route.handlePermission(authUser));
  return (
    <nav className="main__nav">
      {menuList.map(item => (
        <NavLink className="nav__link" key={item.path} to={item.getPath()}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
});
