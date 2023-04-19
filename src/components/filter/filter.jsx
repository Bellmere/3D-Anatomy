import { nanoid } from 'nanoid';

import { ReactComponent as LoopIcon } from '../../icons/loop.svg';

import './filter.css';

const filterId = nanoid();

export const Filter = ({ handleChange, value }) => {
  return (
    <div className="filter--wrapper">
      <label className="filter__label" htmlFor={filterId}>
        Search
      </label>
      <input
        className="filter__input"
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className='filter__icon--wrap'>
        <LoopIcon className='filter__icon' />
      </div>
    </div>
  );
};
