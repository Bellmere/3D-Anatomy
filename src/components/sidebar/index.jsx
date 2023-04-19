import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { ALLNOTES } from '../../constans/routes/routes';
import { useLocation } from 'react-router-dom';
import './style.css';


import CATEGORIES from '../../constans/structure';
import { useEffect } from 'react';

export default function SideBar() {
  const { collapseSidebar } = useProSidebar();

  const location = useLocation();
  useEffect(() => {
    console.log('location');
    collapseSidebar(true);
  }, [location.pathname, collapseSidebar]);
  const regions = CATEGORIES.REGION;
  return (
    <div className='sidebar'>
      <Sidebar defaultCollapsed={true} defaultOpen={false} collapsedWidth={'0'}>
        <Menu closeOnClick={false}>
          <SubMenu label='Notes' component='div'>
            <MenuItem className='sub-menu' component='div'>
              <NavLink to={'/notes'}>All Notes</NavLink>
            </MenuItem>
            {Object.keys(regions).map(key => (
              <MenuItem className='sub-menu' component='div' key={key}>
                <NavLink to={ALLNOTES.getPath(key)}>{regions[key]}</NavLink>
              </MenuItem>
            ))}
          </SubMenu>
          <MenuItem component='div'>Create</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
