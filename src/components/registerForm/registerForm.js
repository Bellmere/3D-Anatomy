import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { MainButton } from 'components/mainButton/mainButton';
import { register } from 'redux/auth/operations';

import './registerForm.css';

const nameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();
const passwordConfirmInputId = nanoid();

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [passwordConfirmActive, setPasswordConfirmActive] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordConfirmInputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, password_confirm } = e.target.elements;
    const errors = validateForm({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirm: password_confirm.value,
    });
    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).join('\n');
      return toast.error(errorMessages);
    }
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
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

  const validateForm = ({ name, email, password, password_confirm }) => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
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
    if (!password_confirm) {
      errors.password_confirm = 'Password confirmation is required';
    } else if (password_confirm !== password) {
      errors.password_confirm = 'Passwords do not match';
    }
    return errors;
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
          <div className="auth__item">
            <label
              htmlFor={passwordConfirmInputId}
              className={`auth__label ${
                passwordConfirmActive ? 'auth__active' : ''
              }`}
              onFocus={e => handleFocus(e, setPasswordConfirmActive)}
              onBlur={e => handleBlur(e, setPasswordConfirmActive)}
            >
              Confirm Password
              <span className="auth_require">*</span>
            </label>
            <input
              ref={passwordConfirmInputRef}
              id={passwordConfirmInputId}
              className="auth__input"
              type="password"
              name="password_confirm"
              onFocus={e => handleFocus(e, setPasswordConfirmActive)}
              onBlur={e => handleBlur(e, setPasswordConfirmActive)}
            />
          </div>
          <MainButton>Register</MainButton>
        </form>
      </div>
    </div>
  );
};
