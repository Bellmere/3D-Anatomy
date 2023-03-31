import { Container } from 'components/container/container';
import { Navigation } from 'components/navigation/navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import './appBar.css';

export const AppBar = () => {
  return (
    <header className="header">
      <Container>
        <Navigation />
        <AuthNav />
      </Container>
    </header>
  );
};
