import ButtonCross from '../../buttons/cross';
import './style.css';

export default function ModalConfirm({
                                       content = '',
                                       onClose,
                                       onConfirm,
                                       onCancel,
                                       children,
                                       confirmButtonLabel = 'Yes',
                                       cancelButtonLabel = 'No',
                                       width = 'auto',
                                       disabled = false,
                                     }) {
  return (
    <div className='confirm_modal'>
      <div className='confirm_modal__bg'></div>
      <div className='confirm_modal__main'>
        <div className='confirm_modal__close'>
          <ButtonCross onClose={onClose} />
        </div>
        <div className='confirm_modal__content' style={{ width }}>
          {content || children}
        </div>
        <div className='confirm_modal__footer'>
          <button onClick={onConfirm} disabled={disabled}>{confirmButtonLabel}</button>
          {cancelButtonLabel !== '' ? <button onClick={onCancel}>{cancelButtonLabel}</button> : null}
        </div>
      </div>
    </div>
  );
}
