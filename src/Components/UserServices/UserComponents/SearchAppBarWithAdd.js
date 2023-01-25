import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import { TextField, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import LoginDialog from './LoginDialog';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70 ch',

    },
  },
}));

export default function SearchAppBarWithAdd(props) {


  const [open, setOpen]=useState(false)

  const handleOpenDialog = () => {
    setOpen(true)
  }

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ display: 'flex', width: '100%', background: '#b2bec3' }}>
          {/* <marquee>
            <sapn style={{ fontWeight: 500 }} >Free Shipping on All Orders |</sapn>
            <span> Get Extra ₹100 OFF on Spent of ₹999 Use Code:</span>
            <span style={{ fontWeight: 500 }} ><q>TUG100</q></span></marquee> */}
        </div>
      </div>
      <AppBar position="static" style={{ background: '#000' }} >
        <Toolbar style={{ minHeight: '53px' }}>

          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            
            <div style={{ width: '28%' }}>
              <div style={{ width: '100%', fontSize: '25px', fontWeight: 'ui-monospace', display: 'flex', alignItems: 'center', height: '100%', letterSpacing: 3, fontFamily: "'Maven Pro', sans-serif'" }} >
                {/* <img  src="images/TUG.png" alt='logoTUG' width='100%' /> */}
                TUG

              </div>
            </div>
            <div style={{ width: '62%', display: 'flex', alignItems: 'center' }} >
              <Search style={{ width: '70%' }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  width='100%'
                />
              </Search>
            </div>

            <div onClick={handleOpenDialog} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: '10%' }}>

              <div style={{ fontWeight: 500, fontSize: '12px', width: '100%' }} >
                LOG IN | SIGNUP
              </div>
            </div>


          </div>

        </Toolbar>

      </AppBar>
      <LoginDialog open={open} />
    </Box >
  );
}
