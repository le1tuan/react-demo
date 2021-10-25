import '../css/RightSideBody.css';

const RightSideBody = () => (
  <div style={{ margin: '15px' }}>
    <div
      className="body-header w-100 d-flex flex-column justify-content-between align-items-center text-center"
      style={{
        height: '106px',
        color: 'white',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: '600',
        lineHeight: '1.75',
        fontSize: '13.2px',
          letterSpacing: '0.5px'
      }}
    >
      <div style={{
        backgroundColor: '#2196f3', width: '224px', marginTop: '5px', height: '36px', borderRadius: '24px', textAlign: 'center', paddingTop: '6px'
      }}
      >
        CONNECT WALLET TO START
      </div>
      <div style={{
        backgroundColor: '#00bfa5', width: '152px', marginBottom: '5px', height: '36px', borderRadius: '24px', textAlign: 'center', paddingTop: '6px'
      }}
      >
        WALLETCONNECT
      </div>
    </div>
  </div>
);
export default RightSideBody;
