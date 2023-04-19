import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import Viewer from '../mobx/localStore/Viewer';
import HumanApi from '../mobx/localStore/HumanApi';
import HeaderPageView from '../components/header-page/HeaderPageView';

import Typography from '../components/typography';
import IFrameHuman from '../components/biodigital/IFrameHuman';
import GroupButtonPagination from '../components/buttons/group-button-pagination';

const styleNotesController = {
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',
  position: 'sticky',
  paddingBottom: '20px',
  boxShadow: '0px 1px 10px #00000010',
};
export default observer(function ViewerPage() {
  const [store] = useState(new Viewer());
  const [humanApi] = useState(new HumanApi());
  const { id } = useParams();

  useEffect(() => {
    store.getSingleLearnById(id);
  }, [id, store]);


  useEffect(() => {
    humanApi.updateNote(store.noteSelected);
  }, [store.noteSelected, humanApi]);

  const init = () => {
    humanApi.init();
    humanApi.updateCamera();
  };

  const reset = () => {
    humanApi.reset();
    store.reset();
  };

  const nextNote = () => store.nextNote();
  const prevNote = () => store.prevNote();
  return (
    <div className='container'>
      <HeaderPageView
        title={store.title}
        currentAction={humanApi.currentAction}
        listActions={humanApi.listActions}
        handlerPrev={() => humanApi.prevAction()}
        handlerNext={() => humanApi.nextAction()}
        handlerSelect={(index) => humanApi.setIndexActiveAction(index)}
        handlerReset={reset}
      />
      {store.noteSelected?.scene ?
        <div className='container-iframe'>
          <IFrameHuman scene={store.noteSelected.scene} init={init} />
          <div className='header-page-typography'>
            <div style={styleNotesController}>
              {store.lengthNotes > 1 ?
                <GroupButtonPagination
                  current={store.selectedIndex}
                  count={store.lengthNotes}
                  label={store.noteSelected?.title + '  -  '}
                  handlerNext={nextNote}
                  handlerPrev={prevNote}
                /> : null}
            </div>
            <Typography content={store.noteSelected?.content} humanApi={humanApi} />
          </div>
        </div>
        :
        null
      }
    </div>
  );
});
