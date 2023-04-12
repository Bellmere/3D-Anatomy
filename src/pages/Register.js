import { Helmet, HelmetProvider } from "react-helmet-async";
import { RegisterForm } from "components/forms/register/registerForm";

export default function Register() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>111</title>
            </Helmet>
            <RegisterForm />
        </HelmetProvider>
    );
};
