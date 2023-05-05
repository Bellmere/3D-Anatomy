import { observer } from 'mobx-react-lite';
import useController from '../../../hooks/useControlle';
import AddNewAnnotation from './add-new-annotation';
import EditAnnotation from './edit-annotation';
import BaseButton from '../../buttons/base';
import InputLabel from '../../fields/inputLabel';


export default observer(function ControllerIFrame({ store, human }) {
  const {
    events,
    saveScreen,
    cancel,
    addNewScreen,
    onModeAnnotation,
    editMode,
    updateScreen,
    title,
    setTitle,
  } = useController(store, human);


  return (
    <div className='create_page_controller'>
      {store.isEditScreen}
      {store.isEditScreen ?
        <>
          {store.newScreen ?
            <BaseButton handlerClick={saveScreen}>Save Screen</BaseButton> :
            <BaseButton handlerClick={updateScreen}>Update Screen</BaseButton>
          }

          <BaseButton className='base_button__cancel' handlerClick={cancel}>Cancel</BaseButton>
        </>
        :
        <>
          <BaseButton handlerClick={addNewScreen}>Add New Screen</BaseButton>
          {
            store.selectedNote?.selectedAction ?
              <BaseButton handlerClick={editMode}>Edit Screen</BaseButton> : null
          }
        </>
      }
      {store.newScreen ?
        <div className='create_page_controller_footer'>
          <AddNewAnnotation
            store={store}
            human={human}
            onChange={onModeAnnotation}
            onModeCreated={events.addAnnotation}
          >
            <InputLabel
              label='title'
              placeholder='title'
              value={title}
              active={title?.length > 2}
              handlerChange={setTitle}
              labelWidth={'100px'}
            />
          </AddNewAnnotation>
        </div>
        : null}

      {
        store.edit ?
          <div className='create_page_controller_footer'>
            <EditAnnotation
              className='create_page_controller_footer'
              onModeEdit={events.editAnnotation}
              human={human}
              setTitle={setTitle}
              title={title}
              store={store} />
          </div>
          :
          null
      }
    </div>
  );
});
