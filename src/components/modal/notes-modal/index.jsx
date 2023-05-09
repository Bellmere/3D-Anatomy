import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import ModalConfirm from '../confirm';
import InputLabel from '../../fields/inputLabel';
import Select from 'react-select';

import CATEGORIES from '../../../constans/structure';

export default observer(function NotesModal({ store }) {
  const [data, setData] = useState({ title: '', region: ''})
  if (!store.isOpenedModalLearn) return null;

  const options = Object.keys(CATEGORIES.REGION).map(key => ({
    value: key,
    label: CATEGORIES.REGION[key],
  }));
  return (
    <ModalConfirm
      cancelButtonLabel=''
      disabled={!data.region || data.title < 3}
      confirmButtonLabel={'Create'}
      onClose={store.toggleModalLearn.bind(store)}
      onConfirm={store.setNewLearn.bind(store, data.region, data.title)}
    >
      <div style={{ width: '50vw', height: '10vh', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <InputLabel
          label='Title'
          placeholder='Title'
          active={true}
          handlerChange={(title) => setData({  ...data, title})}
        />
        <Select
          options={options}
          placeholder='Region'
          className='z-index-1000'
          onChange={({value}) => setData({ ...data, region: value })}
        />
      </div>
    </ModalConfirm>
  )
    ;
});
