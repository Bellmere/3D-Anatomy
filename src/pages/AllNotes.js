import { Container } from 'components/styled/container/container';
import { NoteList } from 'components/NoteList/NoteList';
import { Filter } from 'components/filter/filter';

export default function Test() {
  return (
    <section>
      <Container>
        <Filter />
        <NoteList />
      </Container>
    </section>
  );
}
