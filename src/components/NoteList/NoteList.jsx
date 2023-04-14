import { NoteItem } from './NoteItem/NoteItem';

import './NoteList.css';

export const NoteList = ({ notes, handleDelete }) => {
  return (
    <div className="note--wrapper">
      <ul className="note__list">
        {notes.map(note => (
          <NoteItem key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};
