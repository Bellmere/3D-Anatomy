import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useController from '../../../hooks/useControlle';
import AddNewAnnotation from './add-new-annotation';
import EditAnnotation from './edit-annotation';
import BaseButton from '../../buttons/base';
import InputLabel from '../../fields/inputLabel';
import Switch from '../../fields/switch';
import { SketchPicker } from 'react-color';


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
    enablePickColor,
    disablePickColor,
  } = useController(store, human);

  const [titleError, setTitleError] = useState(false);

  const [colors, setColors] = useState({ rgb: { r: 61, g: 55, b: 92, a: 1 } });
  const [selectElement, setSelectElement] = useState(null);

  useEffect(() => {
    disablePickColor();
  }, [store.selectedNote?.scene])
  useEffect(() => {
    const deselect = val => {
      setSelectElement(val);
    };
    human.subscribe(deselect, 'selectedElement');
    return () => human.unsubscribe(deselect, 'selectedElement');
  });

  const saveScreenEndValidation = () => {
    if (!titleError) {
      saveScreen();
    }
  };


  useEffect(() => {
    setTitleError(title.length < 3);
  }, [title]);

  const togglePickColor = () => {
    if (events.enablePickColor) disablePickColor();
    else enablePickColor();
  };
  return (
    <div className='create_page_controller'>
      {store.isEditScreen ?
        <>
          {store.newScreen ?
            <BaseButton handlerClick={saveScreenEndValidation}>Save Screen</BaseButton> :
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
        <div className='create_page_controller_footer first-block'>
          <AddNewAnnotation
            store={store}
            human={human}
            onChange={onModeAnnotation}
            onModeCreated={events.addAnnotation}
          >
            <InputLabel
              label='Title'
              placeholder='Title'
              value={title}
              error={titleError}
              active={title?.length > 2}
              handlerChange={setTitle}
              labelWidth={'100px'}
            />
          </AddNewAnnotation>
          <Switch
            checked={events.enablePickColor}
            onSwitch={togglePickColor}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              Pick color object selected
            </div>
          </Switch>
        </div>
        : null}

      {
        store.edit ?
          <div className='create_page_controller_footer'>
            <EditAnnotation
              className='create_page_controller_footer'
              onModeEdit={events.editAnnotation}
              human={human}
              error={titleError}
              setTitle={setTitle}
              title={title}
              store={store} />
            <Switch
              onSwitch={togglePickColor}
            >
              <div style={{ display: 'flex', gap: '10px' }}>
                Pick color object selected
              </div>
            </Switch>
          </div>
          :
          null
      }
      {events.enablePickColor ?
        <>
          <SketchPicker
            color={colors}
            onChange={color => {
              setColors(color);
              human.saveColor(color.rgb);
            }}
          />
          {selectElement || true ? <button className="btn-deselect base_button " onClick={() => human.deselectElementColor()}>Deselect</button> : null }
          {selectElement || true ?
            <button className="btn-show-selected-element base_button " onClick={() => human.highlightSelectedElement()}>Show Selected Element</button> : null}
          {selectElement || true ? <button className="btn-reset-color base_button " onClick={() => human.removeColor()}>Reset Color</button> : null}
        </>
        : null}
    </div>
  );
});
