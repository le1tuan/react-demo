import RightSideLeftMain from './RightSideLeftMain';
import RightSideRightMain from './RightSideRightMain';
import RightSideMainCenter from './RightSideMainCenter';

const RightSideMain = () => (
  <div className="right-side-main d-flex" style={{ padding: '23px' }}>
    <RightSideLeftMain />
    <RightSideMainCenter />
    <RightSideRightMain />
  </div>
);
export default RightSideMain;
