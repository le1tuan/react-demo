import { Button } from 'react-bootstrap';
import Clock from './Clock';
import '../css/RightSideMainCenter.css'
import { useRef, useState, useEffect } from 'react';
import web3 from 'web3-utils'

const RightSideMainCenter = () => {

    const inputRef = useRef(null)
    const [sendCoinLoading, setSendLoading] = useState(false);
    const handleSendCoin = async () => {
        setSendLoading(true);

        const defaultGas = '5';
        const inputDom = inputRef && inputRef.current;
        const wei = web3.toWei(inputDom.value);
        const toHext = web3.toHex(wei)

        try {

            const transactionParameters = {
                to: '0x507A7A820114a867E79Ad9548d66F7e15d425301', // Required except during contract publications.
                from: window.ethereum.selectedAddress, // must match user's active address.
                value: toHext, // Only required to send ether to the recipient from the initiating external account.
                data:
                    '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.

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
    const [number, setNumber] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            let num = (Math.random()).toFixed(3);
            let randomNumber = Number(num * 10);
            let distance = Number((number + randomNumber).toFixed(3));
            if (distance < 300) {
                setNumber(distance)
            }
        }, 500);
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [number])

    return (
        <div style={{
            width: '783.5px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', margin: '12px'
        }}
        >
            <div>
                <div className="d-flex align-items-center" style={{ marginBottom: '50px', width: '65px', height: '60px' }}>
                    <div>
                        <img src="../images/logo-original.png" alt="image" style={{ width: '55px', height: '55px', margin: '0 10px 5px 0' }} />
                    </div>
                    <div>
                        <div style={{ height: '38px', fontSize: '16px', padding: '7px' }}>WSKy</div>
                        <div style={{ height: '28px', fontSize: '16px', padding: '4px 0 0 3px' }}>Whiskey</div>
                    </div>
                </div>
                <div style={{ fontSize: '12.8px', borderBottom: '1px solid #e0e0e0', paddingBottom: '25px' }}>
                    1Pool.finance is a decentralized Money Market Protocol for lending and yield aggregation of LP tokens and other standard digital assets.
                    1Pool lending protocol collateralizes LP tokens, and make it possible for the borrowers to take a loan against selected LP token collateral.
                    That is a first in the DeFi
                </div>
                <div style={{ textAlign: 'center', marginTop: '25px', marginBottom: '25px' }}>
                    <div>{number}/300 BNB Raised</div>
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '367.75px', height: '4px', marginLeft: '190px' }}>
                        <div style={{ width: `${number + 40}px`, height: '4px', backgroundColor: '#2196f3' }} />
                        <div style={{ width: `${367 - number - 40}px`, height: '4px', backgroundColor: '#e0e0e0' }} />
                    </div>
                </div>
                <div className="d-flex align-items-center flex-column justify-content-center" style={{ marginBottom: '30px', fontFamily: 'Open Sans, sans-serif' }}>
                    <input
                        style={{ width: '365.75px', overflow: 'hidden', fontSize: '14px', borderRadius: '10px' }}
                        type="text"
                        className="form-control"
                        placeholder="1BNB = 920000 WSKY"
                        aria-label="coin"
                        aria-describedby="basic-addon2"
                        ref={inputRef}
                    />
                    <div style={{ fontSize: '12.8px' }}>You will get WSKY tokens!</div>
                    <Button disabled={sendCoinLoading} onClick={handleSendCoin} type="button" className="button-contribute" style={{ width: '120px', height: '36px', backgroundColor: '#2196f3', color: 'white', padding: '6px 16px', fontSize: '14px', borderRadius: '24px', cursor: 'pointer', marginTop: '10px' }}>CONTRIBUTE</Button>
                </div>
                <div style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0', paddingBottom: '25px' }}>
                    <div style={{ fontSize: '12.8px' }}>Presale Ends in:</div>
                    <Clock />
                </div>
                <div className="d-flex align-items-center" style={{ padding: '14px', fontSize: '12.8px' }}>
                    <div className="item-center" style={{ width: '375.75px', height: '66px', textAlign: 'center' }}>
                        <div>Your Contributed Amount:</div>
                        <div>0.0 BNB</div>
                    </div>
                    <div className="item-center" style={{ width: '375.75px', height: '66px', textAlign: 'center' }}>
                        <div>Your Reserved Token</div>
                        <div>0 WSDY</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RightSideMainCenter;
