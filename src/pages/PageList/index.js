import {
  Paper, Table,
  Typography,
  TableHead, TableCell,
  TableRow, TableBody, Button,
  TablePagination, TableSortLabel,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AdminWrapper from './AdminWrapper';
const axios = require('axios');


const columns = [
  { title: 'id', isSortable: true, id: 'id' },
  { title: 'Token Id', isSortable: true, id: 'tokenId' },
  { title: 'Token Name', isSortable: true, id: 'tokenName' },
  { title: 'Token Image', isSortable: true, id: 'tokenImage' },
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const Header = ({ orderBy, order, handleSort }) => {
  return (
    <TableHead>
      <TableRow>
        {
          columns && columns.map((column) => {
            const d = orderBy === column.id ? order : 'asc'
            return (
              <TableCell align="left" sortDirection={orderBy === column.id ? order : false} key={column.id}>
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={d}
                  onClick={handleSort(column.id)}
                >
                  {column.title}
                </TableSortLabel>

              </TableCell>
            )
          })
        }
      </TableRow>
    </TableHead>
  )
}

const PageList = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property) => {
    return (event) => {
      console.log(event, property)
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    }
  };

  useEffect(async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_API}/admin/token/getAll`)
    setTableData(data.token);
    return () => {
    }
  }, [])

  return (
    <AdminWrapper title="Danh sách trang" subtitle="Danh sach cac trang">
      <div style={{ padding: 20 }}>
        <Table>
          <Header
            orderBy={orderBy}
            order={order}
            handleSort={handleSort}
          />
          <TableBody>
            {
              tableData
              && stableSort(tableData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {data.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {data.tokenId}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {data.tokenName}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <img src={data.img} style={{ width: 30, height: 30, objectFit: 'contain' }} />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                          <Button
                            size="small"
                            variant="contained"
                            color="success"
                            style={{ marginLeft: 3, width: '50%', marginBottom: 3, textTransform: 'none' }}
                          >
                            <Typography variant="body2">Xem trang</Typography>
                          </Button>
                          <Button
                            onClick={() => {
                              navigate(`/admin/page/${data.tokenName}`)
                            }}
                            size="small"
                            variant="contained"
                            color="primary"
                            style={{ marginLeft: 3, width: '50%', marginBottom: 3, textTransform: 'none' }}
                          >
                            <Typography variant="body2">Chinh sua</Typography>
                          </Button>
                          <Button size="small" variant="contained" color="error" style={{ marginLeft: 3, width: '50%', marginBottom: 3, textTransform: 'none' }}>
                            <Typography variant="body2">Xoa</Typography>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })
            }
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </AdminWrapper>
  )
};

export default PageList;
