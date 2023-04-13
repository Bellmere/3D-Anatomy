import { Link } from 'react-router-dom';

import { ReactComponent as TrashIcon } from '../../icons/trash.svg';
import { ReactComponent as PenIcon } from '../../icons/pen.svg';
import { ReactComponent as SquareArrowIcon } from '../../icons/square-arrow.svg';

import './NoteList.css';

export const NoteList = () => {
  return (
    <div className="note--wrapper">
      <ul className="note__list">
        <li className="note__item">
          <div className="note__item--wrap">
            <h4 className="note__title">Anatomy Terminology Part 2</h4>
            <div className="note__navigation">
              <button className="note__btn" type="button">
                <TrashIcon className="note__icon" />
              </button>
              <Link className="note__link" to="#">
                <PenIcon className="note__icon" />
              </Link>
              <Link className="note__link" to="#">
                <SquareArrowIcon className="note__icon" />
              </Link>
            </div>
          </div>
        </li>
        <li className="note__item">
          <div className="note__item--wrap">
            <h4 className="note__title">Anatomy Terminology Webinar Part 1</h4>
            <div className="note__navigation">
              <button className="note__btn" type="button">
                <TrashIcon className="note__icon" />
              </button>
              <Link className="note__link" to="#">
                <PenIcon className="note__icon" />
              </Link>
              <Link className="note__link" to="#">
                <SquareArrowIcon className="note__icon" />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
