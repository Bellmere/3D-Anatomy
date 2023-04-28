import { observer } from 'mobx-react-lite';
import ModalConfirm from '../confirm';
import InputLabel from '../../fields/inputLabel';
import Select from 'react-select';

import CATEGORIES from '../../../constans/structure';

export default observer(function NotesModal({ notesApi }) {
  if (!notesApi.isOpenedModalNotes) return null;

  const options = Object.keys(CATEGORIES.REGION).map(key => ({
    value: key,
    label: CATEGORIES.REGION[key],
  }));
  return (
    <ModalConfirm
      cancelButtonLabel=''
      confirmButtonLabel={'Create'}
      onClose={notesApi.hideModal.bind(notesApi)}
      onConfirm={notesApi.createNotes.bind(notesApi, 'UPPER_LIMB', 'title')}
    >
      <div style={{ width: '50vw', height: '10vh', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        <InputLabel
          label='Title'
          placeholder='Title'
          active={true}
          handlerChange={() => {}}
        />
        <Select
          options={options}
          placeholder='Region'
          className='z-index-1000'
        />
      </div>
    </ModalConfirm>
  )
    ;
});
