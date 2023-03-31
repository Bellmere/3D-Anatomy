import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import './registerForm.css';

const nameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

export const RegisterForm = () => {
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
  }

  const handleFocus = (e, setActive) => {
    setActive(true);
  };

  const handleBlur = setActive => {
    setActive(false);
  };

  return (
    <div className="auth--wrapper">
      <div className="auth_form--wrap">
        <h2 className="auth__form__title">Register</h2>
        <form className="auth__form" autoComplete="off">
          <div className="auth__item">
            <label
              htmlFor={nameInputId}
              className={`auth__label ${nameActive ? 'auth__active' : ''}`}
              onFocus={e => handleFocus(e, setNameActive)}
              onBlur={() => handleBlur(setNameActive)}
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
              onBlur={() => handleBlur(setNameActive)}
            />
          </div>
          <div className="auth__item">
            <label
              ref={emailInputRef}
              htmlFor={emailInputId}
              className={`auth__label ${emailActive ? 'auth__active' : ''}`}
              onFocus={e => handleFocus(e, setEmailActive)}
              onBlur={() => handleBlur(setEmailActive)}
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
              onBlur={() => handleBlur(setEmailActive)}
            />
          </div>
          <div className="auth__item">
            <label
              htmlFor={passwordInputId}
              className={`auth__label ${passwordActive ? 'auth__active' : ''}`}
              onFocus={e => handleFocus(e, setPasswordActive)}
              onBlur={() => handleBlur(setPasswordActive)}
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
              onBlur={() => handleBlur(setPasswordActive)}
            />
          </div>
          <button className="auth__button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
