import { Modal, Button } from 'react-bootstrap'
import '../css/Modal.css'
import { useState } from 'react';

const DisclaimerModal = (props) => {
  const { show, handleClose, handleShowBody } = props;
  const [ifChecked, setChecked] = useState(false)
  const onClickCheckBox = (e) => {
    setChecked(!ifChecked);
  }
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>
            <div style={{ textAlign: 'center', fontSize: '16px', color: '#7b7b7b', fontWeight: '500 ', lineHeight: 1.5, fontFamily: 'Open Sans, sans-serif' }}>
              Disclaimer
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ fontSize: '12.8px', color: '#7b7b7b', fontFamily: 'Open Sans, sans-serif' }}>
            <div style={{ marginBottom: '27px' }}>DxSale is a decentralized software tool. Anyone can create a token sale using their own tokens.</div>
            <div style={{ marginBottom: '27px' }}>Tokens can be clones and can have the same name as existing coins. Token creators can pretend to be owners of the real project. Please use provided social links to research and examine every project to avoid scams.</div>
            <div style={{ marginBottom: '27px' }}>In the DeFi zone project owners can load arbitrary token contracts. Please take extra caution and do your research when interacting with arbitrary tokens. You might not be able to claim or sell your token!</div>
            <div style={{ marginBottom: '27px' }}>Please pay close attention to all token metrics shared on the SALE's page.</div>
            <div style={{ marginBottom: '27px' }}>
              <a href="https://dxsale.app/app/termsandconditions" target="_blank" rel="noreferrer">Terms and Conditions</a>
            </div>
          </div>
          <label>
            <div className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
              <div className="checkbox-input" style={{ width: '50px', height: '30px', borderRadius: '20px' }}>
                <input style={{ width: '17px', height: '17px', marginTop: '7px', marginLeft: '7px', cursor: 'pointer' }} type="checkbox" onChange={onClickCheckBox} />
              </div>
              <div style={{ fontSize: '16px', fontFamily: 'Open Sans, sans-serif', color: 'red' }}>I have read and agree to the Terms and Conditions and I understand that I am responsible for doing my own research!</div>
            </div>
          </label>
          <div className="d-flex align-items-center justify-content-around" style={{ marginTop: '30px' }}>
            <Button onClick={handleClose} type="button" className="button-cancel" style={{ width: '85.39px', height: '36px', borderRadius: '24px', fontSize: '14px', fontFamily: 'Open Sans, sans-serif', padding: '6px 16px', backgroundColor: '#e0e0e0', cursor: 'pointer', border: 'none', color: '#1d1d1d' }}>CANCEL</Button>
            <Button
              disabled={!ifChecked}
              onClick={() => {
                handleShowBody();
                handleClose()
              }}
              type="button"
              className="button-confirm"
              style={{ width: '96.44px', height: '36px', borderRadius: '24px', fontSize: '14px', fontFamily: 'Open Sans, sans-serif', padding: '6px 11px', backgroundColor: '#2196f3', cursor: 'pointer', border: 'none' }}
            >
              CONFIRM
            </Button>
          </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}
export default DisclaimerModal;
