import { observer } from 'mobx-react-lite';
import { NoteItem } from './NoteItem/NoteItem';
import { StoreContext, useContext } from '../../context';

import './NoteList.css';

export const NoteList = observer(({ handleDelete }) => {
  const { notes } = useContext(StoreContext);

  return (
    <div className="note--wrapper">
      <ul className="note__list">
        {notes.listNotes.map(note => (
          <NoteItem key={note.id} note={note} handleDelete={handleDelete} />
        ))}
        {notes.listNotes?.length === 0 && notes.loading === false ? <h2>No notes available</h2> : null}
      </ul>
    </div>
  );
});
