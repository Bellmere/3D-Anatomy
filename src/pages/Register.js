import { Helmet, HelmetProvider } from "react-helmet-async";
import { RegisterForm } from "components/registerForm/registerForm";

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