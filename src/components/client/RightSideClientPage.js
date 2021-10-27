import { NavLink } from 'react-bootstrap';
import './css/RightSideClientPage.css';
import RightSideBody from './ClientChild/RightSideBody';
import RightSideMain from './ClientChild/RightSideMain';

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
          <NavLink className="nav-item-icon" style={{ padding: '12px', width: '46px', height: '46px' }}>
            <span className="MuiIconButton-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                style={{ color: 'white', height: '22px', width: '22px' }}
              >
                <path
                  d="M10.802 17.77a.703.703 0 1 1-.002 1.406a.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406a.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502c.028-.533.212-.947.493-1.107c.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956c.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474c0-.342-.354-.477-.355-.477c-.658-.315-1.669-.788-2.655-1.25c-2.108-.987-4.497-2.105-5.546-2.655c-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397C.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862a2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"
                  fill="currentColor"
                />
              </svg>
            </span>
          </NavLink>
          <NavLink
            className="nav-item-icon"
            style={{
              marginRight: '15px', padding: '12px', width: '46px', height: '46px'
            }}
          >
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
            className="link-buy text-center"
            style={{
              width: '83.14px', margin: '0 15px 0 5px', backgroundColor: '#00bfa5', paddingTop: '2px', height: '31px'
            }}
          >
            <span style={{
              color: 'white',
              fontSize: '11px',
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
    <RightSideBody />
    <RightSideMain />
  </div>
);
export default RightSideClientPage;
