import {
  Typography, Button,
  Box,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Input,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import AdminWrapper from './AdminWrapper';
import camelCaseToTitleCase from '../../utils/textUtil'
const axios = require('axios');

// /admin/token/get?name=

const PageDetail = () => {
  const [dataDetail, setDataDetail] = useState({});
  const tokenName = useParams().id;
  const navigate = useNavigate();

  useEffect(async () => {
    await fetchDataDetail();
    return () => {
    }
  }, [])

  const fetchDataDetail = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_API}/admin/token/get?name=${tokenName}`)
    setDataDetail(data.token);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_API}/admin/token/update/${dataDetail.id}`, dataDetail)
    if (!data.isError) {
      await fetchDataDetail()
    }
    console.log(data)
  }

  const handleInputChange = (e, key) => {
    setDataDetail({ ...dataDetail, [key]: e.target.value })
  }

  return (
    <AdminWrapper title="Thông tin chi tiết" subtitle="Thông tin giao dịch">
      <Helmet>
        <title>Thông tin giao dịch</title>
      </Helmet>
      <div style={{ padding: 20 }}>
        <div>
          <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img style={{ width: 60, height: 60, objectFit: 'contain', marginRight: 8 }} src={dataDetail.img} />
            <br />
          </div>
          <div style={{ marginBottom: 10 }}>
            <Typography variant="h5">
              ID:
              {' '}
              {dataDetail.id}
            </Typography>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Typography variant="h5">
              Sale ID:
              {' '}
              {dataDetail.saleID}
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            {Object.keys(dataDetail).map((key) => {
              return <TextField
                fullWidth
                label={camelCaseToTitleCase(key)}
                margin="normal"
                name="tokenInformation"
                value={dataDetail[key] ? dataDetail[key] : ""}
                variant="filled"
                key={key}
                onInput={(e) => { handleInputChange(e, key) }}
                disabled={key === 'tokenName' || key === 'tokenId'}
                required
              />
            })}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                size="small"
                type="submit"
                variant="contained"
                style={{ marginRight: 10 }}
              >
                Save
              </Button>
              <Button
                size="small"
                variant="outlined"
              >
                Cancel
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </AdminWrapper>
  )
}

export default PageDetail;
