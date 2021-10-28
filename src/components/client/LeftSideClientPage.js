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
          width: '228px', height: '48px', padding: '16px 0 16px 24px', cursor: 'pointer', fontWeight: 'bold', backgroundColor: '#E6F6FF'
        }}
      >
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM0IiBoZWlnaHQ9IjEzNCIgdmlld0JveD0iMCAwIDEzNCAxMzQiPgogIDxkZWZzPgogICAgPGZpbHRlciBpZD0iUmVjdGFuZ2xlXzEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMzQiIGhlaWdodD0iMTM0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8ZmVPZmZzZXQgZHk9IjMiIGlucHV0PSJTb3VyY2VBbHBoYSIvPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiByZXN1bHQ9ImJsdXIiLz4KICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMC4xNjEiLz4KICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxnIGlkPSJHcm91cF8zIiBkYXRhLW5hbWU9Ikdyb3VwIDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgLTIpIj4KICAgIDxnIGlkPSJHcm91cF8xIiBkYXRhLW5hbWU9Ikdyb3VwIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcgOCkiPgogICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAtOSwgLTYpIiBmaWx0ZXI9InVybCgjUmVjdGFuZ2xlXzEpIj4KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEtMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMSIgd2lkdGg9IjExNiIgaGVpZ2h0PSIxMTYiIHJ4PSIyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOSA2KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8xLTIiIGRhdGEtbmFtZT0iR3JvdXAgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYuMjYxIDM1LjUyNCkiIG9wYWNpdHk9IjAuOTk5IiBzdHlsZT0iaXNvbGF0aW9uOiBpc29sYXRlIj4KICAgICAgICA8dGV4dCBpZD0iRHgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjI2MSAzNi40NzYpIiBmb250LXNpemU9IjQ1IiBmb250LWZhbWlseT0iQmFobnNjaHJpZnQiIGZvbnQtd2VpZ2h0PSI2MDAiPjx0c3BhbiB4PSIwIiB5PSIwIj5EeDwvdHNwYW4+PC90ZXh0PgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" style={{ width: '30px', height: '30px', marginRight: '10px' }} alt="icon" />

        <div style={{ fontSize: '12.8px', color: '#FF0000', fontWeight: 'bolder' }}>Version 3.1</div>
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
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path
                d="M512 224l-320 256v416h224v-256h192v256h224v-416l-320-256z M512 128l-192 153.6v-89.6h-128v191.998l-64 50.998 23.020 22.768 360.98-288.784 360.98 288.786 23.020-22.77-384-306.996z"
              />
            </svg>
          </div>
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
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path
                d="M821 558.4c-10-23-25.4-43.2-56.2-60.2-16.4-9-32.2-15.6-50.8-20 10.8-5 20-10.8 32.6-22 15-13.2 26.2-31.4 31.2-46.6 5.2-15 8.2-36 7-56.4-2.2-33.6-8.8-66.2-26.4-89.6s-42.4-41.4-75.2-54c-25.2-9.6-51-15.6-91-17.8v-127.8h-80v128h-64v-128h-82v128h-174.2v96h55.8c17.4 0 29.2 1.6 35.2 4.6 6.2 3 10.6 7 13 12 2.6 5 3.8 16.8 3.8 35v346.4c0 18-1.2 29.6-3.8 34.8s-4 9.8-10.2 12.6c-6.2 2.8-6.4 2.6-23.6 2.6h-52.8l-17.4 96h174v128h82v-128h64v128h80v-128.8c52-2.6 89-9.4 118.8-20.6 38.6-14.4 68.2-35.4 89.4-63s29.8-69.8 31.6-102.4c1.4-29-1.8-66.4-10.8-86.8zM448 300h64v148h-64v-148zM448 724v-180h64v180h-64zM592 307.8c12 5 19.8 15 27.6 25.4 8.6 11.4 13 26.6 13 42.8 0 15.6-5.8 29-15 41-7.6 9.8-13.6 16.6-25.6 22.2v-131.4zM649.6 681.2c-15.6 13.8-24.6 20.2-44.2 27.6-4 1.6-9.4 2.8-13.4 3.8v-165.6c10 1.6 15.2 3.6 22.6 6.8 15.6 6.6 30.4 13.8 39.6 26.4s16 31.2 16 49.4c0 21.8-5.6 38.4-20.6 51.6z"
              />
            </svg>
          </div>
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
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path
                d="M704 296c-74-104-145-165-192-200-46.2 32-117.2 96.2-191.6 199.6s-125.8 215.6-128.2 340c0 2.4-0.2 5-0.2 7.4 0 36.6 7.8 71.6 21.8 103.6 8.2 18.6 18.4 36 30.4 52.4 57 77.6 155.6 128.8 267.6 128.8 176.8 0 320.2-127.6 320.2-284.8 0-126.6-54-243-128-347zM531.8 822c-31.6 0-65.4-2.8-91.8-14.8 174-27.2 238-91.2 279.6-244.4 10.4 22.4 12.4 47.4 12.4 73.6 0 102.4-89.6 185.6-200.2 185.6z"
              />
            </svg>
          </div>
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
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path
                d="M928 96c0 0-39.6 2.8-106.2 54.4-31 24-324.4 241.2-324.4 241.2l-319.4-15.8-82 73 204 102.4-16 20.2-163.2 8.2-13.4 67.2 121.2 94.4-53.4 107.2 107.4-53 94.6 121.2 67.2-13.4 8.2-163.2 20.2-15.8 102.4 203.8 73-81.8-15.8-319.4c0 0 217.2-293.4 241.2-324 51.8-67.2 54.4-106.8 54.4-106.8z"
              />
            </svg>
          </div>
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
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path d="M605.4 128l-319.4 448h191.6l-59 320 319.4-448h-191.6l59-320z" />
            </svg>
          </div>
          <div style={{ width: '140px' }} className="nav-item-text">DxFairLaunch</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {secondOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
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
          onClick={handleThirdClick}
        >
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path
                d="M752 372h-40v-80c0-110-90-200-200-200s-200 90-200 200v80h-40c-44.004 0-80 35.996-80 80v400c0 44.004 35.996 80 80 80h480c44.004 0 80-35.996 80-80v-400c0-44.004-35.996-80-80-80zM512 736c-44.004 0-80-35.996-80-80s35.996-80 80-80 80 35.996 80 80-35.996 80-80 80zM636.004 372h-248.008v-80c0-68.008 56.006-124.004 124.004-124.004 68.008 0 124.004 55.996 124.004 124.004v80z"
              />
            </svg>
          </div>
          <div style={{ width: '140px' }} className="nav-item-text">DxLock</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {thirdOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
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
          onClick={handleFourClick}
        >
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path
                d="M156.2 411.2c-4.8 0-9.8-1.2-14.2-3.8-13.4-7.8-18-24.8-10.2-38.2 35.6-60 143.8-200.2 380.2-200.2 102.4 0 192.2 27.2 266.8 80.8 61.4 44 95.8 93.8 112.2 117.8 8.8 12.8 5.4 30-7.4 38.8-12.8 8.6-30.4 5.4-39.2-7.4-29.8-43.2-120.2-174.4-332.4-174.4-207.2 0-300.8 120.8-331.4 172.6-5.2 9.2-14.6 14-24.4 14z M631 960c-2.4 0-4.6-0.2-7-0.8-171.4-43-235.4-216.2-238-223.4l-0.4-1.6c-1.4-5-35.8-123.8 17-193.4 24.2-31.8 61-48 109.6-48 45.2 0 77.8 14.2 100.2 43.6 18.4 24 25.8 53.6 33 82.2 15 59.4 25.8 90.6 88.2 93.8 27.4 1.4 45.4-14.8 55.6-28.6 27.6-37.6 32.4-99 11.6-153-26.8-70-121.6-201.8-288.8-201.8-71.4 0-137 23.2-189.6 66.8-43.6 36.2-78.2 87.2-94.8 139.6-30.8 97.6 9.6 251 10 252.4 4 14.8-5 30.2-20 34-15 4-30.6-5-34.6-19.8-1.8-7-45-170.6-9.4-283.4 38.8-122.2 158.4-245.4 338.4-245.4 83.2 0 161.8 28.6 227.4 82.6 50.8 42 92.4 98.4 114 154.8 27.6 72 20.2 152.8-18.8 205.6-26 35.2-63 53.6-104 51.6-106.8-5.4-126-80.8-140-135.8-14.4-56.4-23.6-83.6-78.6-83.6-30.2 0-51.4 8.4-64.6 25.8-18 23.8-19.4 61-17.4 88 2 28.2 8 51 9.4 55.6 4.4 11.2 61.6 153 198.6 187.4 15.2 3.8 24.2 19 20.4 33.8-3.4 12.6-14.8 21-27.4 21z M411 947.2c-7.6 0-15-3-20.6-8.8-68.6-72.8-107.4-154.2-122-256v-0.6c-8.2-67.4 3.8-162.8 62.6-228.4 43.4-48.4 104.4-73 181-73 90.6 0 161.8 42.6 206.2 123 32.2 58.4 38.6 116.6 38.8 119 1.6 15.4-9.8 29-25.2 30.6s-29.4-9.6-31-24.8v0c0-0.6-5.6-50.6-33-99.4-34.4-61.4-86.8-92.6-156-92.6-59.8 0-106.6 18.2-138.8 54.2-46.4 51.8-55.4 131.6-49 184.4 12.8 90 47 161.6 107.4 225.6 10.6 11.2 10 29-1.4 39.4-5.2 4.8-12.2 7.4-19 7.4z M727 867c-60 0-111-16.8-151.8-50.2-82-66.8-91.2-175.6-91.6-180.2-1.2-15.4 10.4-28.8 26-30s29 10.2 30.2 25.6c0.2 1.6 8.4 90.6 71.6 141.8 37.4 30.2 87.4 42.2 149 35.2 15.4-1.8 29.4 9.2 31.2 24.6s-9.4 29.2-24.8 30.8c-13.6 1.6-27 2.4-39.8 2.4z M774.4 125.2c-23.4-15.4-106.4-61.2-262.4-61.2-163.8 0-247 50.6-265.4 63.4-1.2 0.8-2.4 1.6-3.4 2.6-0.2 0.2-0.4 0.2-0.4 0.2v0c-5.8 5.2-9.4 12.6-9.4 20.8 0 15.4 12.6 27.8 28.2 27.8 6.2 0 11.8-2 16.4-5.2v0l-0.2 0.2c0.8-0.6 72.6-54 234.2-54s233.4 53.6 234.2 54l-0.2-0.2 0.4-0.4c4.8 3.6 10.6 5.6 17 5.6 15.6 0 28.2-12.4 28.2-27.8 0-11.6-7-21.6-17.2-25.8z"
              />
            </svg>
          </div>
          <div style={{ width: '140px' }} className="nav-item-text">Audit/KYC</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {fourOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
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
          onClick={handleFiveClick}
        >
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path
                d="M498.4 448c-28.4-80.4-110.2-144-200.4-144-114.4 0-202 93.6-202 208s91.6 208 206 208c90.2 0 168.2-63.6 196.4-144h205.6v128h138.2v-128h85.8v-128h-429.6zM303.2 581c-38 0-69-31-69-69s31-69 69-69 69 31 69 69-31 69-69 69z"
              />
            </svg>
          </div>
          <div style={{ width: '140px' }} className="nav-item-text">DxSale DAO</div>
          <div style={{ width: '24px' }} className="icon-dropdown-down">
            {fiveOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
          </div>
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
          onClick={handleSixClick}
        >
          <div style={{ marginRight: '18px', color: '#757575' }}>
            <svg
              className="sc-bdVaJa fUuvxv"
              fill="#000000"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              rotate="0"
            >
              <path d="M960 256h-896v640h896v-640z M144 192h736v32h-736v-32z M208 128h608v32h-608v-32z" />
            </svg>
          </div>
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
