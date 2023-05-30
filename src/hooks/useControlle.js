import { useEffect, useState, useRef } from 'react';
const EVENTS = {
  addAnnotation: false,
  editAnnotation: false,
  enablePickColor: false,
};
export default function useController(store, human) {
  const [events, setEvents] = useState({
    ...EVENTS,
  });

  const [title, setTitle] = useState('');

  const objectsShown = useRef({  });

  const enablePickColor = () => {
    human.enablePickColor();
    setEvents({...events, enablePickColor: true})
  };
  const disablePickColor = () => {
    human.disablePickColor();
    setEvents({...events, enablePickColor: false });
  }
  const saveScreen = () => {
    human.api.send('scene.capture', capture => {
      human.api.send('camera.info', camera => {
        const id = store.getActionId;
        store.selectedNote.addNewAnnotation(capture, camera, objectsShown.current, title, id, human.getObjectsIdColor());
        setEvents({ ...EVENTS });
        human.reset(store.selectedAction);
        disablePickColor();
        objectsShown.current = {};
        store.offNewScreen();
        setTitle('');
      });
    });
  };
  const updateScreen = () => {
    human.api.send('scene.capture', capture => {
      human.api.send('camera.info', camera => {
        const id = store.getActionId;
        store.selectedNote.updateAnnotation(capture, camera, objectsShown.current, title, id, human.getObjectsIdColor());
        setEvents({ ...EVENTS });
        human.reset(store.selectedAction);
        disablePickColor();
        objectsShown.current = {};
        store.offEditMode();
        setTitle('');
      });
    });
  };



  const onModeAnnotation = value => setEvents({ ...EVENTS, addAnnotation: value, enablePickColor: events.enablePickColor  });

  const cancel = () => {
    store.offMode();
    //human.api.send('scene.reset');
    setEvents({ ...EVENTS });
    disablePickColor();
    objectsShown.current = {};
    if(store.selectedNote?.selectedAction) {
      human.updateCamera(store.selectedNote.selectedAction);
      setTitle('');
    }
  };


  const addNewScreen = () => {
    store.onNewScreen();
    human.resetLabels();
    human.resetSelected();
    human.resetColor(store.selectedAction?.colors)
    objectsShown.current = {};
  }

  const editMode = () => {
    store.onEditMode();
    human.updateCamera(store.selectedAction)
    setEvents({ ...EVENTS, editAnnotation: true, enablePickColor: events.enablePickColor })
  }


  useEffect(() => {
    if(events.editAnnotation) {
      objectsShown.current = store.selectedAction.objectsShown  ? { ...store.selectedAction.objectsShown } : {};
    } else if (events.addAnnotation) {
      objectsShown.current = {}
    }
  }, [events])

  useEffect(() => {

    const shownObject = obj => {
      if (store.edit ||  store.newScreen) {
        const keys = Object.keys(obj);
        keys.forEach(key => {
          if (objectsShown.current[key] !== undefined) delete objectsShown.current[key];
          else objectsShown.current[key] = obj[key];
        })

      }
    };
    human.subscribe(shownObject, 'objectsShown');

    return () => human.unsubscribe(shownObject, 'objectsShown');
  }, [human, events]);


  return {
    saveScreen,
    addNewScreen,
    cancel,
    onModeAnnotation,
    updateScreen,
    editMode,
    enablePickColor,
    disablePickColor,
    events,
    title,
    setTitle
  }
}
