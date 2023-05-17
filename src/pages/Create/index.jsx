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
import ReactQuill, { Quill } from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './style.css';


const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'formats/action',
  'action',
];
export default observer(function CreatePage({ initState = null }) {

  const [reactQuillRef, setReactQuillRef] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [stateRange, setStateRange] = useState(null);
  const [store] = useState(new StoreCreate());
  const [human, setHumanApi] = useState(null);
  const init = () => {
    setHumanApi(new HumanController('myWidget'));
  };
  useEffect(() => {
    if (initState !== null) {
      console.log('11111111');
      store.initState(initState);
    }
  }, [initState, store]);

  useEffect(() => {
    if (human instanceof HumanController) {
      human.updateCamera(store.selectedAction);
    }
  }, [human]);


  const setContentNote = text => {
    store.selectedNote.setContent(text);
  };

  console.log(buttonDisabled, 'buttonDisabled');

  const setTitleNote = value => store.selectedNote.setTitle(value);

  const addFormat = () => {
    reactQuillRef.getEditor().format('action', { key: store.getActionId ? store.getActionId : store.selectedAction?.id });
    setStateRange(null);
    setButtonDisabled(true)
  }

  const removeFormat = () => {
    reactQuillRef.getEditor().removeFormat(stateRange.index, stateRange.length);
    setStateRange(null);
  }

  if (!store.data.title || !store.data.region) {
    return <NotesModal store={store} />;
  }
  let content = store.selectedNote?.content;
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
                style={{ maxHeight: '50px' }}
                label='Note Name'
                placeholder='name'
                error={store.selectedNote?.title?.length < 3}
                value={store.selectedNote?.title || ''}
                active={store.selectedNote?.title?.length > 2}
                handlerChange={setTitleNote}
              />
              <ReactQuill
                ref={el => setReactQuillRef(el)}
                onChangeSelection={(range, source, editor) => {
                  if (range) {
                    if (range.length > 0) {
                        setButtonDisabled(false);
                      if (reactQuillRef.getEditor().getFormat().action) {
                        console.log(range, reactQuillRef.getEditor().getFormat().action);
                          setStateRange(range);
                      }
                    } else {
                      setButtonDisabled(true);
                      setStateRange(null);
                    }
                  }
                }}
                onBlur={() => {
                  setButtonDisabled(true);
                  setStateRange(null);
                }}
                value={content}
                onChange={setContentNote}
                formats={formats}
              >

              </ReactQuill>
              <div>
                <button disabled={buttonDisabled || !!stateRange} onClick={addFormat}>Add
                </button>
                <button onClick={removeFormat} disabled={stateRange === null}>Remove
                </button>
              </div>

            </>
            : null}
        </div>
      </div>
    </div>
  );
});


let Inline = Quill.import('blots/inline');

class ActionBlot extends Inline {

  static create(value) {
    let node = super.create();
    console.log(value);
    node.setAttribute('data-key', value.key);
    node.classList.add('action-item');
    return node;
  }

  static formats(node) {
    return {
      key: node.getAttribute('data-key'),
    };
  }
}

ActionBlot.blotName = 'action';
ActionBlot.className = 'action-item';
Quill.register('formats/action', ActionBlot);
