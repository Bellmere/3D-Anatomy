import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';
import BasketSvg from '../../svg/basket';
import ListModels from './list-models';
import ModalConfirm from '../../components/modal/confirm';
export default observer(function TopController({ store, human, children }) {

  const [isOpened, setOpened] = useState(false);
  const options = store?.actions.map(item => ({ label: item.title, value: item.id })) || [];

  const close = () => setOpened(false);
  const confirmRemove = () => {
    const id = store.selectedAction?.id;
    store.selectedNote.removeActionById(id);
    if (store.selectedNote.actions[0]?.id) {
      store.selectedNote.setSelectedAction(store.selectedNote.actions[0]?.id);
    }
    human.api.send('scene.reset');
    if(store.selectedNote.actions?.length) {
      human.updateCamera(store.selectedAction);
    }
    close();
  };
  const changeScene = value => {
    store.selectedNote.resetActions();
    store.selectedNote.setScene(value)
  };
  return (
    <div className='create_page_top_controller'>
      <h2 className='create_page__title'>Create page</h2>
      <div className="wrap-select">
        <ListModels changeUri={changeScene} selected={store.selectedNote.scene} isOpenConfirm={!!store?.selectedNote?.actions.length}/>
      </div>
      {options?.length ?
        <>
          {isOpened ?
            <ModalConfirm onClose={close} onCancel={close} onConfirm={confirmRemove}>
              Are you sure you want to delete this screen?
            </ModalConfirm>
            : null}
          <div className="wrap-select">
          <Select
            value={{ value: store.selectedAction.id, label: store.selectedAction.title }}
            options={options}
            onChange={({ value }) => {
              store.selectedNote.setSelectedAction(value);
              human.updateCamera(store.selectedAction);
            }}
          ></Select>
          </div>
          {store.selectedAction.id ?
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <BasketSvg onClick={() => setOpened(true)} />
            </div>
            : null}
        </>
        : null}
      {children}
    </div>
  );
});
