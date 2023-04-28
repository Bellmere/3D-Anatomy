import { Container } from 'components/styled/container/container';
import './style.css';

function NotFound() {
  return (
    <Container>
      <div className='notFound--wrapper'>
        <h1 className="notFound">404 Page not found</h1>
      </div>
    </Container>
  );
}

export default NotFound;
