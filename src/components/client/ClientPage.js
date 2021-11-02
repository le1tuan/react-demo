import LeftSideClientPage from './LeftSideClientPage';
import RightSideClientPage from './RightSideClientPage';

const ClientPage = () => (
  <div className="d-flex" style={{ fontFamily: 'Open Sans, sans-serif' }}>
    <LeftSideClientPage />
    <RightSideClientPage />
  </div>
);
export default ClientPage;
