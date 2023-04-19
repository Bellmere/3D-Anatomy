import { useState } from 'react';

import { Container } from 'components/styled/container/container';
import { NoteList } from 'components/NoteList/NoteList';
import { Filter } from 'components/filter/filter';
import { Loader } from 'components/loader/loader';

export default function Notes() {
  const [notes, setNotes] = useState([
    { id: 'id-1', title: 'Anatomy Terminology Part 2', link: '#' },
    { id: 'id-2', title: 'Anatomy Terminology Webinar Part 1', link: '#' },
    { id: 'id-3', title: 'Ankle Sprain 2', link: '#' },
    { id: 'id-4', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-5', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-6', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-7', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-8', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-9', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-10', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-11', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-12', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-13', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-14', title: 'Ankle Sprain Video', link: '#' },
    { id: 'id-15', title: 'Ankle Sprain Video', link: '#' },
  ]);
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'filter':
        setFilter(value);
        break;
      default:
        break;
    }
  };

  const getFiltredList = () => {
    const searchList = notes.filter(note => {
      return note.title?.toLowerCase().includes(filter.toLowerCase());
    });
    return searchList;
  };

  const handleDelete = e => {
    setNotes(state => state.filter(note => note.id !== e));
  };

  return (
    <section>
      <Container>
        <Filter filter={filter} handleChange={handleChange} />
        <NoteList notes={getFiltredList()} handleDelete={handleDelete} />
        <Loader />
      </Container>
    </section>
  );
}
