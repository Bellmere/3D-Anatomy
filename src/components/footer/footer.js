import { Container } from 'components/styled/container/container';
import { Logo } from 'components/logo/logo';
import './footer.css';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='footer--wrapper'>
                    <Logo />
                </div>
            </Container>
        </footer>
    )
}
