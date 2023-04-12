import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { observer } from "mobx-react-lite"

import { StoreContext, useContext } from '../../../context';
import { MainButton } from 'components/buttons/main/mainButton';

import './loginForm.css';
import ErrorCode from '../../../constans/error-code';

const emailInputId = nanoid();
const passwordInputId = nanoid();

export const LoginForm = observer(() => {

  const { authUser } = useContext(StoreContext);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const errors = validateForm({
      email: email.value,
      password: password.value,
    });
    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).join('\n');
      return toast.error(errorMessages);
    }
    try {
      const res = await authUser.logIn(email.value, password.value);
      if(!res.success) throw new Error(res.errorCode)
    } catch (error) {
      toast.error(ErrorCode[error.message])
    }
  };

  const handleFocus = (e, setActive) => {
    setActive(true);
  };

  const handleBlur = (e, setActive) => {
    const input = e.currentTarget;
    setActive(false);
    if (input.value) {
      setActive(true);
    }
  };

  const validateForm = ({ email, password }) => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
  };

  return (
    <div className="auth--wrapper">
      <div className="auth_form--wrap">
        <h2 className="auth__form__title">Sing In</h2>
        <form className="auth__form" onSubmit={handleSubmit} autoComplete="off">
          <div className="auth__item">
            <label
              ref={emailInputRef}
              htmlFor={emailInputId}
              className={`auth__label ${emailActive ? 'auth__active' : ''}`}
              onFocus={e => handleFocus(e, setEmailActive)}
              onBlur={e => handleBlur(e, setEmailActive)}
            >
              Email Address
              <span className="auth_require">*</span>
            </label>
            <input
              ref={emailInputRef}
              id={emailInputId}
              className="auth__input"
              type="email"
              name="email"
              onFocus={e => handleFocus(e, setEmailActive)}
              onBlur={e => handleBlur(e, setEmailActive)}
            />
          </div>
          <div className="auth__item">
            <label
              htmlFor={passwordInputId}
              className={`auth__label ${passwordActive ? 'auth__active' : ''}`}
              onFocus={e => handleFocus(e, setPasswordActive)}
              onBlur={e => handleBlur(e, setPasswordActive)}
            >
              Password
              <span className="auth_require">*</span>
            </label>
            <input
              ref={passwordInputRef}
              id={passwordInputId}
              className="auth__input"
              type="password"
              name="password"
              onFocus={e => handleFocus(e, setPasswordActive)}
              onBlur={e => handleBlur(e, setPasswordActive)}
            />
          </div>
          <MainButton>Sing In</MainButton>
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
