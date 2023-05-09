import './style.css';

export default function InputLabel({
                                     type = 'text',
                                     placeholder,
                                     defaultValue = null,
                                     label,
                                     handlerChange = () => {
                                     },
                                     labelWidth = 'auto',
                                     active,
                                     value,
                                     max = 1000,
                                     rows = 1,
                                     cols = 50,
                                     style = {},
                                     error = false,
                                   }) {


  const attr = defaultValue === null ? { value } : { defaultValue };
  return (
    <div className={`form-group ${active ? 'active' : ''}`} style={style}>
      {type === 'textarea' ?
        <textarea
          className='form-field'
          type={type}
          {...attr}
          maxLength={max}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          onChange={({ target }) => handlerChange(target.value)} />
        :
        <input
          className='form-field'
          type={type}
          {...attr}
          placeholder={placeholder}
          onChange={({ target }) => handlerChange(target.value)}
        />
      }
      <span style={{ width: labelWidth }} className={`${error ? 'error' : ''}`}>{label}</span>
    </div>
  );
}
