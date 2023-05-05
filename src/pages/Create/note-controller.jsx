import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { VIEWER } from '../../constans/routes/routes';
import GroupButtonPagination from '../../components/buttons/group-button-pagination';
import BaseButton from '../../components/buttons/base';
import ModalConfirm from '../../components/modal/confirm';
import Action from '../../mobx/notes/Action';
import AddIconSvg from '../../svg/add-icon';
import BasketSvg from '../../svg/basket';

export default observer(function NoteController({ store, human }) {
  const [isOpened, setOpened] = useState(false);
  const updateCamera = () => {
    console.log(store.selectedAction);
    if(store.selectedAction instanceof Action) {
      human.updateCamera(store.selectedAction)
    } else {
      human.api.send('scene.reset');
    }
  };

  const prevNote = () => {
    store.prevNote();
    updateCamera();
  };

  const nextNote = () => {
    store.nextNote();
    updateCamera();
  };

  const addNote = () => {
    store.addNewNote();
    updateCamera();
  };


  const close = () => setOpened(false);
  const removeNote = () => {
    store.removeCurrentNote();
    close();
  };
  const navigate = useNavigate();

  const saveNotes = async () => {
    const id = await store.saveFirebase();
    console.log(VIEWER.getPath(id));
    navigate(VIEWER.getPath(id))
  }
  return (
    <div className='create_page_top_controller_button'>
      {isOpened ?
        <ModalConfirm
          onCancel={close}
          onClose={close}
          onConfirm={removeNote}
        >
          Are you sure you want to delete the note?
        </ModalConfirm>
        : null}
      {store.notes?.length > 1 ?
        <GroupButtonPagination
          label='Notes'
          count={store.notes?.length}
          current={store.indexCurrentNote}
          handlerPrev={prevNote}
          handlerNext={nextNote}
        />
        : null
      }
      <BaseButton handlerClick={addNote} className='base_button__white'>
        <>
          Add Note
          <AddIconSvg />
        </>
      </BaseButton>

      <button className='button_delete' onClick={() => setOpened(state => !state)}> Delete Note <BasketSvg /></button>
      <BaseButton handlerClick={saveNotes}>Save</BaseButton>

    </div>
  );
});
