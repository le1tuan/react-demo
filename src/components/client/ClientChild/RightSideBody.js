import '../css/RightSideBody.css';

const RightSideBody = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '25px' }}>
    <div className="d-flex align-items-center justify-content-center" style={{ color: '#2096f3', width: '150px', height: '32px', border: '1px solid #2096f3', fontSize: '13px', borderRadius: '24px', marginRight: '3px', cursor: 'pointer' }}>
      <div style={{ marginRight: '5px' }}>
        <svg
          className="MuiSvgIcon-root MuiChip-icon MuiChip-iconColorPrimary"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ color: '#2096f3', width: '24px', height: '24px' }}
          fill="#2096f3"
        >
          <path
            d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
          />
        </svg>
      </div>
      <div>
        Connect Wallet
      </div>
    </div>
    <div className="d-flex align-items-center justify-content-center" style={{ color: '#2096f3', width: '180px', height: '32px', border: '1px solid #2096f3', fontSize: '13px', borderRadius: '24px', marginLeft: '3px', cursor: 'pointer' }}>
      <div style={{ marginRight: '5px' }}>
        <img
          src="data:image/png;base64,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"
          className="MuiChip-icon MuiChip-iconColorPrimary"
          style={{ width: '10px' }}
        />
      </div>
      <div>
        Ethereum Network
      </div>
    </div>
  </div>
);
export default RightSideBody;
