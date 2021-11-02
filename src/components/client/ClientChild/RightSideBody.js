import { useEffect, useState } from 'react';
import '../css/RightSideBody.css';
import web3 from 'web3-utils'


const RightSideBody = () => {
  const [currentAddr, setAddr] = useState(() => {
    if (window.ethereum) {
      return (window.ethereum && window.ethereum.selectedAddress) || ''
    }
    return ''
  });

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      const defaultNetwork = '56'
      try {
        const result = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const switchNetwork = await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.toHex(defaultNetwork) }]
        })
        if (result && result[0]) {
          setAddr(result)
          console.log(result)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

<<<<<<< HEAD
=======

>>>>>>> 53b1d2086f689a36c59220e440b515a65e6c2b4f

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
              backgroundColor: '#2196f3', width: '224px', marginTop: '5px', height: '36px', borderRadius: '24px', textAlign: 'center', paddingTop: '6px', cursor: 'pointer'
            }}
            onClick={handleConnectWallet}
          >
            CONNECT WALLET TO START
          </div>
          <div style={{
            backgroundColor: '#00bfa5', width: '152px', marginBottom: '5px', height: '36px', borderRadius: '24px', textAlign: 'center', paddingTop: '6px', cursor: 'pointer'
          }}
          >
            WALLETCONNECT
          </div>
        </div>
      </div>
    )
  )
};
export default RightSideBody;
