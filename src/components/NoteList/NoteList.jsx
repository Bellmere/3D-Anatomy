import { Link } from 'react-router-dom';
import './NoteList.css';


export const NodeList = () => {
  return (
    <div className='note--wrapper'>
        <ul className='note__list'>
            <li className='note__item'>
                <h4 className='note__title'>Anatomy Terminology Part 2</h4>
                <div className='note__navigation'>
                    <button className='note__btn' type='button'>delete</button>
                    <Link className='note__link' to='#'>redactor</Link>
                    <Link className='note__link' to='#'>Move to</Link>
                </div>
            </li>
            <li className='note__item'>
                <h4 className='note__title'>Anatomy Terminology Webinar Part 1</h4>
                <div className='note__navigation'>
                    <button className='note__btn' type='button'>delete</button>
                    <Link className='note__link' to='#'>redactor</Link>
                    <Link className='note__link' to='#'>Move to</Link>
                </div>
            </li>
        </ul>
    </div>
  )
};
