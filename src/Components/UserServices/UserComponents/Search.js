import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import LoginDialog from './LoginDialog';
import { useSelector } from 'react-redux';
import { postData } from '../../Services/NodeServices';


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

export default function SearchAppBar(props) {

  const [open, setOpen] = useState(false)
  const [login, setLogin] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }

  var user = useSelector(state => state.user)
  var userData = Object.values(user)[0]
  console.log('Login Data', userData)

  const handleLoginAccount = () => {

    return (<div>
      LOGIN | SIGNUP
    </div>)

  }

  const fetchAllProducts=async(txt)=>{
    var result = await postData('userinterface/search_product',{productname:txt})
    props.setProductList(result.data)

  }

  const handleSearch=(event)=>{
    fetchAllProducts(event.target.value)
  }

  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#000' }} >
        <Toolbar >

          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
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
                  onChange={handleSearch}
                />
              </Search>
            </div>



            <div
              onClick={handleClick}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: '10%', fontSize: '12px', fontWeight: 500 }}>
              {handleLoginAccount()}
            </div>

          </div>

        </Toolbar>
        <LoginDialog open={open} />

      </AppBar>
    </Box >
  </>
  );
}
