import { useState, useEffect, useRef } from 'react';
import { Container } from 'components/styled/container/container';
import { AuthNav } from 'components/header/AuthNav/AuthNav';
import { UserMenu } from 'components/header/userMenu/userMenu';
import { Logo } from 'components/logo/logo';
import { observer } from 'mobx-react-lite';
import { StoreContext, useContext} from '../../../context';

import { ReactComponent as MobileMenuIcon } from '../../../icons/mobile-menu.svg';
import { ReactComponent as MobileMenuIconCross } from '../../../icons/mobile-menu-cross.svg';

import './style.css';
import { useProSidebar } from 'react-pro-sidebar';

export const AppBar = observer(() => {
  const { authUser } = useContext(StoreContext);
  const { collapseSidebar, collapsed } = useProSidebar();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (showMobileMenu && mobileMenuRef.current) {
      const mobileMenuHeight = mobileMenuRef.current.scrollHeight;
      mobileMenuRef.current.style.height = `${mobileMenuHeight}px`;
    } else if (mobileMenuRef.current) {
      mobileMenuRef.current.style.height = '0';
    }
  }, [showMobileMenu]);

  function handleToggleMobileMenu() {
    setIsAnimating(true);
    setTimeout(() => {
      collapseSidebar(!collapsed);
      setIsAnimating(false);
    }, 300);
  }

  useEffect(() => {
    setShowMobileMenu(!collapsed)
  }, [collapsed])

  return (
    <header className="header">
      <Container>
        <div className="nav--wrapper">
        <div className="mobile__menu--wrapper">
            <button
              className={`mobile__menu__btn ${
                isAnimating ? 'is-animating' : ''
              }`}
              onClick={handleToggleMobileMenu}
            >
              {showMobileMenu ? (
                <MobileMenuIconCross className="mobile__menu__icon" />
              ) : (
                <MobileMenuIcon className="mobile__menu__icon" />
              )}
            </button>
          </div>
          <Logo />
            {authUser.isAuth ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
});
