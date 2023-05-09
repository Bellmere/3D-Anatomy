import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ControllerIFrame from '../../components/biodigital/events/controller-iframe';
import NotesModal from '../../components/modal/notes-modal';
import StoreCreate from '../../mobx/localStore/StoreCreate';
import IFrameHuman from '../../components/biodigital/iframe-human/IFrameHuman';
import HumanController from '../../service/HumanController';
import TopController from './top-controller';
import NoteController from './note-controller';
import InputLabel from '../../components/fields/inputLabel';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './style.css';

export default observer(function CreatePage({ initState = null }) {


  const [store] = useState(new StoreCreate());
  const [human, setHumanApi] = useState(null);
  const init = () => {
    setHumanApi(new HumanController('myWidget'));
  };

  useEffect(() => {
    if(initState !== null) {
      store.initState(initState)
    }
  }, [])

  useEffect(() => {
    if(human instanceof HumanController) {
      human.updateCamera(store.selectedAction)
    }
  }, [human])
  const setContentNote = text => {
    store.selectedNote.setContent(text);
  };

  const setTitleNote = value => store.selectedNote.setTitle(value);

  if(!store.data.title || !store.data.region) {
    return <NotesModal store={store} />
  }
  return (
    <div className='container create_page__container'>
      <TopController store={store} human={human}>
        <NoteController store={store} human={human} />
      </TopController>
      <div className='create_page__content'>
        <IFrameHuman scene={store.selectedNote?.scene || ''} init={init}>
          {human ? <ControllerIFrame human={human} store={store} /> : null}
        </IFrameHuman>

        <div className='create_page_editor'>
          {store.selectedNote ?
            <>
              <InputLabel
                style={{maxHeight: '50px'}}
                label='Note Name'
                placeholder='name'
                error={store.selectedNote?.title?.length < 3}
                value={store.selectedNote?.title || ''}
                active={store.selectedNote?.title?.length > 2}
                handlerChange={setTitleNote}
              />
              <ReactQuill theme='snow' value={store.selectedNote.content} onChange={setContentNote} />
            </>
            : null}
        </div>
      </div>
    </div>
  );
});
