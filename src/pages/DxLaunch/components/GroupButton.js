import React from 'react';
import { Button } from '@material-ui/core';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const GroupButton = () => (
  <>
    <Button
      variant="outlined"
      style={{
        marginRight: 8,
        borderRadius: 16,
        fontSize: 13,
        width: 150,
        height: 32,
        textTransform: 'none',
        padding: 0,
        border: '1px solid #2196F3'
      }}
    >
      <AccountBalanceWalletIcon />
      {' '}
      <span style={{
        lineHeight: '19.5px',
        paddingLeft: 12,
        fontWeight: 400,
        fontSize: 13,
      }}
      >
        Connect Wallet
      </span>
    </Button>
    <Button
      variant="outlined"
      style={{
        marginRight: 8,
        borderRadius: 16,
        fontSize: 13,
        // width: 150,
        height: 32,
        textTransform: 'none',
        padding: 10,
        border: '1px solid #2196F3'
      }}
    >
      <img alt="logo" src="data:image/png;base64,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" style={{ width: 15 }} />
      <span style={{
        lineHeight: '19.5px',
        paddingLeft: 12,
        fontWeight: 400,
        fontSize: 13,
      }}
      >
        Binance Smart Chain

      </span>
    </Button>
  </>
);

export default GroupButton;
