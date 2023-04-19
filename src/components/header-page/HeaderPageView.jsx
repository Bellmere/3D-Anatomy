import { useMemo } from 'react';
import Select from 'react-select';
import BaseButton from '../buttons/base';
import GroupButtonPagination from '../buttons/group-button-pagination';
import './style.css';

export default function HeaderPageView(props) {
  const {
    title,
    currentAction,
    listActions,
    handlerPrev,
    handlerNext,
    handlerReset,
    handlerSelect,
  } = props;

  const options = useMemo(() => {
    return listActions.map((item, index) => ({ value: index, label: item.title }));
  }, [listActions]);

  const currentOption = options[currentAction];
  const count = listActions?.length;
  return (
    <header className='header-page'>
      <h3 className="header-page__title">{title}</h3>
      {count > 0 ?
        <GroupButtonPagination
          handlerPrev={handlerPrev}
          handlerNext={handlerNext}
          count={listActions?.length}
          current={currentAction} />
        : null
      }
      <BaseButton handlerClick={handlerReset}>Reset</BaseButton>
      <Select
        className="header-page__select"
        value={currentOption}
        options={options}
        onChange={({ value }) => handlerSelect(value)}
      />

    </header>
  );
}
