import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import Viewer from '../mobx/localStore/Viewer';
import HumanApi from '../mobx/localStore/HumanApi';
import HeaderPageView from '../components/header-page/HeaderPageView';

import Typography from '../components/typography';
import IFrameHuman from '../components/biodigital/iframe-human/IFrameHuman';
import GroupButtonPagination from '../components/buttons/group-button-pagination';
import BaseButton from '../components/buttons/base';
import NewWindow from 'react-new-window';

const styleNotesController = {
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',
  position: 'sticky',
  paddingBottom: '20px',
  boxShadow: '0px 1px 10px #00000010',
};
export default observer(function ViewerPage() {
  const [isNewWindow, setIsNewWindow] = useState(false);
  const [store] = useState(new Viewer());
  const [humanApi] = useState(new HumanApi());
  const [showResetButton, setShowResetButton] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    store.getSingleLearnById(id);
  }, [id, store]);

  const addNewWindow = () => {
    setIsNewWindow(false)
    requestAnimationFrame(() => {
      setIsNewWindow(true)
    })
  };
  useEffect(() => {
    humanApi.updateNote(store.noteSelected);
  }, [store.noteSelected, humanApi]);

  useEffect(() => {
    if (humanApi.human && humanApi.listActions?.length) {
      humanApi.updateCamera();
    }
  }, [humanApi.listActions, humanApi]);
  const init = () => {
    setShowResetButton(true);
    humanApi.init();
    humanApi.updateCamera();
  };

  const reset = () => {
    humanApi.reset();
  };
  const nextNote = () => store.nextNote();
  const prevNote = () => store.prevNote();

  const symbolReplace = new RegExp('%', 'gi');
  const content = store.noteSelected?.content?.replace(symbolReplace, '');
  console.log(store);
  return (
    <div className='container'>
      <HeaderPageView
        title={store.title}
        currentAction={humanApi.currentAction}
        listActions={humanApi.listActions}
        handlerPrev={() => humanApi.prevAction()}
        handlerNext={() => humanApi.nextAction()}
        handlerSelect={(index) => humanApi.setIndexActiveAction(index)}
      />
      {store.noteSelected?.scene ?
        <div className='container-iframe'>
          <IFrameHuman scene={store.noteSelected.scene} init={init}>
            {showResetButton ? <BaseButton handlerClick={reset}>Reset</BaseButton> : null}
          </IFrameHuman>
          <div className='header-page-typography'>
            {store.lengthNotes > 1 ?
              <div style={styleNotesController}>
                <GroupButtonPagination
                  current={store.selectedIndex}
                  count={store.lengthNotes}
                  label={store.noteSelected?.title + '  -  '}
                  handlerNext={nextNote}
                  handlerPrev={prevNote}
                />
              </div>
              : null}
            {isNewWindow ?
              <NewWindow closeOnUnmount={() => setIsNewWindow(false)}>
                <Typography content={content} humanApi={humanApi} />
              </NewWindow> :
              null
            }
            <Typography content={content} humanApi={humanApi}>
              <button className="base_button" onClick={addNewWindow}>New Window</button>
            </Typography>
          </div>
        </div>
        :
        null
      }
    </div>
  );
});
