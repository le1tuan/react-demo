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
