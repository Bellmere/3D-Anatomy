import { nanoid } from 'nanoid';
import { useState } from 'react';

const id = nanoid();
export default function BaseInput({ name, label = '', type = 'text', isRequired }) {
  const [active, setActive] = useState(false);
  const handleFocus = () => setActive(true);
  const handleBlur = ({ target }) => setActive(!!target.value.trim());
  return (
    <>
      <label
        htmlFor={id}
        className={`auth__label ${active ? 'auth__active' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {label}
        {isRequired ? <span className='auth_require'>*</span> : null }
      </label>
      <input
        id={id}
        className='auth__input'
        type={type}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </>
  )
}
