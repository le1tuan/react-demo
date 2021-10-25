import * as React from 'react';
import { NavLink } from 'react-bootstrap';
import './css/LeftSideClientPage.css';

const LeftSideClientPage = () => {
  const [firstOpen, setFirstOpen] = React.useState(true);
  const [secondOpen, setSecondOpen] = React.useState(true);
  const [thirdOpen, setThirdOpen] = React.useState(true);
  const [fourOpen, setFourOpen] = React.useState(true);
  const [fiveOpen, setFiveOpen] = React.useState(true);
  const [sixOpen, setSixOpen] = React.useState(true);

  const handleFirstClick = () => {
    setFirstOpen(!firstOpen);
  };
  const handleSecondClick = () => {
    setSecondOpen(!secondOpen);
  };
  const handleThirdClick = () => {
    setThirdOpen(!thirdOpen);
  };
  const handleFourClick = () => {
    setFourOpen(!fourOpen);
  };
  const handleFiveClick = () => {
    setFiveOpen(!fiveOpen);
  };
  const handleSixClick = () => {
    setSixOpen(!sixOpen);
  };
  return (
    <div className="left-size-main" style={{ maxWidth: '240px', backgroundColor: 'white' }}>

      <NavLink
        className="d-flex justify-content-center align-items-center p-0"
        style={{
          width: '228px', height: '48px', padding: '8px 0 8px 24px', margin: '8px 0', cursor: 'pointer', fontWeight: 'bold'
        }}
      >
        <div className="text-black">Dx</div>
        <div className="text-danger">Version 3.1</div>
      </NavLink>
      <div style={{ padding: '16px 12px 40px 0' }}>
        <NavLink
          className="item-nav d-flex align-items-center"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            fontSize: '16px',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">Home</div>
        </NavLink>
        <NavLink
          className="item-nav d-flex align-items-center"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            fontSize: '16px',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5
          }}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">DxMint</div>
        </NavLink>
        <NavLink
          className="item-nav d-flex align-items-center"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            fontSize: '16px',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5
          }}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">DxDrop</div>
        </NavLink>
        <NavLink
          className="item-nav d-flex align-items-center"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            fontSize: '16px',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5
          }}
          onClick={handleFirstClick}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">DxLaunch</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {firstOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
        </NavLink>
        <NavLink
          className="item-nav d-flex align-items-center"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            fontSize: '16px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5
          }}
          onClick={handleSecondClick}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">DxFairLaunch</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {secondOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
        </NavLink>
        <NavLink
          className="item-nav d-flex"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            fontSize: '16px',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5
          }}
          onClick={handleThirdClick}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">DxLock</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {thirdOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
        </NavLink>
        <NavLink
          className="item-nav d-flex"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            fontSize: '16px',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5
          }}
          onClick={handleFourClick}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">Audit/KYC</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {fourOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
        </NavLink>
        <NavLink
          className="item-nav d-flex"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            fontSize: '16px',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5
          }}
          onClick={handleFiveClick}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">DxSale DAO</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {fiveOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
        </NavLink>
        <NavLink
          className="item-nav d-flex"
          style={{
            width: '228px',
            height: '48px',
            padding: '8px 0 8px 24px',
            margin: '8px 0',
            borderRadius: '0 24px 24px 0',
            fontSize: '16px',
            color: '#777777',
            fontWeight: 400,
            lineHeight: 1.5
          }}
          onClick={handleSixClick}
        >
          <div style={{ width: '22px', marginRight: '18px' }} className="nav-item-icon"><i className="fas fa-home" /></div>
          <div style={{ width: '140px' }} className="nav-item-text">Archives</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {sixOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default LeftSideClientPage;
