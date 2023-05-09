import { useEffect, useState } from 'react';
import useModels from '../../hooks/useModels';
import Select from 'react-select';
import ModalConfirm from '../../components/modal/confirm';

export default function ListModels({ changeUri, isOpenConfirm, selected }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [uri, setUri] = useState(null);
  const [selectedId, setSelectedById] = useState(null);
  const { optionsList, selectedOption } = useModels();

  const selectedModel = ({ uri, value }) => {
    setSelectedById(value);
    if (!isOpenConfirm || selectedId === null) {
      changeUri(uri);
    } else {
      setShowConfirm(true);
      setUri({ uri, value });
    }
  };

  useEffect(() => {
    const option = optionsList.find(item => item.uri === selected)

    if(option) {
      setSelectedById(option.value);
    } else {
      const [first] = optionsList;
      if (selectedId === null && first) {
        selectedModel({ uri: first.uri, value: first.value });
      }
    }

  }, [optionsList]);

  useEffect(() => {
    if (!selected && selectedId) {
      const find = optionsList.find(item => item.value === selectedId);
      changeUri(find.uri);
    }
  }, [selected]);

  const confirm = () => {
    changeUri(uri.uri);
    setShowConfirm(false);
  };
  const cancel = () => {
    setSelectedById(uri.value);
    setShowConfirm(false);
  };
  return (
    <>
      {showConfirm ?
        <ModalConfirm
          onConfirm={confirm}
          onCancel={cancel}
          onClose={cancel}
          isOpen={showConfirm}
          content='If you change the model, all your annotations will be lost'
        />
        : null
      }
      <Select
        value={selectedOption(selectedId)}
        options={optionsList}
        onChange={selectedModel}
      ></Select>
    </>
  );
}
