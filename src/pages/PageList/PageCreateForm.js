import {
  Typography, Button,
  Box,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Input, Snackbar,
  Alert
} from '@material-ui/core';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AdminWrapper from './AdminWrapper';
import { axiosPost } from 'src/utils/AxiosAPI';

const data = {
  img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAC4lBMVEVHcEz/AAD/qgDyui/yuS//qlX/vz///wDyuS/yuS7yui7yuS7xuS7//1XxuS//fwD//wDyui9/fwC/vz/zui/yuS7yuCzzuS7xuC6qqgD3vi/0ui74vjDyuC70ui/7wTHyuC73vC/yuS4AAAD0uy74vjDzuS7MmTP2vC7yui70ui7zui71vC/3vjDxuC7utjHtsy74vjDwuC70uy/0vC/1vTHzuS/3vi/zuS3yuS/xuS/2vTD1vi/zui7qtyj3vTD3vS/ytjD0uy73vS/0vyrzui/0tzPsti30ui/0uy72vC/ytjD2vTDyuS/3vTDzuS72vDD3vS/yuizyujD0uzDzuS7zui/xuC7zuS/yuS7yuS7yui/zui7yuS/zui/0ui7zuS/yui/yui7yuivyuS72vS70uC71vS/0uy75vjDvuC//fz/0vC/4vzDyui/1uzD3vTH5vjDxuC/zvCz0ui///wD4vjD1uy+/fz/4vzDzui/3vy/4vS/4vDDzsSzvuS///3/zxS74vi/xuCzvty34vTD0uy/1uy/zui7zuS7yuS7/mTPzuy/2vS7zui/yuC7xuy7yui/zui/4ujH0uy7zuS/zuS/zui7zui/////zujDzuzH//vzytSHytiL53Zf53Jf///75357/xzLytiPzuzDytSD//v3zuzPzuzL8wTH9wjH1xlP1xlL/xDH/yDPzui7/yTP//vv0uy/++e3++e71yFr6vzD1vC//xjL2vTD53p3zuCj53537wTH/xTL3vjDyuCjytyXzuSv2zGb6357zuSz64aXytyf3vTDyuCn//frzuCn53pzytiT53JX++u7ytyT/yDL++/Lztyj2vC/53pv0wEH/xzPytiHzujH+xDL+xDHytyjzuSrzuCr53Jb53ZbzuS7//PT1xVL2yl/2yV/63p7++vHytSL++/H/wzH1vDD2vDDzui353pr0wED+/PT+/PX0ui/9wTH8wjGf9pkwAAAAmHRSTlMAAQP+/QMEAf77/Pr8A/4CAv0CBP33KOr7A/z6/fvs/o5BkAGp5xYFjrld+430Yi4s85CtrW1r9WvHh/6GxBn+hRXv6hj8GRx3eHcqeNjS947TPz+P1s5e94/RutX4947W+Lop/I9ip2K+YQSowqhubb9hF6gDwqcE9Ib16yoXhwIW62Fg5+3t6tjYBdBd1c9e6dApXs7VuRSpMcgAAAVzSURBVFjDlVdleNtIEF07tiWnSRxOIQ00SZuk3LsyMzMzHTPzXY+ZcSXFVhvZTiyHmdteMeWmzHDlHsP/W8lOLdhNnP38+bOsfW9nZ2Zn3wCgGzaL9BWfnZm17uO4kH/iEr5cmfnFTAr9aaFA+4MKB8CYuujzZWKRt7quHMLyumrv3X/XLFmbGgNAeLsUZgCmzpgjCt4aU6gploZo0LHoZ423WJw/a4o8oY0RSYExo9493RRhNYVA1QgxWSNEYeK45wEVScaHg7RnMoTfrCaIHSZrs5DxdDSIIcANZjDgWWGblYbEQVu31T7ZH4QbsN6jwCN9i9qC+yiK+j4kzcXgDQ9u/TUMtjvCTmztY9AzRFMx6aUP0DCIQfcufflxKlqzvq3L/cWdYJCjU/F9RrUNlJF6obgzbi7L4v7tXJyOIAoCC0gpxa3Pwu0NEEfRqXQQsCjT773abjg8587NdXM4hm61zwWSsgt48/WuETi8fTPDbLbjGCK6Do0Hka0JZBx+PoyAz8khMISdGx1pNPg3MEzoTsIzDImhuzDMtwmKGp+UGEvEExnoxKSecizN4DXBSsBvkQi2EBiswgh0/AAFen40liavT7aBHjlhErChaE7XGxBYPy+PbIO1ZZqUDJ99mmwi4rfIHwLD5OTZvZATFjaZ2vJfW56MalqAnJjSotkBW+L2r5/D5DqduTKDZIO7hNW6cTmqwF95tRZcPdm66k0Hxzlutj6dvKq14L8VFrBxfY26frp2nPpFhqD1HRzLco5c/+Nfp3a41JW2ZnU8+FpUG8BBbm9hBZOHAI0OF8txrMvRiB7ymIrCveil2gRxKehRFKo6/j+zkHMWHGH2o/VZ1tPQ4GFZZMN+5kiBk4PotdIPoUU9wAalC1h4aefuEjbfWVDBHET4fHtVlT0fMRxkKgqc+WzJ7p2XlPXB5P0JrKqmlfG7zNRLQPf1w0chIio8dqwQAeHRw9fdElE9c1kZTbp6MUhoplXxL5NMh9yBQyz0OAsqGaaywOmB7KEDyH60lTJVPtB1CWBuecAiOf7IeXYUCw/03C6slFK5svA2ekD+tzfKrze7A4jyOKDw/4VdcrzKmD370HTueNUt5Hv0uVV1HDnftW8PeiVH90IgFiEgkATcdi3BHR/BHS3BdkUwQZxyC7xsY71/C47WLTj8W6iXX/PKLcwFCXVKJ/IaJx5hpPirnMgrndicABarw3jFH8Yb2jDe8IfxijqMq0CWOpEutpdIF9WJtIGQypVyKrt8qeySU7mSkMpLxSjdYbqGP0zXdIfJJH4P4lcHfZz//lN3nNdvBJYVGhMgLLlXUHZJBWVX69Mfv2tFk/cHIwDLBX1J43EljdeXtJYUVBMXNEXpiyrfuiof+KUvqqamhehi6TU7eTKWQV3WcfjkT3pJ2mJaC+5i4dUXC4+7WITpCG4DkyaMpCFxF0T7IT32w57oZkT34wj85coHLlcef7luku93inonKVGv79izCk/az+rxsYlJ431SzQyG4AXGGd4nMPgzeIExxK+SDMa3R5/DSxxekjg8XuKcH242+zVzJIgfShBZPEPAR3R9dSZSZ/dk3mMdl3nvK3sPCxjUUaGZohSaktRN75DULX2KelEtliljx8R2FxullfuWh0t7Byf3Q4ufeEUr9yUb0vpsPRFcwzHPgG9ZQL+BwbQ8A/thWx6UUOGg/0u17TZdjw4AZgOhb4sB0YM/EJrJbV+dkDE4jdj2+RrPt8ZNFER849l0+o1RY9psPH2t75RZ88XTmtY3qsYriHNmTG2v9ZV8iWbEpK5dska8G2i+i8Rl3y5KNQbTfEsUUo4avsuet/LHb+IgHZewLiszO94mZbxNP/t/TMlXtfNBZ2EAAAAASUVORK5CYII='
}

