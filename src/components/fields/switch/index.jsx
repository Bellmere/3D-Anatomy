import './style.css';

export default function Switch({ onSwitch, checked, children, disabled }) {
  return (
    <div className="switch_wrapper">
      <label className='switch'>
        <input type='checkbox' className="switch_input" disabled={disabled} onChange={(e) => onSwitch(!checked)} checked={checked} />
        <span className='slider round'></span>
      </label>
      <span className="switch_label">{children}</span>
    </div>
  );
}
