import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { ALLNOTES, CREATE_MODEL } from '../../constans/routes/routes';
import { useLocation } from 'react-router-dom';
import './style.css';


import CATEGORIES from '../../constans/structure';
import { useEffect } from 'react';

export default function SideBar() {

  const { collapseSidebar, collapsed } = useProSidebar();
  const location = useLocation();

  const refId = 'sidebarId';

  useEffect(() => {
    collapseSidebar(true);
  }, [location.pathname, collapseSidebar]);



  const regions = CATEGORIES.REGION;
  return (
    <div className='sidebar' id={refId}>
      <div className={`sidebar_bg ${collapsed === false ? 'active' : ''}`} onClick={() => collapseSidebar(true)}></div>
      <Sidebar defaultCollapsed={true} defaultOpen={false} collapsedWidth={'0'}>
        <Menu closeOnClick={false}>
          <MenuItem className='sub-menu' component='div'>
            <NavLink to={CREATE_MODEL.path} end>{CREATE_MODEL.label}</NavLink>
          </MenuItem>
          <SubMenu label='Notes' component='div'>
            <MenuItem className='sub-menu' component='div'>
              <NavLink to={'/notes'} end>All Notes</NavLink>
            </MenuItem>
            {Object.keys(regions).map(key => (
              <MenuItem className='sub-menu' component='div' key={key}>
                <NavLink to={ALLNOTES.getPath(key)}>{regions[key]}</NavLink>
              </MenuItem>
            ))}
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
