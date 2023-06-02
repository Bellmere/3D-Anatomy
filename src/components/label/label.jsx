import {useState} from 'react';
import EditSvg from '../../svg/edit';
import './label.css';

export default function Label({options , setSelectedAction , curentItem}) {
  console.log(options , curentItem);

  const [openLabelModal, setOpenLabelModal] = useState(false);
  const [active, setActive] = useState(null);

  const handleClick = event => {
    setOpenLabelModal(current => !current);
  };

  const listItems = options.map((item , index) =>
    <div key={index} onClick={() => {
      setSelectedAction(item.value)
      setActive(item.value)
    }}
         className={`item ${curentItem == item.value && "active"}`}
    >
      <span>{item.label}</span>
      <EditSvg></EditSvg>
    </div>
  );
  return(
    <div className="label-header">
      <button onClick={handleClick}>Labels</button>
        <div className="select-wrap">
          {openLabelModal ? listItems : ''}
        </div>
  </div>
  )

}
