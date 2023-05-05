import { useEffect, useState, useRef } from 'react';
const EVENTS = {
  addAnnotation: false,
  editAnnotation: false,
};
export default function useController(store, human) {
  const [events, setEvents] = useState({
    ...EVENTS,
  });

  const [title, setTitle] = useState('');

  const objectsShown = useRef({  });

  const saveScreen = () => {
    human.api.send('scene.capture', capture => {
      human.api.send('camera.info', camera => {
        store.selectedNote.addNewAnnotation(capture, camera, objectsShown.current, title);
        setEvents({ ...EVENTS });
        objectsShown.current = {};
        store.offNewScreen();
        setTitle('');
      });
    });
  };
  const updateScreen = () => {
    human.api.send('scene.capture', capture => {
      human.api.send('camera.info', camera => {
        console.log({...objectsShown}, 'update');
        store.selectedNote.updateAnnotation(capture, camera, objectsShown.current, title);
        setEvents({ ...EVENTS });
        objectsShown.current = {};
        store.offEditMode();
        setTitle('');
      });
    });
  };



  const onModeAnnotation = value => setEvents({ ...EVENTS, addAnnotation: value });

  const cancel = () => {
    store.offMode();
    human.api.send('scene.reset');
    setEvents({ ...EVENTS });
    objectsShown.current = {};
    if(store.selectedNote?.selectedAction) {
      human.updateCamera(store.selectedNote.selectedAction);
      setTitle('');
    }
  };


  const addNewScreen = () => {
    store.onNewScreen();
    human.api.send('scene.reset');
    objectsShown.current = {};
  }

  const editMode = () => {
    human.api.send('scene.reset');
    store.onEditMode();
    human.updateCamera(store.selectedAction)
    setEvents({ ...EVENTS, editAnnotation: true })
  }


  useEffect(() => {
    if(events.editAnnotation) {
      console.log(store.selectedAction.objectsShown, 'store.selectedAction.objectsShownstore.selectedAction.objectsShown');
      objectsShown.current = store.selectedAction.objectsShown  ? { ...store.selectedAction.objectsShown } : {};
    } else if (events.addAnnotation) {
      objectsShown.current = {}
    }
  }, [events])

  useEffect(() => {

    const shownObject = obj => {
      if (store.edit ||  store.newScreen) {
        const [key] = Object.keys(obj);
        if (objectsShown.current[key] !== undefined) delete objectsShown.current[key];
        else objectsShown.current[key] = obj[key];
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
    events,
    title,
    setTitle
  }
}
