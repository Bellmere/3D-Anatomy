import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../api/firebase/firebase';
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';

export default function EditPage() {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getFetch = async () => {
      const refDoc = await getDoc(doc(db, `note_sets`, id));
      console.log(refDoc.id);
      const refNotes = await getDocs(collection(db, `note_sets/${id}/notes`));
      refNotes.forEach((item) => {
        console.log(item.data())
      })
      console.log(refDoc.data());
    }
    getFetch();
  }, [id])
  return (
    <div></div>
  )
}
