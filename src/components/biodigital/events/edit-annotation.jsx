import { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import InputLabel from '../../fields/inputLabel';
import BaseButton from '../../buttons/base';
import ModalConfirm from '../../modal/confirm';
import AddAction from '../../modal/add-action';
import AddNewAnnotation from './add-new-annotation';

export default observer(function EditAnnotation({ onModeEdit, human, store, setTitle, title }) {

  const [isOpenedModal, setModalOpened] = useState(false);
  const [modeCreate, setModeCreate] = useState(false);
  const closeModal = () => setModalOpened(false);


  const [labelId, setLabelId] = useState(null);

  const removeAnnotation = () => {
    setModalOpened(false);
    setLabelId(null);
    human.api.send('labels.destroy', labelId);
  };

  const modalRef = useRef(null);

  const editAnnotation = async () => {
    human.api.send('labels.info', labelId, async (label) => {
      const { title, description } = label[labelId];
      modalRef.current.setDefaultValue(title, description);
      const data = await modalRef.current.open();
      if (data.success) {
        human.api.send('labels.update', {
          labelId,
          title: data.title,
          description: data.description,
        });
      }
    });
  };

  useEffect(() => {
    const pickedLabel = async (label) => {
      if (onModeEdit) {
        setLabelId(label.labelId);
      }
    };

    const picked = () => {
      if (onModeEdit && labelId) {
        setLabelId(null);
      }
    };

    human.subscribe(pickedLabel, 'labelsPicked');
    human.subscribe(picked, 'scenePicked');

    return () => {
      human.unsubscribe(pickedLabel, 'labelsPicked');
      human.unsubscribe(picked, 'scenePicked');
    };
  }, [onModeEdit, human, labelId]);

  useEffect(() => {
    setTitle(store.selectedAction?.title);
  }, [store.selectedAction]);
  return (
    <>
      <AddAction ref={modalRef} />

      {isOpenedModal ?
        <ModalConfirm onConfirm={removeAnnotation} onClose={closeModal} onCancel={closeModal}>
          Are you sure you want to delete?
        </ModalConfirm>
        : null
      }

      <InputLabel
        label='title'
        placeholder='title'
        value={title}
        active={title.length > 2}
        handlerChange={setTitle}
        labelWidth={'100px'}
      />
      <AddNewAnnotation human={human} onModeCreated={modeCreate} onChange={setModeCreate}/>
      {labelId ?
        <>
          <BaseButton handlerClick={editAnnotation}>
            Edit Annotation
          </BaseButton>
          <BaseButton
            className='base_button__remove'
            handlerClick={() => setModalOpened(state => !state)}
          >Remove
          </BaseButton>
        </>
        : null
      }
    </>
  );
});
