import { useState, useEffect, useRef } from 'react';
import { Container } from 'components/styled/container/container';
import { Navigation } from 'components/header/navigation/navigation';
import { AuthNav } from 'components/header/AuthNav/AuthNav';
import { UserMenu } from 'components/header/userMenu/userMenu';
import { Logo } from 'components/logo/logo';
import { observer } from 'mobx-react-lite';
import { StoreContext, useContext} from '../../../context';

import { ReactComponent as MobileMenuIcon } from '../../../icons/mobile-menu.svg';
import { ReactComponent as MobileMenuIconCross } from '../../../icons/mobile-menu-cross.svg';

import './appBar.css';

export const AppBar = observer(() => {
  const { authUser } = useContext(StoreContext);
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
      setShowMobileMenu(!showMobileMenu);
      setIsAnimating(false);
    }, 300);
  }

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
      {showMobileMenu && (
        <div className="mobile__menu" ref={mobileMenuRef}>
          <Container>
            <div className='mobile__menu--wrap'>
              <Navigation />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
});
