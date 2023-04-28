import ArrowLeft from '../../../svg/arrow-left';
import ArrowRight from '../../../svg/arrow-right';

import './style.css'
export default function ArrowButton({ handlerClick, position = 'left', style }) {
  return (
    <button onClick={handlerClick} className="arrow_button" style={style} role="button">
      { position === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </button>
  )
}
