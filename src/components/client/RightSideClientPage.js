import { NavLink } from 'react-bootstrap';
import './css/RightSideClientPage.css';

const RightSideClientPage = () => (
  <div className="p-0 right-size-main w-100">
    <div className="p-0">
      <div className="right-side-header d-flex align-items-center justify-content-between" style={{ height: '64px', backgroundColor: '#2196F3' }}>
        <NavLink className="nav-item-icon">
          <div>
            <i className="fas fa-expand" />
          </div>
        </NavLink>
        <div className="header-right d-flex align-items-center">
          <div style={{
            width: 0, height: '20px', border: '1px solid #6eb4ec', margin: '0 10px'
          }}
          />
          <NavLink className="nav-item-icon" style={{ padding: '12px', width: '46px' }}>
            <i className="fas fa-paper-plane" />
          </NavLink>
          <NavLink className="nav-item-icon" style={{ marginRight: '15px', padding: '12px', width: '46px' }}>
            <i className="fas fa-paper-plane" />
          </NavLink>
          <NavLink style={{
            marginRight: '15px', color: 'white', padding: 0, width: '71.77px'
          }}
          >
            <span>Dx</span>
            <span>$1.11</span>
          </NavLink>
          <NavLink
            className="link-buy"
            style={{
              width: '83.14px', margin: '0 15px 0 5px', backgroundColor: '#00bfa5', padding: '6px 16px'
            }}
          >
            <span style={{
              color: 'white',
              fontSize: '12px',
              fontWeight: 600,
              lineHeight: 1.75,
            }}
            >
              BUY SALE
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);
export default RightSideClientPage;
