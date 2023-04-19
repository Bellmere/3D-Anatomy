import { nanoid } from 'nanoid';

export default function BaseInput({ name, label = '', type = 'text', isRequired }) {
  const id = nanoid();
  return (
    <>
     <input
        id={id}
        className='auth__input'
        type={type}
        name={name}
      />
      <label
        htmlFor={id}
        className="auth__label"
      >
        {label}
        {isRequired ? <span className='auth_require'>*</span> : null }
      </label>
    </>
  )
}
