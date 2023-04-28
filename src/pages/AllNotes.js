import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { NoteList } from 'components/NoteList/NoteList';
import { Filter } from 'components/filter/filter';

import { StoreContext, useContext } from '../context';

export default observer(function Notes() {
  const { notes } = useContext(StoreContext);
  const { id } = useParams();
  useEffect(() => {
    notes.setSearch('');
    notes.getLearns(id);
  }, [id, notes]);

  const handleChange = (text) => notes.setSearch(text);
  return (
    <div className="container">
      <Filter handleChange={handleChange} value={notes.textSearch} />
      <NoteList />
    </div>
  );
});
