import './style.css';

export default function InputLabel({
   type = 'text',
   placeholder,
   label,
   handlerChange,
   labelWidth = 'auto',
   active,
   value,
 }) {
  return (
    <div className={`form-group ${active ? 'active' : ''}`}>
      <input
        className='form-field'
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => handlerChange(target.value)}
      />
      <span style={{ width: labelWidth }}>{label}</span>
    </div>
  );
}
