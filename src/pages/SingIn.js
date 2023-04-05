import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/loginForm/loginForm';

export default function SingIn() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Sing In</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}
