import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import AddNewAnnotation from '../../components/create-model/add-new-annotation';
import NotesModal from '../../components/modal/notes-modal';
import StoreCreate from '../../mobx/localStore/StoreCreate';
import IFrameHuman from '../../components/biodigital/IFrameHuman';
import HumanController from '../../service/HumanController';
import './style.css';


export default observer(function CreatePage() {
  const [store] = useState(new StoreCreate());
  const [human, setHumanApi] = useState(null);
  const init = () => {
    setHumanApi(new HumanController('myWidget'));
  };

  return (
    <div className='container'>
      {/*{learnApi ? <NotesModal notesApi={learnApi} /> : null}*/}
      <h2 className='create_page__title'>create page</h2>
      {/*{noteApi ? <NoteComponents noteApi={learnApi.noteSelected} /> : null}*/}
      <IFrameHuman scene={'4smM'} init={init}>
        {human ? <AddNewAnnotation human={human} store={store} /> : null}
      </IFrameHuman>
    </div>
  );
});
