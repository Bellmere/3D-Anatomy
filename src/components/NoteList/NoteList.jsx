import { observer } from 'mobx-react-lite';
import { NoteItem } from './NoteItem/NoteItem';
import { StoreContext, useContext } from '../../context';
import './style.css';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../api/firebase/firebase';

export const NoteList = observer(() => {
  const { notes } = useContext(StoreContext);
  const deleteNoteById = async (id) => {
    notes.removeNoteById(id);
    await deleteDoc(doc(db, 'note_sets', id));
  };

  return (
    <div className='note--wrapper'>
      <ul className='note__list'>
        {notes.listNotes.map(note => (
          <NoteItem key={note.id} note={note} deleteNoteById={deleteNoteById} />
        ))}
        {notes.listNotes?.length === 0 && notes.loading === false ? <h2>No notes available</h2> : null}
      </ul>
    </div>
  );
});
