import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { observer } from 'mobx-react-lite';

import { StoreContext, useContext } from '../../../context';
import { validationFormLogin } from '../../../helpers';
import BaseInput from 'components/fields/baseInput';
import BaseButton from '../../buttons/base';
import ErrorCode from '../../../constans/error-code';

import './style.css';

export const LoginForm = observer(() => {
  const { authUser } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const dataForm = Object.fromEntries(Array.from(new FormData(e.target)));
    const { email, password } = dataForm;
    const errors = validationFormLogin(dataForm);

    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).join('\n');
      return toast.error(errorMessages);
    }
    try {
      setLoading(true);
      const res = await authUser.logIn(email, password);
      if (!res.success) throw new Error(res.errorCode);
    } catch (error) {
      toast.error(ErrorCode[error.message]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth--wrapper">
      <div className="auth_form--wrap">
        <h2 className="auth__form__title">Sing In</h2>
        <form className="auth__form" onSubmit={handleSubmit} autoComplete="off">
          <div className="auth__item">
            <BaseInput name="email" type="email" label="Email" isRequired />
          </div>
          <div className="auth__item">
            <BaseInput
              name="password"
              type="password"
              label="Password"
              isRequired
            />
          </div>
          <BaseButton loading={loading}>Sign In</BaseButton>
          <div className="singin__link--wrap">
            <Link className="singIn__link" to="/singup">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
});
