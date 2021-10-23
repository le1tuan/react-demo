import React, { useRef, useState } from 'react';
import {
  Typography, Button, Grid, Paper, TextField, Divider, IconButton,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { FlightTakeoff } from '@material-ui/icons';
import {
  PlayCircle as PlayCircleIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  ExternalLink as ExternalLinkIcon
} from 'react-feather';
import './Dashboard.css';
import ManageSale from '../../components/common/ManageSale';
import fakeData from './fakeData';
import CardDetails from './components/CardDetails';

export default function Dashboard() {
  const StartButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#2196F3',
    borderRadius: '20px',
  }));

  const ConnectButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#00BFA5',
    borderRadius: '20px',
  }));

  const CreateManageSaleBtn = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#2196F3',
    borderRadius: '20px',
    fontSize: '70%',
    padding: '7px 12px'
  }));

  const DividerBtn = styled(Button)(() => ({
    margin: '8px 0',
    bacground: 'none'
  }));

  const PaperContainer = styled(Paper)(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  }));

  const FirstSentence = styled(Typography)(() => ({
    fontSize: '100%',
    margin: '0',
    color: '#1565C0',
    fontWeight: '400',
    padding: '10px',
    width: '100%',
    lineHeight: '1.6'
  }));

  const CenterGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }));

  const FullyInput = styled(TextField)(() => ({
    paddingLeft: '0px',
    fontSize: '14px',
  }));

  const SearchButton = styled(Button)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: '100%'
  }));

  const StateButton = styled(Button)(() => ({
    color: 'black',
    borderRadius: '20px'
  }));

  const TypographyCaption = styled(Typography)(() => ({
    fontSize: '0.75rem',
    fontWeight: '400',
    lineHeight: '2'
  }));

  const IconWrapper = styled('div')`
    @media (max-width: 600px) {
      display: none !important;
    }
  `;

  const styles = {
    iconCover: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '48px',
      height: '48px',
      border: '1px solid rgb(231, 239, 248)',
      background: 'rgb(241, 248, 254)',
      boxShadow: '0 2px 15px -5px #2196f3',
      textAlign: 'center',
      lineHeight: '44px',
      marginRight: '24px',
      borderRadius: '8px',
      verticalAlign: 'middle'
    },
    verticallyCenter: {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    paperPadding: {
      padding: '12px'
    }
  };

  return (
    <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={12} xs={12} sm={12}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <br />
              <StartButton variant="contained">Connect wallet to start</StartButton>
              <br />
              <ConnectButton variant="contained">Walletconnect</ConnectButton>
            </div>
          </Grid>
        </Grid>
      </div>
      <DividerBtn />
      <ManageSale
        leftIcon={(
          <IconWrapper className="" style={styles.iconCover}>
            <FlightTakeoff sx={{ color: '#2196F3' }} />
          </IconWrapper>
        )}
        title="Decentralized Launchpad With Instant Listing And Liquidity Locking"
        buttonText="Create or manage sale"
        inputPlaceHolder="Search by token address (Ex. 0x97bb08ba41f033beaac315169fc566ac9e0daf52)"
        filterComponent={(
          <Grid container style={{ paddingTop: '15px' }}>
            <CenterGrid item xs={3} />
            <CenterGrid item xs={2}>
              <StateButton>
                <span className="stateButton">ACTIVE</span>
                <PlayCircleIcon size={15} />
              </StateButton>
            </CenterGrid>
            <CenterGrid item xs={2}>
              <StateButton>
                <span className="stateButton">SUCCESS</span>
                <CheckCircleIcon size={15} />
              </StateButton>
            </CenterGrid>
            <CenterGrid item xs={2}>
              <StateButton>
                <span className="stateButton">FAILED</span>
                <XCircleIcon size={15} />
              </StateButton>
            </CenterGrid>
            <CenterGrid item xs={3} />
          </Grid>
        )}
      />
      <hr />
      <div style={{ width: '100%' }}>
        <Grid container>
          {
            fakeData && fakeData.map((data) => (
              <Grid item xl={3} lg={3} md={4} sm={12} xs={12} style={styles.paperPadding}>
                <PaperContainer elevation={0}>
                  <div style={{
                    display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', marginBottom: '40px'
                  }}
                  >
                    <div className="">
                      <img className="labelIcon" src={data.icon} alt="doge" />
                    </div>
                    <div>
                      <Typography style={{ color: '#1565C0', fontSize: '80%' }}>{data.id}</Typography>
                      <Typography style={{ fontSize: '80%' }}>{data.name}</Typography>
                    </div>
                  </div>
                  <CardDetails
                    data={data}
                  />
                  <Divider
                    light="false"
                    variant="fullWidth"
                    style={{
                      backgroundColor: '#0000001f', margin: '24px 0px', height: 1, width: '100%'
                    }}
                  />
                  <div style={{
                    position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column'
                  }}
                  >
                    <div style={{ fontSize: '90%', lineHeight: '1.5' }}>Sale starts in:</div>
                    <span style={{ fontSize: '80%', lineHeight: '1.5' }}>{data.startIn}</span>
                    <IconButton style={{ color: '#2196F3', position: 'absolute', right: '0' }} size="small">
                      <ExternalLinkIcon fontSize="inherit" size={15} />
                    </IconButton>
                  </div>
                </PaperContainer>
              </Grid>
            ))
          }
        </Grid>
      </div>
      <div style={{ width: '100%', margin: '36px 0px 24px 0px' }}>
        <Paper elevation={0} style={{ padding: '8px 16px' }}>
          <Grid container>
            <Grid item md={2} xs={2} />
            <Grid item md={3} xs={3}><div style={{ width: '100%', textAlign: 'center' }}><Button style={{ padding: '7px 12px', borderRadius: 20 }} variant="contained">LOAD 4</Button></div></Grid>
            <Grid item md={2} xs={2}>
              <div style={{ width: '100%', textAlign: 'center', height: '100%' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', height: '100%', width: '100%', justifyContent: 'center'
                }}
                >
                  4/1012
                </div>
              </div>
            </Grid>
            <Grid item md={3} xs={3}><div style={{ width: '100%', textAlign: 'center' }}><Button style={{ padding: '7px 12px', borderRadius: 20 }} variant="contained">LOAD 20</Button></div></Grid>
            <Grid item md={2} xs={2} />
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
