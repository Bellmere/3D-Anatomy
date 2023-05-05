import CircleLoader from '../../circle-loader';
import './style.css'
export default function BaseButton({ disabled = false, handlerClick, children, loading = false, className = '' }) {
  return  (
    <button disabled={disabled} onClick={handlerClick} className={`base_button ${className}`}>
      {loading ? <CircleLoader /> : null }
      {children}
    </button>
  )
}
