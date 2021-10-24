import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import {
  VictoryPie, VictoryContainer, VictoryLegend, VictoryTooltip,
} from 'victory';
import { styled } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import Public from '@material-ui/icons/Public';
import Telegram from '@material-ui/icons/Telegram';
import theme from './themeChart';

const CustomPaper = styled(Paper)`
box-shadow: 0px 1px 3px 0px rgb(142 142 142 / 20%), 0px 1px 1px 0px rgb(243 243 243 / 14%), 0px 2px 1px -1px rgb(204 204 204 / 12%);
font-family: "Open Sans", sans-serif;
color: #172b4d;
border-radius: 8px
`;

const DashboardDetail = () => (
  <div style={{ padding: 16 }}>
    <Paper elevation={0} style={{ width: '100%', padding: 20, backgroundColor: 'rgb(249, 249, 249)' }}>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
          <Paper style={{
            padding: 20,
            fontSize: '75%',
            marginBottom: 20
          }}
          >
            <div style={{
              display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
            }}
            >
              <img alt="logo" style={{ height: 40, width: 40 }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM0IiBoZWlnaHQ9IjEzNCIgdmlld0JveD0iMCAwIDEzNCAxMzQiPgogIDxkZWZzPgogICAgPGZpbHRlciBpZD0iUmVjdGFuZ2xlXzEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMzQiIGhlaWdodD0iMTM0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8ZmVPZmZzZXQgZHk9IjMiIGlucHV0PSJTb3VyY2VBbHBoYSIvPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiByZXN1bHQ9ImJsdXIiLz4KICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMC4xNjEiLz4KICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxnIGlkPSJHcm91cF8zIiBkYXRhLW5hbWU9Ikdyb3VwIDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgLTIpIj4KICAgIDxnIGlkPSJHcm91cF8xIiBkYXRhLW5hbWU9Ikdyb3VwIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcgOCkiPgogICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAtOSwgLTYpIiBmaWx0ZXI9InVybCgjUmVjdGFuZ2xlXzEpIj4KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEtMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMSIgd2lkdGg9IjExNiIgaGVpZ2h0PSIxMTYiIHJ4PSIyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOSA2KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8xLTIiIGRhdGEtbmFtZT0iR3JvdXAgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYuMjYxIDM1LjUyNCkiIG9wYWNpdHk9IjAuOTk5IiBzdHlsZT0iaXNvbGF0aW9uOiBpc29sYXRlIj4KICAgICAgICA8dGV4dCBpZD0iRHgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjI2MSAzNi40NzYpIiBmb250LXNpemU9IjQ1IiBmb250LWZhbWlseT0iQmFobnNjaHJpZnQiIGZvbnQtd2VpZ2h0PSI2MDAiPjx0c3BhbiB4PSIwIiB5PSIwIj5EeDwvdHNwYW4+PC90ZXh0PgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" />
              <span style={{
                fontWeight: 700, fontSize: '120%', fontFamily: 'Open Sans,sans-serif', marginLeft: 5
              }}
              >
                DYOR Area
              </span>
            </div>
            <br />
            <div style={{ height: 230, width: '100%' }}>
              <VictoryContainer height={230} width={350} responsive theme={theme} title="Token Distribution">
                <VictoryPie
                  padding={{
                    bottom: 20, left: 20, right: 140, top: 20
                  }}
                  data={[
                    { x: 'Cats', y: 35 },
                    { x: 'Dogs', y: 40 },
                    { x: 'Birds', y: 55 }
                  ]}
                  innerRadius={86}
                  width={350}
                  radius={95}
                  height={230}
                  theme={theme}
                  standalone={false}
                  labelComponent={<VictoryTooltip />}
                  // labels={() => ''}
                />
                <VictoryLegend
                  data={[{ name: 'Burn: 1%' }, { name: 'DxLock: 0%' }, { name: 'Presale: 0%' }, { name: 'Liquidity: 0%' }, { name: 'Unlocked: 99%' }]}
                  orientation="vertical"
                  standalone={false}
                  x={218}
                  y={39.73750000000001}
                />
              </VictoryContainer>
            </div>
            <br />
            <p style={{ textAlign: 'center', marginBottom: 3, fontSize: '90%' }}>Click an Item Below for more Details!</p>
            <div style={{ width: '100%' }}>
              <Grid container spacing={1}>
                <Grid item md={6}>
                  <CustomPaper
                    elevation={1}
                    style={{
                      padding: 10, textAlign: 'center', borderRadius: 8, fontSize: 12
                    }}
                  >
                    DxWarnings
                  </CustomPaper>
                </Grid>
                <Grid item md={6}>
                  <CustomPaper elevation={1} style={{ padding: 10, textAlign: 'center' }}>TokenSniffer</CustomPaper>
                </Grid>
                <Grid item md={6}>
                  <CustomPaper elevation={1} style={{ padding: 10, textAlign: 'center' }}>Disqus Chat</CustomPaper>
                </Grid>
                <Grid item md={6}>
                  <CustomPaper elevation={1} style={{ padding: 10, textAlign: 'center' }}>DxWarnings</CustomPaper>
                </Grid>
                <Grid item md={6}>
                  <CustomPaper elevation={1} style={{ padding: 10, textAlign: 'center' }}>DxWarnings</CustomPaper>
                </Grid>
                <Grid item md={6}>
                  <CustomPaper elevation={1} style={{ padding: 10, textAlign: 'center' }}>DxWarnings</CustomPaper>
                </Grid>
                <Grid item md={6}>
                  <CustomPaper elevation={1} style={{ padding: 10, textAlign: 'center' }}>DxWarnings</CustomPaper>
                </Grid>
                <Grid item md={6}>
                  <CustomPaper elevation={1} style={{ padding: 10, textAlign: 'center' }}>DxWarnings</CustomPaper>
                </Grid>
              </Grid>
            </div>
            <br />
            <div style={{ width: '100%', textAlign: 'center' }}>
              <CustomPaper style={{ padding: 10, backgroundColor: 'rgb(240, 242, 255)' }}>
                Estimated Initial Marketcap:
                <br />
                $:377.896,48
              </CustomPaper>
            </div>
            <br />
            <p style={{
              textAlign: 'left',
              fontFamily: 'Open Sans,sans-serif',
              fontWeight: 400,
              lineHeight: '1.5',
              fontSize: '85%',
              color: 'rgba(0, 0, 0, 0.87)'
            }}
            >
              DxSale is a Decentralized Launchpad. Anyone can list a token at anytime. Sometimes owners may have malicious intent and as a user you must do your own research. The tools provided above can help you make a better decision but do not guarantee any level of safety!
            </p>
          </Paper>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={8} xs={12}>
          <Paper style={{
            padding: 20,
            fontSize: '75%',
            marginBottom: 20
          }}
          >
            <div style={{
              display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 40
            }}
            >
              <div>
                <img
                  src="https://i.imgur.com/0Y0VsAs.png"
                  alt="logo"
                  style={{
                    height: 55, width: 55, marginRight: 10, marginBottom: 5
                  }}
                />
              </div>
              <div>
                <Typography variant="h6" component="h2" gutterBottom style={{ color: '#1565C0', fontSize: 16 }}>MUU</Typography>
                <Typography variant="p" component="div" gutterBottom style={{ fontWeight: 400, lineHeight: '1.5', fontSize: 16 }}>Space MUU</Typography>
              </div>
            </div>
            <div style={{ width: '100%', marginBottom: 10 }}>
              <div style={{ color: '#2196f3' }}>
                <Public style={{ fontSize: 21 }} />
                <TwitterIcon style={{ marginLeft: 25, fontSize: 21 }} />
                <Telegram style={{ marginLeft: 25, fontSize: 21 }} />
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
          <Paper>
            aaaa
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </div>
);

export default DashboardDetail;
