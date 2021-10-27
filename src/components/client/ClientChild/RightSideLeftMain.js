const RightSideLeftMain = () => (
  <div style={{ width: '379.75px', backgroundColor: 'white', padding: '20px' }}>
    <div style={{ height: '40px' }} className="d-flex justify-content-center align-items-center">
      <div>Dx</div>
      <div style={{ fontWeight: 'bolder' }}>DYOR Area</div>
    </div>
    <div style={{ height: '230px' }} className="d-flex align-items-center justify-content-center">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: '184.44px', height: '184.44px', backgroundColor: 'white', border: '10px solid orange', borderRadius: '50%', color: '#F8F8F8', fontSize: '14px'
        }}
      >
        Distribution
      </div>
      <div>
        <div className="d-flex align-items-center">
          <div style={{
            width: '9.46px', height: '9.46px', backgroundColor: '#0066CC', margin: '0 10px 0 15px'
          }}
          />
          <div>Bum: 0%</div>
        </div>
        <div className="d-flex align-items-center">
          <div style={{
            width: '9.46px', height: '9.46px', backgroundColor: '#4CB140', margin: '0 10px 0 15px'
          }}
          />
          <div>DxLock: 0%</div>
        </div>
        <div className="d-flex align-items-center">
          <div style={{
            width: '9.46px', height: '9.46px', backgroundColor: '#009596', margin: '0 10px 0 15px'
          }}
          />
          <div>Presale: 0%</div>
        </div>
        <div className="d-flex align-items-center">
          <div style={{
            width: '9.46px', height: '9.46px', backgroundColor: '#F4C145', margin: '0 10px 0 15px'
          }}
          />
          <div>Liquidity: 0%</div>
        </div>
        <div className="d-flex align-items-center">
          <div style={{
            width: '9.46px', height: '9.46px', backgroundColor: '#EC7A08', margin: '0 10px 0 15px'
          }}
          />
          <div>Unlocked: 100%</div>
        </div>
      </div>
    </div>
    <div>
      <div style={{ marginBottom: '3px', fontSize: '10px' }} className="text-center">Click an item Below for more Details!</div>
      <div style={{ fontSize: '11px', textAlign: 'center' }} className="d-flex align-items-center justify-content-center flex-wrap">
        <div className="right-side-left-item" style={{ width: '164.88px', height: '38px' }}>
          <span>DxWarnings</span>
          <span style={{
            width: '14px', backgroundColor: '#2196F3', color: 'white', fontSize: '8px', padding: '0 3px', borderRadius: '50%'
          }}
          >
            1
          </span>
        </div>
        <div className="right-side-left-item" style={{ width: '164.88px', height: '38px' }}>
          <span>TokenSniifer</span>
          <span style={{
            width: '14px', backgroundColor: '#2196F3', color: 'white', fontSize: '8px', padding: '0 3px', borderRadius: '50%'
          }}
          >
            0
          </span>
        </div>
        <div className="right-side-left-item" style={{ width: '164.88px', height: '38px' }}>Disquis Chat</div>
        <div className="right-side-left-item" style={{ width: '164.88px', height: '38px' }}>DxSale PreSales Chat</div>
        <div className="right-side-left-item" style={{ width: '164.88px', height: '38px' }}>DxLock Token Locker</div>
        <div className="right-side-left-item" style={{ width: '164.88px', height: '38px' }}>Presale Tracking Bot</div>
        <div className="right-side-left-item" style={{ width: '164.88px', height: '38px' }}>
          <span>Not Audited</span>
          <span style={{ color: 'red' }}><i className="fas fa-ban" /></span>
        </div>
        <div className="right-side-left-item" style={{ width: '164.88px', height: '38px' }}>
          <span>Not KYCed</span>
          <span style={{ color: 'red' }}><i className="fas fa-ban" /></span>
        </div>
      </div>
    </div>
    <div style={{
      width: '337.75px', height: '56px', backgroundColor: '#F0F2FF', padding: '10px', textAlign: 'center', fontSize: '11px', borderRadius: '8px'
    }}
    >
      <div>Estimated Initial Marketcap:</div>
      <div>$0</div>
    </div>
    <div style={{ fontSize: '10px' }}>
      DxSale is a Decentralized Launchpad.
      Anyone can list a token at anytime. Sometimes owners may have
      malicious intent and as a user you must do your own research.
      The tools provided above can help you make a better decision but
      do not guarantee any level of safety!
    </div>
  </div>
);
export default RightSideLeftMain;
