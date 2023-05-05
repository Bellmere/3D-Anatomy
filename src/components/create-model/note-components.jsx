import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';
import useModels from '../../hooks/useModels';
import AddActionModal from '../modal/add-action';
export default observer(function NoteComponent({ noteApi }) {
  const { selectedOption, optionsList } = useModels();
  const [selected, setSelected] = useState({ value: null });
  useEffect(() => {
    if (selected.value !== null) {
      noteApi.setScene(selected.uri);
    }
  }, [selected.value]);
  return (
    <>
      <AddActionModal noteApi={noteApi}/>
      <Select
        value={selectedOption(selected?.value)}
        options={optionsList}
        onChange={item => setSelected(item)}
      ></Select>

    </>
  );
});
