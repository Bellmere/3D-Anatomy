import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EDIT_MODEL } from '../../../constans/routes/routes';
import { ReactComponent as TrashIcon } from '../../../icons/trash.svg';
import { ReactComponent as PenIcon } from '../../../icons/pen.svg';
import { ReactComponent as SquareArrowIcon } from '../../../icons/square-arrow.svg';
import ModalConfirm from '../../modal/confirm';
import './style.css';

export const NoteItem = ({ note, deleteNoteById }) => {
  const [isOpenedModalConfirm, setOpenedModalConfirm] = useState(false);
  const deleteNote = () => {
    deleteNoteById(note.id);
    setOpenedModalConfirm(false);
  }
  const cancel = () => setOpenedModalConfirm(state => !state);
  return (
    <li className="note__item">
      <div className="note__item--wrap">
        <h4 className="note__title">{note.title}</h4>
        <div className="note__navigation">
          <button
            className="note__btn"
            type="button"
            onClick={() => setOpenedModalConfirm(state => !state)}
          >
            <TrashIcon
              className="note__icon"

            />
          </button>
          {isOpenedModalConfirm ?
            <ModalConfirm onClose={cancel} onCancel={cancel} onConfirm={deleteNote}>
              Are you sure you want to delete "{note.title}" ?
           </ModalConfirm>
            : null }
          <Link className="note__link" to={EDIT_MODEL.getPath(note.id)}>
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
