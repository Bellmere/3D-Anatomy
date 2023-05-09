import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../api/firebase/firebase';
import Create from './Create';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export default function EditPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [initState, setInitState] = useState(null);
  useEffect(() => {
    const getFetch = async () => {

      const refDoc = await getDoc(doc(db, `note_sets`, id));
      const initState = {
        learn: { ...refDoc.data(), id: refDoc.id },
        notes: [],
      }
      const refNotes = await getDocs(collection(db, `note_sets/${id}/notes`));
      const notes = initState.notes;
      refNotes.forEach(note => notes.push({ id: note.id, ...note.data(), actions: [] }));
      const asyncNotes = notes.map(note => {
        return getDocs(collection(db, `note_sets/${id}/notes/${note.id}/actions`));
      });

      await Promise.all(asyncNotes).then(list => {
        list.forEach((actions, index) => actions.forEach(action => notes[index].actions.push(action.data())));
      });
      setInitState(initState);
      setLoading(false);

    };
    setLoading(true);
    getFetch();
  }, [id]);

  if (initState === null) return null;
  return (
    <Create initState={initState} />
  );
}
