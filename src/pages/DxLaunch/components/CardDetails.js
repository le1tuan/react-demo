import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import {
  Chip, CircularProgress, Typography
} from '@material-ui/core';
import debounce from 'lodash.debounce';

const CircleProgress = styled(CircularProgress)`
& .MuiCircularProgress-root {
  width: 140px !important;
  height: 140px !important;
}
`;

const TypographyCaption = styled(Typography)(() => ({
  fontSize: '0.75rem',
  fontWeight: '400',
  lineHeight: '2'
}));

const CardDetails = ({ data }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = debounce(() => {
    setIsHover(true);
  }, 200);

  const handleMouseLeave = debounce(() => {
    setIsHover(false);
  }, 200);

  return (
    (
      <div
        style={{
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          opacity: isHover ? '0.5' : '1'
        }}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{
          position: 'relative'
        }}
        >
          <CircleProgress
            variant="determinate"
            value={75}
            style={{
              width: 140,
              height: 140
            }}
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
          >
            <Chip
              label={isHover ? 'Click for Details' : data.status}
              color="success"
              style={{
                backgroundColor: '#a5d6a7',
                fontSize: 11,
                fontWeight: 400,
                color: '#000'
              }}
            />
          </div>
        </div>
        <ul style={{ listStyleType: 'none' }}>
          <li style={{
            margin: '24px 8px 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
          }}
          >
            <TypographyCaption className="primary-color-text">
              Raised:
              {' '}
              {data.raised}
            </TypographyCaption>
            <TypographyCaption>
              Soft Cap:
              {' '}
              {data.sortCap}
            </TypographyCaption>
            <TypographyCaption>
              Liquidity:
              {' '}
              {data.liquidity}
            </TypographyCaption>
            <TypographyCaption>
              Unlocks in:
              {' '}
              {data.unLocksIn}
            </TypographyCaption>
            <Chip
              label="Unaudited Contract"
              style={{
                marginTop: '5px', height: '20px', fontSize: '65%', backgroundColor: '#e0e0e0'
              }}
            />
          </li>
        </ul>
      </div>
    )
  );
};

export default CardDetails;
