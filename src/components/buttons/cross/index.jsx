import './style.css';
export default function ButtonCross({ onClose }) {
  return (
    <button type='button' className='btn-close' onClick={onClose}>
      <span className='icon-cross'></span>
      <span className='visually-hidden'></span>
    </button>
  );
}
