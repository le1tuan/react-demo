import { Row, Col } from 'react-bootstrap';

const RightSideClientPage = () => (
  <Row className="p-0 right-size-main" style={{ maxWidth: '1680px' }}>
    <Col xs lg={12} className="p-0">
      <div className="right-side-header" style={{ height: '64px', backgroundColor: '#2196F3' }}>
        <div className="header-left">
          <div>
            <i className="fas fa-expand" />
          </div>
        </div>
        <div className="header-right">
          <div>
            <i className="far fa-paper-plane" />
          </div>
        </div>
      </div>
    </Col>
  </Row>
);
export default RightSideClientPage;
