import '../css/RightSideRightMain.css';

const RightSideRightMain = () => (
  <div
    className="right-side-right-main"
    style={{
      width: '379.75px', height: '186.38px', padding: '20px', borderRadius: '8px'
    }}
  >
    <div className="text-center" style={{ fontWeight: 'bolder', lineHeight: 1.5 }}>Token Sale Details</div>
    <div className="d-flex align-items-center justify-content-center">
      <div>Presale Address</div>
      <div>Waiting For Deposit!</div>
    </div>
    <div className="d-flex align-items-center justify-content-center">
      <div>Token Address</div>
      <div style={{ color: '#2196F3' }}>0x..0x</div>
    </div>
  </div>
);
export default RightSideRightMain;
