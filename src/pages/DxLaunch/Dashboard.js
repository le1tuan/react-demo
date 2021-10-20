import React from 'react'
import { Typography, Button, Grid, Paper, TextField, Chip, Divider, IconButton } from '@material-ui/core'
import { styled } from '@material-ui/system'
import { FlightTakeoff, Search } from '@material-ui/icons';
import {
    PlayCircle as PlayCircleIcon,
    CheckCircle as CheckCircleIcon,
    XCircle as XCircleIcon,
    ExternalLink as ExternalLinkIcon
} from 'react-feather';
import './Dashboard.css'
export default function Dashboard() {

    const StartButton = styled(Button)(({ theme }) => ({
        color: '#fff',
        backgroundColor: '#2196F3',
        borderRadius: '20px',
    }));

    const ConnectButton = styled(Button)(({ theme }) => ({
        color: '#fff',
        backgroundColor: '#00BFA5',
        borderRadius: '20px',
    }));

    const CreateManageSaleBtn = styled(Button)(({ theme }) => ({
        color: '#fff',
        backgroundColor: '#2196F3',
        borderRadius: '20px',
        fontSize: "70%",
        padding: "7px 12px"
    }));

    const DividerBtn = styled(Button)(({ theme }) => ({
        margin: '8px 0',
        bacground: 'none'
    }));

    const PaperContainer = styled(Paper)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
    }));

    const FirstSentence = styled(Typography)(({ theme }) => ({
        fontSize: "100%",
        margin: "0",
        color: "#1565C0",
        fontWeight: "400",
        padding: "10px",
        width: "100%",
        lineHeight: "1.6"
    }));

    const CenterGrid = styled(Grid)(({ theme }) => ({
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    }));

    const FullyInput = styled(TextField)(({ theme }) => ({
        paddingLeft: "0px",
        fontSize: "14px",
    }));

    const SearchButton = styled(Button)(({ theme }) => ({
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "100%"
    }));

    const StateButton = styled(Button)(({ theme }) => ({
        color: 'black',
        borderRadius: '20px'
    }));

    const TypographyCaption = styled(Typography)(({ theme }) => ({
        fontSize: '0.75rem',
        fontWeight: '400',
        lineHeight: '2'
    }));


    const styles = {
        iconCover: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "48px",
            height: "48px",
            border: "1px solid rgb(231, 239, 248)",
            background: "rgb(241, 248, 254)",
            boxShadow: "0 2px 15px -5px #2196f3",
            textAlign: "center",
            lineHeight: "44px",
            marginRight: "24px",
            borderRadius: "8px",
            verticalAlign: "middle"
        },
        verticallyCenter: {
            width: "100%",
            display: 'flex',
            alignItems: "center"
        },
        paperPadding: {
            padding: '12px'
        }
    }

    const dogeImg = 'https://i.imgur.com/dzhV0dN.png';

    return (
        <div className="" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <Grid container spacing={2} >
                <Grid item md={3}>
                </Grid>
                <Grid item md={6} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                        <br />
                        <StartButton variant="contained">Connect wallet to start</StartButton>
                        <br />
                        <ConnectButton variant="contained">Walletconnect</ConnectButton>
                    </div>
                </Grid>
            </Grid>
            <DividerBtn />
            <div style={{ maxWidth: '1500px', width: '100%', padding: "0 15px" }}>
                <PaperContainer elevation={0} >
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: "40px" }}>
                        <div className="" style={styles.iconCover}>
                            <FlightTakeoff sx={{ color: '#2196F3' }} />
                        </div>
                        <div style={styles.verticallyCenter}>
                            <FirstSentence variant="h2">Decentralized Launchpad With Instant Listing And Liquidity Locking</FirstSentence>
                        </div>
                    </div>
                    <div className="manageSale">
                        <Grid container >
                            <CenterGrid item xs={2}>
                                <CreateManageSaleBtn>Create or manage sale</CreateManageSaleBtn>
                            </CenterGrid>
                            <CenterGrid item xs={8}>
                                <FullyInput placeholder="Search by token address (Ex. 0x97bb08ba41f033beaac315169fc566ac9e0daf52)" fullWidth />
                                <SearchButton >
                                    <Search sx={{ color: '#2196F3' }} />
                                </SearchButton>
                            </CenterGrid>
                            <CenterGrid item xs={2}>
                            </CenterGrid>
                        </Grid>
                        <Grid container style={{ paddingTop: "15px" }}>
                            <CenterGrid item xs={3}>
                            </CenterGrid>
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
                            <CenterGrid item xs={3}>
                            </CenterGrid>
                        </Grid>
                    </div>
                </PaperContainer>
            </div>
            <hr />
            <div style={{ maxWidth: '1500px', width: '100%' }}>
                <Grid container >
                    <Grid item xs={3} style={styles.paperPadding}>
                        <PaperContainer elevation={0}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', marginBottom: '40px' }}>
                                <div className="">
                                    <img className="labelIcon" src="https://i.imgur.com/dzhV0dN.png" alt="doge" />
                                </div>
                                <div>
                                    <Typography style={{ color: '#1565C0', fontSize: '80%' }}>DPOO</Typography>
                                    <Typography style={{ fontSize: '80%' }}>DogePoo</Typography>
                                </div>
                            </div>
                            <div style={{ padding: '0 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <div className="circular">
                                    <div className="statusText" >Pending Start</div>
                                </div>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li style={{ margin: '24px 8px 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <TypographyCaption className="primary-color-text">Raised: 0.00/400</TypographyCaption>
                                        <TypographyCaption >Soft Cap: 300 BNB</TypographyCaption>
                                        <TypographyCaption >Liquidity: 70%</TypographyCaption>
                                        <TypographyCaption >Unlocks in: 207 days</TypographyCaption>
                                        <Chip label="Unaudited Contract" style={{ marginTop: '5px', height: '20px', fontSize: '65%', backgroundColor: '#e0e0e0' }} />
                                    </li>
                                </ul>
                            </div>
                            <Divider light="false" variant="fullWidth" style={{ borderBottom: '1px solid #0000001f', margin: '24px' }} />
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <div style={{ fontSize: '90%', lineHeight: '1.5' }}>Sale starts in:</div>
                                <span style={{ fontSize: '80%', lineHeight: '1.5' }}>12:05:02:01</span>
                                <IconButton style={{ color: '#2196F3', position: 'absolute', right: '0' }} size="small" >
                                    <ExternalLinkIcon fontSize="inherit" size={15} />
                                </IconButton>
                            </div>
                        </PaperContainer>
                    </Grid>
                    <Grid item xs={3} style={styles.paperPadding}>
                        <PaperContainer elevation={0}>
                        </PaperContainer>
                    </Grid>
                    <Grid item xs={3} style={styles.paperPadding}>
                        <PaperContainer elevation={0}>
                        </PaperContainer>
                    </Grid>
                    <Grid item xs={3} style={styles.paperPadding}>
                        <PaperContainer elevation={0}>
                        </PaperContainer>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
