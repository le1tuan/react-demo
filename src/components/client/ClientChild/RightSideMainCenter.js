import { Button } from 'react-bootstrap'
import Clock from './Clock';
import '../css/RightSideMainCenter.css'

const RightSideMainCenter = () => (
  <div style={{
    width: '783.5px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', margin: '12px'
  }}
  >
    <div>
      <div className="d-flex align-items-center" style={{ marginBottom: '50px', width: '65px', height: '60px' }}>
        <div>
          <img src="../images/logo-original.png" alt="image" style={{ width: '55px', height: '55px', margin: '0 10px 5px 0' }} />
        </div>
        <div>
          <div style={{ height: '38px', fontSize: '16px', padding: '7px' }}>WSKy</div>
          <div style={{ height: '28px', fontSize: '16px', padding: '4px 0 0 3px' }}>Whiskey</div>
        </div>
      </div>
      <div style={{ fontSize: '12.8px', borderBottom: '1px solid #e0e0e0', paddingBottom: '25px' }}>
        1Pool.finance is a decentralized Money Market Protocol for lending and yield aggregation of LP tokens and other standard digital assets.
        1Pool lending protocol collateralizes LP tokens, and make it possible for the borrowers to take a loan against selected LP token collateral.
        That is a first in the DeFi
      </div>
      <div style={{ textAlign: 'center', marginTop: '25px', marginBottom: '25px' }}>
        <div>195/300 BNB Raised</div>
        <div className="d-flex align-items-center justify-content-center" style={{ width: '367.75px', height: '4px', marginLeft: '190px' }}>
          <div style={{ width: '239px', height: '4px', backgroundColor: '#2196f3' }} />
          <div style={{ width: '128.75px', height: '4px', backgroundColor: '#e0e0e0' }} />
        </div>
      </div>
      <div className="d-flex align-items-center flex-column justify-content-center" style={{ marginBottom: '30px', fontFamily: 'Open Sans, sans-serif' }}>
        <input
          style={{ width: '365.75px', overflow: 'hidden', fontSize: '14px', borderRadius: '10px' }}
          type="text"
          className="form-control"
          placeholder="1BNB = 920000 WSKY"
          aria-label="coin"
          aria-describedby="basic-addon2"
        />
        <div style={{ fontSize: '12.8px' }}>You will get WSKY tokens!</div>
        <Button type="button" className="button-contribute" style={{ width: '120px', height: '36px', backgroundColor: '#2196f3', color: 'white', padding: '6px 16px', fontSize: '14px', borderRadius: '24px', cursor: 'pointer', marginTop: '10px' }}>CONTRIBUTE</Button>
      </div>
      <div style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0', paddingBottom: '25px' }}>
        <div style={{ fontSize: '12.8px' }}>Presale Ends in:</div>
        <Clock />
      </div>
      <div className="d-flex align-items-center" style={{ padding: '14px', fontSize: '12.8px' }}>
        <div className="item-center" style={{ width: '375.75px', height: '66px', textAlign: 'center' }}>
          <div>Your Contributed Amount:</div>
          <div>0.0 BNB</div>
        </div>
        <div className="item-center" style={{ width: '375.75px', height: '66px', textAlign: 'center' }}>
          <div>Your Reserved Token</div>
          <div>0 WSDY</div>
        </div>
      </div>
    </div>
  </div>
);
export default RightSideMainCenter;
