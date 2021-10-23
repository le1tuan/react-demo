import React from 'react';
import {
  Typography, Button, Grid, Paper, TextField, Chip, Divider, IconButton
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { FlightTakeoff, Search } from '@material-ui/icons';
import {
  PlayCircle as PlayCircleIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  ExternalLink as ExternalLinkIcon
} from 'react-feather';

const PaperContainer = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px'
}));

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

const FirstSentence = styled(Typography)(({ theme }) => ({
  fontSize: '100%',
  margin: '0',
  color: '#1565C0',
  fontWeight: '400',
  padding: '10px',
  width: '100%',
  lineHeight: '1.6',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontWeight: 600,
  }
}));

const CenterGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  '@media (max-width: 480px)': {
    flexWrap: 'wrap',
  }
}));

const CreateManageSaleBtn = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#2196F3',
  borderRadius: '20px',
  fontSize: '70%',
  padding: '7px 12px'
}));

const SearchButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  borderRadius: '100%',
  minWidth: 0,
}));

const FullyInput = styled(TextField)(() => ({
  paddingLeft: '0px',
  fontSize: '14px',
}));

const StateButton = styled(Button)(() => ({
  color: 'black',
  borderRadius: '20px'
}));

const BannerWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '40px',
  '@media (max-width: 959.95px)': {
    marginBottom: 24,
  }
}));

const ManageSale = ({
  leftIcon,
  title,
  buttonText,
  inputPlaceHolder,
  filterComponent
}) => (
  <div style={{ maxWidth: '1500px', width: '100%', padding: '0 15px' }}>
    <PaperContainer elevation={0}>
      <BannerWrapper>
        {leftIcon}
        <div style={styles.verticallyCenter}>
          <FirstSentence variant="h2">{title}</FirstSentence>
        </div>
      </BannerWrapper>
      <div className="manageSale">
        <Grid container spacing={1}>
          <CenterGrid item xl={2} lg={2} md={12} sm={12} xs={12}>
            <CreateManageSaleBtn>{buttonText}</CreateManageSaleBtn>
          </CenterGrid>
          <CenterGrid item xl={8} lg={8} md={12} sm={12} xs={12}>
            <FullyInput placeholder={inputPlaceHolder} fullWidth />
            <SearchButton>
              <Search sx={{ color: '#2196F3' }} />
            </SearchButton>
          </CenterGrid>
          <CenterGrid item xs={2} />
        </Grid>
        {filterComponent}
      </div>
    </PaperContainer>
  </div>
);

export default ManageSale;
