import { useMemo } from 'react';
import Select from 'react-select';
import GroupButtonPagination from '../buttons/group-button-pagination';
import './style.css';

export default function HeaderPageView(props) {
  const {
    title,
    currentAction,
    listActions,
    handlerPrev,
    handlerNext,
    handlerSelect,
  } = props;

  const options = useMemo(() => {
    return listActions.map((item, index) => ({ value: index, label: item.title }));
  }, [listActions]);

  const currentOption = options[currentAction] || null;
  const count = listActions?.length;
  return (
    <header className='header-page'>
      <h3 className="header-page__title">{title}</h3>
      <Select
        className="header-page__select"
        value={currentOption}
        options={options}
        onChange={({ value }) => handlerSelect(value)}
      />
      {count > 0 ?
        <GroupButtonPagination
          handlerPrev={handlerPrev}
          handlerNext={handlerNext}
          count={listActions?.length}
          current={currentAction} />
        : null
      }

    </header>
  );
}
