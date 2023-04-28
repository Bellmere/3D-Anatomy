import CircleLoader from '../../circle-loader';
import './style.css'
export default function BaseButton({ disabled = false, handlerClick, children, loading = false }) {
  return  (
    <button disabled={disabled} onClick={handlerClick} className="base_button">
      {loading ? <CircleLoader /> : null }
      {children}
    </button>
  )
}
