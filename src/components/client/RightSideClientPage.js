import { NavLink, Modal, Button } from 'react-bootstrap';
import './css/RightSideClientPage.css';
import { useState } from 'react';
import RightSideBody from './ClientChild/RightSideBody';
import RightSideMain from './ClientChild/RightSideMain';
import DisclaimerModal from './ClientChild/DIsclaimerModal';

const RightSideClientPage = () => {
  const [showModal, setCloseModal] = useState(false);
  const [showBody, setShowBody] = useState(false);

  const handleShowModal = () => {
    setCloseModal(!showModal)
  }
  const handleShowBody = () => {
    setShowBody(true);
  }
  window.onload = () => {
    setCloseModal(true)
  }
  return (
    <div className="p-0 right-size-main w-100">
      <div className="p-0" style={{ position: 'sticky' }}>
        <div className="right-side-header d-flex align-items-center justify-content-between" style={{ height: '64px', backgroundColor: '#2196F3' }}>
          <NavLink className="nav-item-icon">
            <span className="MuiIconButton-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
                style={{ color: 'white', textDecoration: 'none', fontSize: '1em' }}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M30 6h12v12"
                  />
                  <path d="M18 6H6v12" />
                  <path d="M30 42h12V30" />
                  <path
                    d="M18 42H6V30"
                  />
                  <path d="M42 6L29 19" />
                  <path d="M19 29L6 42" />
                </g>
              </svg>
            </span>
          </NavLink>
          <div className="header-right d-flex align-items-center">
            <div style={{
              width: 0, height: '20px', border: '1px solid #6eb4ec', margin: '0 10px'
            }}
            />
            <NavLink className="nav-item-icon" style={{ padding: '12px', width: '46px', height: '46px' }}>
              <span>
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
            <NavLink style={{ marginTop: '3px', marginRight: '7px' }}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                  style={{ color: 'white', height: '22px', width: '22px' }}
                >
                  <path
                    d="M29.919 6.163l-4.225 19.925c-.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744l-3.106 2.988c-.344.344-.631.631-1.294.631l.463-6.556L24.919 8.72c.519-.462-.113-.719-.806-.256l-14.75 9.288l-6.35-1.988c-1.381-.431-1.406-1.381.288-2.044l24.837-9.569c1.15-.431 2.156.256 1.781 2.013z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </NavLink>
            <NavLink
              className="d-flex"
              style={{
                marginTop: '5px', color: 'white', padding: 0, width: '71.77px', fontSize: '12.24px'
              }}
            >
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM0IiBoZWlnaHQ9IjEzNCIgdmlld0JveD0iMCAwIDEzNCAxMzQiPgogIDxkZWZzPgogICAgPGZpbHRlciBpZD0iUmVjdGFuZ2xlXzEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMzQiIGhlaWdodD0iMTM0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8ZmVPZmZzZXQgZHk9IjMiIGlucHV0PSJTb3VyY2VBbHBoYSIvPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiByZXN1bHQ9ImJsdXIiLz4KICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMC4xNjEiLz4KICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxnIGlkPSJHcm91cF8zIiBkYXRhLW5hbWU9Ikdyb3VwIDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgLTIpIj4KICAgIDxnIGlkPSJHcm91cF8xIiBkYXRhLW5hbWU9Ikdyb3VwIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcgOCkiPgogICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAtOSwgLTYpIiBmaWx0ZXI9InVybCgjUmVjdGFuZ2xlXzEpIj4KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEtMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMSIgd2lkdGg9IjExNiIgaGVpZ2h0PSIxMTYiIHJ4PSIyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOSA2KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8xLTIiIGRhdGEtbmFtZT0iR3JvdXAgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYuMjYxIDM1LjUyNCkiIG9wYWNpdHk9IjAuOTk5IiBzdHlsZT0iaXNvbGF0aW9uOiBpc29sYXRlIj4KICAgICAgICA8dGV4dCBpZD0iRHgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00IDM3LjUpIiBmb250LXNpemU9IjQ1IiBmb250LWZhbWlseT0iQmFobnNjaHJpZnQiIGZvbnQtd2VpZ2h0PSI2MDAiPjx0c3BhbiB4PSIwIiB5PSIwIj5EeDwvdHNwYW4+PC90ZXh0PgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" style={{ width: '22px', height: '22px' }} alt="icon" />
              <div style={{ marginLeft: '4px' }}>$1.11</div>
            </NavLink>
            <NavLink
              className="link-buy text-center"
              style={{
                width: '83.14px', margin: '0 15px 0 0', backgroundColor: '#00bfa5', paddingTop: '2px', height: '31px'
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
      {showBody ? (
        <div style={{ borderBottom: '1px solid #e0e0e0' }}>
          <RightSideBody />
          <RightSideMain />
        </div>
      ) : (
        <div style={{ borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ paddingBottom: '25px',
            borderBottom: '1px solid #e0e0e0' }}
          >
            <div
              className="d-flex flex-column align-items-center justify-content-between"
              style={{ maxWidth: '1631px',
                width: '100%',
                height: '150px',
                backgroundColor: 'white',
                borderRadius: '8px',
                textAlign: 'center',
                margin: '40px 25px 0',
                padding: '25px' }}
            >
              <div>Disclaimer not accepted. Please accept the disclaimer to continue!</div>
              <div
                style={{
                  backgroundColor: '#2196f3',
                  width: '156px',
                  marginTop: '5px',
                  height: '36px',
                  borderRadius: '24px',
                  textAlign: 'center',
                  paddingTop: '6px',
                  color: 'white',
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: '600',
                  lineHeight: '1.75',
                  fontSize: '13.2px',
                  letterSpacing: '0.5px',
                  cursor: 'pointer'
                }}
                onClick={handleShowModal}
              >
                OPEN DISCLAIMER
              </div>
              <DisclaimerModal show={showModal} handleClose={handleShowModal} handleShowBody={handleShowBody} />
            </div>
          </div>
        </div>
      )}
      <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', margin: '20px' }}>
        <div style={{ marginRight: '16px' }}>
          <img src="https://dxsale.network/assets/media/dx-logo-200.png" width="50px" height="50px" />
        </div>
        <div>
          <div style={{ maxWidth: '823.5px', width: '100%', fontSize: '12.8px' }}>Terms And Conditions</div>
          <div style={{ maxWidth: '823.5px', width: '100%', fontSize: '12.8px' }}>privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
export default RightSideClientPage;
