import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import './registerForm.css';

const nameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

export const RegisterForm = () => {
  return (
    <div className="register--wrapper">
      <div className="register_form--wrap">
        <h2 className="register__form__title">Register</h2>
        <form className="register__form" autoComplete='off'>
          <div className="register__item">
            <label htmlFor={nameInputId} className="register__label">
              Full name
            </label>
            <input
              id={nameInputId}
              className="register__input"
              type="text"
              name="name"
            />
          </div>
          <div className="register__item">
            <label htmlFor={emailInputId} className="register__label">
              Email Address
            </label>
            <input
              id={emailInputId}
              className="register__input"
              type="email"
              name="email"
            />
          </div>
          <div className="register__item">
            <label htmlFor={passwordInputId} className="register__label">
              Password
            </label>
            <input
              id={passwordInputId}
              className="register__input"
              type="password"
              name="password"
            />
          </div>
          <button className="register__button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
