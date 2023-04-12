import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/forms/login/loginForm';

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
