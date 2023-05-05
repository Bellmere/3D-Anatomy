import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import ModalConfirm from '../confirm';
import InputLabel from '../../fields/inputLabel';

import './style.css'

const DATA_DEFAULT = { title: '', description: '' };
export default forwardRef(function AddActionModal({ store }, ref) {
  const data = useRef({ title: '', description: '' });
  const promise = useRef({});
  const [isOpened, setOpened] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      setDefaultValue(title, description) {
        data.current.title = title;
        data.current.description = description;
      },
      async open() {
        setOpened(true);
        return new Promise((res) => {
          promise.current.close = (success) => {
            res({...data.current, success,});
            setOpened(false);
            data.current = DATA_DEFAULT;
          };
        });
      },
      close() {
        setOpened(false);
        data.current = DATA_DEFAULT;
        promise.current?.close({ ...data.current, success: false});
      },
    };
  }, [ref]);

  if (isOpened === false) return null;



  return (
    <ModalConfirm
      width={'600px'}
      onConfirm={promise.current?.close.bind(null, true)}
      onCancel={promise.current?.close.bind(null, false)}
      onClose={promise.current?.close.bind(null, false)}
    >
      <div className="add-action-modal">
        <InputLabel
          label='title'
          placeholder='title'
          defaultValue={data.current.title}
          labelWidth={'100px'}
          handlerChange={value => data.current.title = value}
        />
        <InputLabel
          defaultValue={data.current.description}
          type="textarea"
          label='Description'
          placeholder='Description'
          max={300}
          labelWidth={'100px'}
          rows={5}
          handlerChange={value => data.current.description = value}
        />
      </div>
    </ModalConfirm>
  );
});
