import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';

import { MainButton } from 'components/mainButton/mainButton';
import { register } from 'redux/auth/operations';

import './registerForm.css';

const nameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
    console.log(input.value);
    setActive(false);
    if (input.value) {
      setActive(true);
    }
  };

  return (
    <div className="auth--wrapper">
      <div className="auth_form--wrap">
        <h2 className="auth__form__title">Register</h2>
        <form className="auth__form" onSubmit={handleSubmit} autoComplete="off">
          <div className="auth__item">
            <label
              htmlFor={nameInputId}
              className={`auth__label ${nameActive ? 'auth__active' : ''}`}
              onFocus={e => handleFocus(e, setNameActive)}
              onBlur={e => handleBlur(e, setNameActive)}
            >
              Full name
              <span className="auth_require">*</span>
            </label>
            <input
              ref={nameInputRef}
              id={nameInputId}
              className="auth__input"
              type="text"
              name="name"
              onFocus={e => handleFocus(e, setNameActive)}
              onBlur={e => handleBlur(e, setNameActive)}
            />
          </div>
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
          <MainButton>Register</MainButton>
        </form>
      </div>
    </div>
  );
};