const PageCreateForm = () => {
  const navigate = useNavigate();
  const [dataDetail, setDataDetail] = useState({});
  const [snackbarOpen, setSnackbar] = useState(false);

  const handleChange = (e) => {
    setDataDetail({ ...dataDetail, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axiosPost(`${process.env.REACT_APP_SERVER_API}/admin/token/create`, dataDetail)
    if (data.isError === false) {
      setSnackbar(true);
      setDataDetail({});
      window.scrollTo(0, 0);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(false);
  };


  return (
    <AdminWrapper title="Tạo mới trang" subtitle="Tạo mới trang">
      <Helmet>
        <title>Tạo mới trang</title>
      </Helmet>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successful
        </Alert>
      </Snackbar>
      <div style={{ padding: 20 }}>
        <div>
          <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img style={{ width: 60, height: 60, objectFit: 'contain', marginRight: 8 }} src={data.img} />
            <br />
          </div>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Token ID"
              margin="normal"
              name="tokenId"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.tokenId ? dataDetail.tokenId : ''}
            />
            <TextField
              fullWidth
              label="Sale ID"
              margin="normal"
              name="saleID"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.saleID ? dataDetail.saleID : ''}
            />
            <TextField
              fullWidth
              label="Token Name"
              margin="normal"
              name="tokenName"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.tokenName ? dataDetail.tokenName : ''}
            />
            <TextField
              fullWidth
              label="Token Information"
              margin="normal"
              name="tokenInformation"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.tokenInformation ? dataDetail.tokenInformation : ''}
            />
            <TextField
              fullWidth
              label="Token Image"
              margin="normal"
              name="tokenImage"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.tokenImage ? dataDetail.tokenImage : ''}
            />
            <TextField
              fullWidth
              label="Token Metamask"
              margin="normal"
              name="tokenMetamask"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.tokenMetamask ? dataDetail.tokenMetamask : ''}
            />
            <TextField
              fullWidth
              label="Total Supply"
              margin="normal"
              name="totalSupply"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.totalSupply ? dataDetail.totalSupply : ''}
            />
            <TextField
              fullWidth
              label="Token For Presale"
              margin="normal"
              name="tokenForPresale"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.tokenForPresale ? dataDetail.tokenForPresale : ''}
            />
            <TextField
              fullWidth
              label="Token For Liquidity"
              margin="normal"
              name="tokenForLiquidity"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.tokenForLiquidity ? dataDetail.tokenForLiquidity : ''}
            />
            <TextField
              fullWidth
              label="Soft Cap"
              margin="normal"
              name="softcap"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.softcap ? dataDetail.softcap : ''}
            />
            <TextField
              fullWidth
              label="Hard Cap"
              margin="normal"
              name="hardcap"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.hardcap ? dataDetail.hardcap : ''}
            />
            <TextField
              fullWidth
              label="Presale Rate"
              margin="normal"
              name="presaleRate"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.presaleRate ? dataDetail.presaleRate : ''}
            />
            <TextField
              fullWidth
              label="Pancake Swap Rate"
              margin="normal"
              name="pancakeSwapRate"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.pancakeSwapRate ? dataDetail.pancakeSwapRate : ''}
            />
            <TextField
              fullWidth
              label="Pancake Swap Liquidity"
              margin="normal"
              name="pancakeSwapLiquidity"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.pancakeSwapLiquidity ? dataDetail.pancakeSwapLiquidity : ''}
            />
            <TextField
              fullWidth
              label="Min Contribution"
              margin="normal"
              name="minContribution"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.minContribution ? dataDetail.minContribution : ''}
            />
            <TextField
              fullWidth
              label="Max Contribution"
              margin="normal"
              name="maxContribution"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.maxContribution ? dataDetail.maxContribution : ''}
            />
            <TextField
              fullWidth
              label="Presale Start Time"
              margin="normal"
              name="presaleStartTime"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.presaleStartTime ? dataDetail.presaleStartTime : ''}
            />
            <TextField
              fullWidth
              label="Presale End Time"
              margin="normal"
              name="presaleEndTime"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.presaleEndTime ? dataDetail.presaleEndTime : ''}
            />
            <TextField
              fullWidth
              label="Liquidity Unlock Rate"
              margin="normal"
              name="liquidityUnlockRate"
              onChange={handleChange}
              variant="filled"
              required
              value={dataDetail.liquidityUnlockRate ? dataDetail.liquidityUnlockRate : ''}
            />
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
            </Box>
          </form>
        </div>
      </div>
    </AdminWrapper>
  )
}

export default PageCreateForm;
