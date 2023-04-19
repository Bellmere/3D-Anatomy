import ArrowLeft from '../../../svg/arrow-left';
import ArrowRight from '../../../svg/arrow-right';

import './style.css'
export default function ArrowButton({ handlerClick, position = 'left', style }) {
  return (
    <div onClick={handlerClick} className="arrow_button" style={style}>
      { position === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </div>
  )
}
