import { Button, Avatar } from '@mui/material';
import React from 'react';
function DataDisplay() {
  return (
    <>
      <Button color='error' variant='outlined'>
        Hello World
      </Button>
      <Avatar alt='Remy Sharp' src='https://i.pinimg.com/736x/43/d9/24/43d9243b3054e377c1869bea35d0b879.jpg' sx={{ width: 56, height: 56, marginLeft: 5, marginTop: 3 }}>
        Enes
      </Avatar>
    </>
  );
}

export default DataDisplay;
