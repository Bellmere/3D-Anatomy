import './style.css'
export default function BaseButton({ disabled = false, handlerClick, children }) {
  return  (
    <button disabled={disabled} onClick={handlerClick} className="button-9">{children}</button>
  )
}
