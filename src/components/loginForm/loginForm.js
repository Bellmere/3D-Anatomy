import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { MainButton } from 'components/mainButton/mainButton';

import './loginForm.css';

const emailInputId = nanoid();
const passwordInputId = nanoid();

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
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
};
