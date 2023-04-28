import './style.css';

export default function InputButton({ disabled, label = '', handlerClick, handlerChange, placeholder }) {
  return (
    <label className='left_label_input'>
      <input type='email' className='form__field' placeholder={placeholder} onChange={( { target }) => handlerChange(target.value)} />
      <button disabled={disabled} type='button' className='btn btn--primary btn--inside' onClick={handlerClick}>{label}</button>
    </label>
  );
}
