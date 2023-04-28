import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import ModalConfirm from '../confirm';
import InputLabel from '../../fields/inputLabel';

export default forwardRef(function AddActionModal({ store }, ref) {
  const data = useRef({ title: '', description: '' });
  const promise = useRef({});
  const [isOpened, setOpened] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      async open() {
        setOpened(true);
        return new Promise((res) => {
          promise.current.close = (success) => {
            res({...data.current, success,});
            setOpened(false);
          };
        });
      },
      close() {
        setOpened(false);
        promise.current?.close({ ...data.current, success: false});
      },
    };
  }, []);

  if (isOpened === false) return null;

  return (
    <ModalConfirm
      onConfirm={promise.current?.close.bind(null, true)}
      onCancel={promise.current?.close.bind(null, false)}
      onClose={promise.current?.close.bind(null, false)}
    >
      <div>
        <InputLabel
          label='title'
          placeholder='title'
          handlerChange={value => data.current.title = value}
        />
        <InputLabel
          label='Description'
          placeholder='Description'
          handlerChange={value => data.current.description = value}
        />
      </div>
    </ModalConfirm>
  );
});
