import { useEffect, useState } from 'react';
import web3 from 'web3'
import '../css/RightSideBody.css';


const RightSideBody = () => {
  const [currentAddr, setAddr] = useState(() => {
    if (window.ethereum) {
      return (window.ethereum && window.ethereum.selectedAddress) || ''
    }
    return ''
  });
  const [sendCoinLoading, setSendLoading] = useState(false);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const result = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (result && result[0]) {
          setAddr(result)
          console.log(result)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  const handleSendCoin = async () => {
    setSendLoading(true);

    const value = '0.01';
    const wei = web3.utils.toWei(value);
    const toHext = web3.utils.toHex(wei)

    try {
      const transactionParameters = {
        nonce: '0x00', // ignored by MetaMask
        gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
        gas: '0x2710', // customizable by user during MetaMask confirmation.
        to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: toHext, // Only required to send ether to the recipient from the initiating external account.
        data:
          '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
        chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      };
      if (window.ethereum) {
        const result = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        })
        setSendLoading(false)
      }
    } catch (e) {
      console.log(e);
      setSendLoading(false)
    }
  }


  useEffect(() => {
    if (!window.ethereum) {
      alert('tải metamask ngay')
    }
  }, [])


  return (
    (
      <div style={{ margin: '15px' }}>
        <div
          className="body-header w-100 d-flex flex-column justify-content-between align-items-center text-center"
          style={{
            height: '106px',
            color: 'white',
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: '600',
            lineHeight: '1.75',
            fontSize: '13.2px',
            letterSpacing: '0.5px'
          }}
        >
          <div
            style={{
              backgroundColor: '#2196f3', width: '224px', marginTop: '5px', height: '36px', borderRadius: '24px', textAlign: 'center', paddingTop: '6px'
            }}
            onClick={handleConnectWallet}
          >
            CONNECT WALLET TO START
          </div>
          <div style={{
            backgroundColor: '#00bfa5', width: '152px', marginBottom: '5px', height: '36px', borderRadius: '24px', textAlign: 'center', paddingTop: '6px'
          }}
          >
            WALLETCONNECT
          </div>
          {currentAddr && <button style={{
            backgroundColor: '#00bfa5', width: '152px', marginBottom: '5px', height: '36px', borderRadius: '24px', textAlign: 'center', paddingTop: '6px'
          }}
            onClick={handleSendCoin}
            disabled={sendCoinLoading}
          >
            {sendCoinLoading ? 'Processing' : 'Send coin'}
          </button>}
        </div>
      </div>
    )
  )
};
export default RightSideBody;
