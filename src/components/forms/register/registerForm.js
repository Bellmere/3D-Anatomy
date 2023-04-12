import { toast } from 'react-toastify';
import { observer} from 'mobx-react-lite';

import { StoreContext, useContext} from '../../../context';
import BaseInput from '../../fields/baseInput';
import { MainButton } from 'components/buttons/main/mainButton';
import { validationFormRegister } from '../../../helpers';

import ErrorCode from '../../../constans/error-code';
import './registerForm.css';


export const RegisterForm = observer(() => {
  const { authUser } = useContext(StoreContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = Object.fromEntries(Array.from(new FormData(e.target)));
    const errors = validationFormRegister(dataForm);
    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).join('\n');
      return toast.error(errorMessages);
    }

    try {
     const res =  await authUser.createUserWithEmailAndPassword(dataForm);
     if(!res.success) throw new Error(res.errorCode)
    } catch (error) {
      toast.error(ErrorCode[error.message])
    }

  };

  return (
    <div className='auth--wrapper'>
      <div className='auth_form--wrap'>
        <h2 className='auth__form__title'>Register</h2>
        <form className='auth__form' onSubmit={handleSubmit} autoComplete='off'>
          <div className='auth__item'>
            <BaseInput name='name' label='Full name' isRequired />
          </div>
          <div className='auth__item'>
            <BaseInput name='email' type='email' label='Email' isRequired />
          </div>
          <div className='auth__item'>
            <BaseInput name='password' type='password' label='Password' isRequired />
          </div>
          <div className='auth__item'>
            <BaseInput name='password_confirm' type='password' label='Confirm Password' isRequired />
          </div>
          <MainButton>Register</MainButton>
        </form>
      </div>
    </div>
  );
});
