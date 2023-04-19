import ArrowButton from '../arrow/arrow';

import './style.css'
export default function GroupButtonPagination({ current, count, label = 'Label', handlerPrev, handlerNext}) {
  return (
    <div className="group-button-pagination">
      <ArrowButton handlerClick={handlerPrev} style={{opacity: current === 0 ? 0.3 : 1}}/>
      <div className="group-button-pagination__label">{label} {current + 1}/{count}</div>
      <ArrowButton handlerClick={handlerNext} position='right' style={{opacity: current === count-1 ? 0.3 : 1}} />
    </div>
  );
}
