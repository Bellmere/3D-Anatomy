import { Link } from 'react-router-dom';

import { ReactComponent as TrashIcon } from '../../../icons/trash.svg';
import { ReactComponent as PenIcon } from '../../../icons/pen.svg';
import { ReactComponent as SquareArrowIcon } from '../../../icons/square-arrow.svg';

import './NoteItem.css';

export const NoteItem = ({ note, handleDelete }) => {

  return (
    <li className="note__item">
      <div className="note__item--wrap">
        <h4 className="note__title">{note.title}</h4>
        <div className="note__navigation">
          <button
            className="note__btn"
            type="button"
            onClick={() => handleDelete(note.uid)}
          >
            <TrashIcon className="note__icon" />
          </button>
          <Link className="note__link" to={`/viewer/${note.id}`}>
            <PenIcon className="note__icon" />
          </Link>
          <Link className="note__link" to={`/viewer/${note.id}`}>
            <SquareArrowIcon className="note__icon" />
          </Link>
        </div>
      </div>
    </li>
  );
};
