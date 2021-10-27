import RightSideLeftMain from './RightSideLeftMain';
import RightSideRightMain from './RightSideRightMain';
import '../css/RightSideMain.css';

const RightSideMain = () => (
  <div className="right-side-main d-flex" style={{ margin: '15px', padding: '20px' }}>
    <RightSideLeftMain />
    <RightSideRightMain />
  </div>
);
export default RightSideMain;
