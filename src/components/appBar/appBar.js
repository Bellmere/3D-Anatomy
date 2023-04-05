import { Container } from 'components/container/container';
import { Navigation } from 'components/navigation/navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/userMenu/userMenu';
import { useAuth } from 'hooks';

import './appBar.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className="header">
      <Container>
        <div className="nav--wrapper">
          <Navigation />
          {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </div>
      </Container>
    </header>
  );
};
