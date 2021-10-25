import { Container } from 'react-bootstrap';
import LeftSideClientPage from './LeftSideClientPage';
import RightSideClientPage from './RightSideClientPage';

const ClientPage = () => (
  <Container fluid className="d-flex">
    <LeftSideClientPage />
    <RightSideClientPage />
  </Container>
);
export default ClientPage;
