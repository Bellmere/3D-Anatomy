import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import listHeaderMenu from 'constans/routes/listHeaderMenu';
import './navigation.css';

export const Navigation = () => {
  const { user } = useAuth();
  const menuList = listHeaderMenu.filter(route => route.handlePermission(user));
  return (
    <nav className="main__nav">
      {menuList.map(item => (
        <NavLink className="nav__link" key={item.path} to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
