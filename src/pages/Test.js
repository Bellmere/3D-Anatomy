import { useEffect } from 'react';
import { Container } from 'components/styled/container/container';
import IFrameHuman from '../components/biodigital/IFrameHuman.jsx';
import AuthHuman from '../service/biodigital/human/AuthHuman';



export default function Test() {
  useEffect(() => {
    new AuthHuman().auth();
  }, [])
  return (
    <div>
      <Container>
        <h2>Private Page</h2>
        <IFrameHuman />
      </Container>
    </div>
  );
}
