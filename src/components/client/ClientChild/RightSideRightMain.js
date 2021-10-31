import '../css/RightSideRightMain.css';

const RightSideRightMain = () => (
  <div
    className="right-side-right-main"
    style={{
      width: '379.75px', height: '186.38px', padding: '20px', borderRadius: '8px', fontSize: '12px'
    }}
  >
    <div
      className="text-center"
      style={{
        fontWeight: 'bolder', lineHeight: 1.5, fontSize: '16.32px', marginBottom: '20px'
      }}
    >
      Token Sale Details
    </div>
    <div className="d-flex align-items-center justify-content-center" style={{ borderBottom: '1px solid #e0e0e0' }}>
      <div style={{ width: '155.47px', textAlign: 'right', padding: '9.6px 19.2px' }}>Presale Address</div>
      <div style={{ width: '155.47px', padding: '9.6px 19.2px' }}>Waiting For Deposit!</div>
    </div>
    <div className="d-flex align-items-center justify-content-center" style={{ borderBottom: '1px solid #e0e0e0' }}>
      <div style={{ width: '155.47px', textAlign: 'right', padding: '9.6px 19.2px' }}>Token Address</div>
      <div style={{ color: '#2196F3', width: '155.47px', padding: '9.6px 19.2px' }}>0x..0x</div>
    </div>
  </div>
);
export default RightSideRightMain;
