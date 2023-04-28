import { useEffect, useState } from 'react';
import { db } from '../api/firebase/firebase';
import { getDocs, collection, query, deleteDoc, doc } from 'firebase/firestore';
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
  }

  const optionsList = models.map(item => formatOption(item));

  const selectedOption = (selectedId) => {
    const find = models.find(item => item.id === selectedId)
    if(find) return formatOption(find);
    return null;
  }
  const fetchModels = async () => {
    getDocs(query(collection(db, 'models'))).then(res => {
      const models = [];
      res.forEach((item) => {
        models.push({...item.data(), id: item.id});
      })

      setModels(models);
    });
  }
  useEffect(() => {
    fetchModels();
  }, []);



  return {
    models,
    optionsList,
    removeModel,
    selectedOption,
  }
}
