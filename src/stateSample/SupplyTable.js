import React, { useState } from 'react';
import { suppliers } from '../data/suppliers';
import { Button, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const _ = require('lodash');

function SupplyTable() {
  const [supplyList, setSupplyList] = useState(suppliers);
  const [searchByName, setSearchByName] = useState('');

  const searchSuppliers = e => {
    let searchData = searchByName.toLowerCase().trim();
    let newSuppliers = suppliers.filter(q => q.companyName.toLowerCase().includes(searchData));
    setSupplyList(newSuppliers);
    setSearchByName('');
  };

  const removeAll = () => {
    setSupplyList([]);
  };

  const removeItem = id => {
    let newSuppliers = supplyList.filter(item => item.id !== id);
    setSupplyList(newSuppliers);
  };

  const orderBy = () => {
    let sortedSuppliers = _.orderBy(suppliers, ['companyName'], ['asc']);
    setSupplyList([...sortedSuppliers]);
  };

  const orderByDesc = () => {
    let sortedSuppliers = _.orderBy(suppliers, ['companyName'], ['desc']);
    setSupplyList([...sortedSuppliers]);
  };

  const loadData = () => {
    setSupplyList(suppliers);
  };

  return (
    <>
      <Container maxWidth='lg'>
        <Box sx={{ mt: 1, p: 1 }} display='flex' justifyContent='center'>
          <TextField size='small' color='secondary' focused hiddenLabel type='text' value={searchByName} onChange={e => setSearchByName(e.target.value)} placeholder='Search by Company Name...' />
          <Button sx={{ p: 0.9, ml: 2 }} variant='contained' size='small' onClick={e => searchSuppliers()}>
            Search
          </Button>
        </Box>

        <div>
          <Box display='flex' justifyContent='space-between'>
            <Button sx={{ p: 1, mt: 2, mb: 2 }} variant='contained' size='small' onClick={() => orderBy()}>
              Order By Asc
            </Button>
            <Button sx={{ p: 1, mt: 2, mb: 2 }} variant='contained' size='small' onClick={() => orderByDesc()}>
              Order By Desc
            </Button>
          </Box>
        </div>
        <TableContainer style={{ backgroundColor: 'yellow' }} component={Paper} variant='outlined' square>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Contact Title</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {supplyList &&
                supplyList.map(item => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.companyName}</TableCell>
                      <TableCell>{item.contactTitle}</TableCell>
                      <TableCell>{item.address.country}</TableCell>
                      <TableCell>{item.address.phone}</TableCell>
                      <TableCell>
                        <Button variant='contained' size='small' onClick={() => removeItem(item.id)}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          {/* The "sx" prop is a shortcut for defining custom style that has access to the theme */}
          <Box display='flex' justifyContent='space-between' sx={{ mt: 2, mb: 5 }}>
            <Button variant='contained' color='error' size='medium' onClick={() => removeAll()}>
              Remove All
            </Button>
            <Button variant='contained' color='success' size='medium' onClick={() => loadData()}>
              Load Data
            </Button>
          </Box>
        </div>
      </Container>
    </>
  );
}

export default SupplyTable;
