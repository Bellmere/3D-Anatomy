import { useState } from 'react';
import { toast } from 'react-toastify';
import useModels from '../../hooks/useModels';
import Select from 'react-select';
import BaseButton from '../../components/buttons/base';
import ModalConfirm from '../../components/modal/confirm';

export default function ShowAllModel({ changeUri, selected }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedById] = useState(null);
  const { removeModel, optionsList, selectedOption } = useModels();

  const selectedModel = ({ uri, value }) => {
    changeUri(uri)
    setSelectedById(value);
  }
  const confirmRemove = () => {
    removeModel(selectedId);
    setShowConfirm(false);
    changeUri(null);
    setSelectedById(null)
    toast.success('Model is deleted', {
      autoClose: 3000,
    })
  }
  return (
    <>
      {showConfirm ?
        <ModalConfirm
          onConfirm={confirmRemove}
          onCancel={() => setShowConfirm(false)}
          onClose={() => setShowConfirm(false)}
          isOpen={showConfirm}
          content="Are you sure you want to delete ?"
        />
        : null
      }
      <Select
        value={selectedOption(selectedId)}
        options={optionsList}
        onChange={selectedModel}
      ></Select>
      <BaseButton disabled={!selected} handlerClick={() => {
        setShowConfirm(true);
      }}>Remove</BaseButton>
    </>
  );
}
