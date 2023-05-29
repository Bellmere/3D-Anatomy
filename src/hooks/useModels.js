import { useEffect, useState } from 'react';
import { db } from '../api/firebase/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { DOC_MODELS } from '../constans/models';

const formatOption = (item) => ({
  label: item.title,
  value: item.id,
  uri: item.uri,
});
export default function useModels() {
  const [models, setModels] = useState([]);
  const removeModel = async (id) => {
    await deleteDoc(doc(db, DOC_MODELS, id));
    await fetchModels();
  };

  const optionsList = models.map(item => formatOption(item));

  const selectedOption = (selectedId) => {
    const find = models.find(item => item.id === selectedId);
    if (find) return formatOption(find);
    return null;
  };
  const fetchModels = async () => {
    fetch('http://127.0.0.1:5001/clinicalphysioanatomy/us-central1/getmodels')
      .then(e => e.json())
      .then(models => {
        setModels(models.map((item) => {
          return { uri: item.content_url, title: item.content_title, id: item.content_id };
        }));
      });

  };
  useEffect(() => {
    fetchModels();
  }, []);

  return {
    models,
    optionsList,
    removeModel,
    selectedOption,
  };
}
