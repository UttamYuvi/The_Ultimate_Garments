import React, { useState } from "react";
import SearchAppBar from "./UserComponents/Search";
import Grid from "@mui/material/Grid";
import MainBar from "./UserComponents/MainBar";
import Divider from "@mui/material/Divider";
import HomeFooter from "./UserComponents/HomeFooter";
import WishListComponent from "./UserComponents/WishListComponent";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import PriceDetails from './UserComponents/PriceDetails'
import ProductPriceComponent from "./UserComponents/ProductPriceComponent";
import AddressFormComponent from "./UserComponents/AddressFormComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import QualityAssureComponent from "./UserComponents/QualityAssureComponent";

import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Button, TextField } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } }

export default function MyAccount(props) {

    const [order, setOrder] = useState(false)
    const [address, setAddress] = useState(false)
    const [profile, setProfile] = useState(false)
    const [wishlist, setWishlist] = useState(true)
    const [coupon, setCoupon] = useState(false)
    const [help, setHelp] = useState(false)

    const [mobileNumber, setMobileNumber] = useState('');
    const [emailid, setEmailid] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [gender, setGender] = useState('');
    const [pincode, setPincode] = useState('');
    const [town, setTown] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [userid, setuserID] = useState('');
    const [resident, setResident] = useState('')


    const handleDateChange = (dateofbirth) => {
        setDateofbirth(dateofbirth)
    };

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    var user = useSelector(state => state.user)
    var userData = Object.values(user)[0]

    const handleOrder = () => {
        setOrder(true)
        setAddress(false)
        setProfile(false)
        setWishlist(false)
        setCoupon(false)
        setHelp(false)
    }
    const handleAddress = () => {
        setOrder(false)
        setAddress(true)
        setProfile(false)
        setWishlist(false)
        setCoupon(false)
        setHelp(false)
    }

    const handleProfile = () => {
        setOrder(false)
        setAddress(false)
        setProfile(true)
        setWishlist(false)
        setCoupon(false)
        setHelp(false)
    }

    const handleWishlist = () => {
        setOrder(false)
        setAddress(false)
        setProfile(false)
        setWishlist(true)
        setCoupon(false)
        setHelp(false)
    }

    const handleCoupon = () => {
        setOrder(false)
        setAddress(false)
        setProfile(false)
        setWishlist(false)
        setCoupon(true)
        setHelp(false)
    }

    const handleHelp = () => {
        setOrder(false)
        setAddress(false)
        setProfile(false)
        setWishlist(false)
        setCoupon(false)
        setHelp(true)
    }

    const handleLogout = () => {
        alert('Log out')
    }

    return (
        <div style={{ display: 'flex', width: '100%', height: 'auto', flexDirection: 'column', marginTop: '0px', backgroundColor: '#f1f3f6' }} >
            <SearchAppBar />
            <MainBar />
            <div style={{ display: 'flex', justifyContent: "center", width: '100%', height: '700px', flexDirection: 'row', marginTop: '20px', background: '#f1f3f6;' }} >
                <div style={{ display: 'flex', justifyContent: "center", width: '90%', flexDirection: 'row' }} >

                    <div style={{ display: 'flex', width: '27%', flexDirection: 'column' }} >
                        <div style={{ display: 'flex', justifyContent: "center", width: '230px', height: '140px', background: '#d5d5d5', flexDirection: 'column' }}  >

                            <table border='0' >
                                <tr>
                                    <td style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}  >
                                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', width: '75px', height: "75px", borderRadius: '50%', background: 'black', color: 'white', fontSize: '30px', margin: '0px 0px 0px 0px', padding: '0px' }} >
                                            UV
                                        </div>
                                    </td>

                                </tr>

                                <tr>
                                    <td colspan={2}  >
                                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', }} >
                                            UTTAM VERMA
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td >
                                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', fontSize:'12px', fontWeight:400 }} >
                                            #TUGSOFHINDUSTAN
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div style={{ display: 'flex', justifyContent: "center", width: '230px', height: '140px', background: '#fff' }} >
                            <table style={{ display: 'flex', justifyContent: "left", width: '230px', height: '400px', background: '#fff', border: '1px solid #d5d5d5', flexDirection: 'column' }} >
                                <tr onClick={handleOrder} style={{ cursor: 'pointer' }} >
                                    <td style={{ display: 'flex', margin: '15px', color: order ? '#000' : '#746f6f', fontSize: order ? '16px' : '15px', fontWeight: order ? 500 : 400 }} >
                                        Order
                                    </td>
                                    <Divider style={{ margin: '0px 0px 0px 5px', width: '217px' }} />
                                </tr>
                                <tr onClick={handleAddress} style={{ cursor: 'pointer' }}>
                                    <td style={{ display: 'flex', margin: '15px', color: address ? '#000' : '#746f6f', fontSize: address ? '16px' : '15px', fontWeight: address ? 500 : 400 }} >
                                        Address
                                    </td>
                                    <Divider style={{ margin: '0px 0px 0px 5px', width: '217px' }} />
                                </tr>
                                <tr onClick={handleProfile} style={{ cursor: 'pointer' }} >
                                    <td style={{ display: 'flex', margin: '15px', color: profile ? '#000' : '#746f6f', fontSize: profile ? '16px' : '15px', fontWeight: profile ? 500 : 400 }} >
                                        Profile
                                    </td>
                                    <Divider style={{ margin: '0px 0px 0px 5px', width: '217px' }} />
                                </tr>
                                <tr onClick={handleWishlist} style={{ cursor: 'pointer' }}>
                                    <td style={{ display: 'flex', margin: '15px', color: wishlist ? '#000' : '#746f6f', fontSize: wishlist ? '16px' : '15px', fontWeight: wishlist ? 500 : 400 }} >
                                        Wishlist
                                    </td>
                                    <Divider style={{ margin: '0px 0px 0px 5px', width: '217px' }} />
                                </tr>
                                <tr onClick={handleCoupon} style={{ cursor: 'pointer' }}>
                                    <td style={{ display: 'flex', margin: '15px', color: coupon ? '#000' : '#746f6f', fontSize: coupon ? '16px' : '15px', fontWeight: coupon ? 500 : 400 }} >
                                        Coupons
                                    </td>
                                    <Divider style={{ margin: '0px 0px 0px 5px', width: '217px' }} />
                                </tr>

                                <tr onClick={handleHelp} style={{ cursor: 'pointer' }}>
                                    <td style={{ display: 'flex', margin: '15px', color: help ? '#000' : '#746f6f', fontSize: help ? '16px' : '15px', fontWeight: help ? 500 : 400 }} >
                                        Help Center
                                    </td>
                                    <Divider style={{ margin: '0px 0px 0px 5px', width: '217px' }} />
                                </tr>
                                <tr onClick={handleLogout}  >
                                    <td style={{ display: 'flex', margin: '15px' }} >
                                        <div style={{ display: 'flex', width: '190px', height: '33px', background: '#51cccc', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', color: "#fff", cursor: 'pointer' }}   >
                                            LOG OUT
                                        </div>
                                    </td>

                                </tr>

                            </table>

                        </div>

                    </div>



                    <div style={{ display: 'flex', width: '70%', height: 'auto', flexDirection: 'column' }}>
                        {order ?
                            <div style={{ display: 'flex', width: '100%', padding: 0, margin: 0, flexDirection: 'column', background: '#fff', border: '1px solid #d5d5d5' }} >
                                <div style={{ display: 'flex' }} >
                                    <div style={{ display: 'flex', margin: '10px', padding: '5px', fontSize: '18px', fontWeight: 500, background: '#fff' }} >
                                        My Order
                                    </div>
                                </div>
                                <Divider style={{ margin: '0px 0px 0px 0px' }} />
                                <div style={{ display: 'flex', margin: '10px', padding: '5px', justifyContent: 'center' }}>
                                    <img src='images/empty_box.gif' alt='empty' style={{ width: '200px' }} />
                                </div>
                                <div style={{ display: 'flex', margin: '10px', padding: '5px', fontSize: '25px', fontWeight: 500, justifyContent: 'center' }} >
                                    <a href="/home" >
                                        Haven't Ordered yet?
                                    </a>
                                </div>
                                <div style={{ display: 'flex', margin: '10px', padding: '5px', justifyContent: 'center', fontSize: '14px', fontWeight: 400 }}>
                                    Explore and shop the coolest fashion now!
                                </div>
                            </div> : <></>

                        }

                        {address ?
                            <div style={{ display: 'flex', width: '100%', padding: 0, margin: 0, flexDirection: 'column', background: '#fff', border: '1px solid #d5d5d5' }} >
                                <div style={{ display: 'flex' }} >
                                    <div style={{ display: 'flex', margin: '10px', padding: '5px', fontSize: '18px', fontWeight: 500, background: '#fff' }} >
                                        Address
                                    </div>
                                </div>
                                <Divider style={{ margin: '0px 0px 0px 0px' }} />
                                <div style={{ display: 'flex', margin: '10px', padding: '5px', flexDirection: 'row' }}>
                                    <div style={{ display: 'flex' }} >
                                        <AddressFormComponent userData={userData} />

                                    </div>

                                </div>
                            </div> : <></>

                        }

                        {profile ?
                            <div style={{ display: 'flex', width: '100%', padding: 0, margin: 0, flexDirection: 'column', background: '#fff', border: '1px solid #d5d5d5' }} >
                                <div style={{ display: 'flex' }} >
                                    <div style={{ display: 'flex', margin: '10px', padding: '5px', fontSize: '18px', fontWeight: 500, background: '#fff' }} >
                                        Profile
                                    </div>
                                </div>
                                <Divider style={{ margin: '0px 0px 0px 0px' }} />
                                <div style={{ display: 'flex', margin: '10px', padding: '5px', flexDirection: 'row' }} >
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} >
                                            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}  >
                                                <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', width: '75px', height: "75px", borderRadius: '50%', background: 'black', color: 'white', fontSize: '30px', margin: '0px 0px 0px 0px', padding: '0px' }} >
                                                    UV
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6} >
                                            <TextField
                                                size="small"
                                                margin="dense"
                                                id="firstname"
                                                label="First Name"
                                                type="text"
                                                fullWidth
                                                variant="outlined"
                                                required
                                                onChange={(event) => setFirstname(event.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={6} >
                                            <TextField
                                                size="small"
                                                margin="dense"
                                                id="lastname"
                                                label="last Name"
                                                type="text"
                                                fullWidth
                                                variant="outlined"
                                                required
                                                onChange={(event) => setLastname(event.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={6} >

                                            <TextField
                                                size="small"
                                                margin="dense"
                                                id="email"
                                                label="Email Address"
                                                type="text"
                                                fullWidth
                                                variant="outlined"
                                                required
                                                onChange={(event) => setEmailid(event.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={6} style={{ lineHeight: "50px" }} >
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileDatePicker

                                                    margin="dense"
                                                    label="Date Of Birth"
                                                    inputFormat="DD/MM/YYYY"
                                                    value={dateofbirth}
                                                    onChange={handleDateChange}
                                                    renderInput={(params) => <TextField style={{ width: '320px', height: '12px', color: 'rgba(0, 0, 0, 0.6);' }} {...params} />}
                                                />
                                            </LocalizationProvider>

                                        </Grid>

                                        <Grid item xs={12} >
                                            <TextField
                                                size="small"
                                                margin="dense"
                                                id="mobilenumber"
                                                label="Mobile number"
                                                type="text"
                                                fullWidth
                                                variant="outlined"
                                                required
                                                onChange={(event) => setMobileNumber(event.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{ lineHeight: "50px" }} >

                                            <FormControl>
                                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    value={gender}
                                                    onChange={handleChange}
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />


                                                </RadioGroup>
                                            </FormControl>

                                        </Grid>

                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }} >
                                            <Checkbox {...label} /><span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', fontWeight: 400, letterSpacing: 1 }} > I want to receive order updates on WhatsApp</span>
                                        </Grid>

                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }} >

                                            <Button variant="contained" style={{ background: '#51cccc' }} fullWidth >SAVE CHANGES</Button>
                                        </Grid>

                                    </Grid>
                                </div>
                            </div> : <></>

                        }

                        {wishlist ?
                            <div style={{ display: 'flex', width: '100%', padding: 0, margin: 0, flexDirection: 'column', background: '#fff', border: '1px solid #d5d5d5' }} >
                                <div style={{ display: 'flex' }} >
                                    <div style={{ display: 'flex', margin: '10px', padding: '5px', fontSize: '18px', fontWeight: 500, background: '#fff' }} >
                                        WishList
                                    </div>
                                </div>
                                <Divider style={{ margin: '0px 0px 0px 0px' }} />
                                <div style={{ display: 'flex', margin: '10px', padding: '5px', flexDirection: 'row' }} >
                                    <div style={{ display: 'flex' }} >
                                        <img src="/images/DC.jpg" alt="product" width={'110px'} />
                                    </div>
                                    <div style={{ display: 'flex', margin: "0% 0% 0% 10%", flexDirection: "column", flexGrow: 1 }}>
                                        <div style={{ display: 'flex', fontWeight: "500", margin: "3px 0px 3px 0px", }} >
                                            DC Detective Comic T-shirt
                                        </div>
                                        <div style={{ display: 'flex', margin: "3px 0px 3px 0px", }} >
                                            Ratings Description
                                        </div>
                                        <div style={{ display: 'flex', margin: "3px 0px 3px 0px" }} >

                                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px' }}>

                                                <div style={{ display: 'flex', fontWeight: '600', fontSize: '18px', flexDirection: 'row' }} >

                                                    <span>&#8377; 3243</span><span style={{ display: 'flex', fontWeight: '500', fontSize: '16px', color: '#515151', margin: '0px 10px', alignItems: 'center' }}><s>&#8377; 5464</s></span><span style={{ display: 'flex', color: 'green', fontWeight: '500', fontSize: '16px', margin: '0px 10px', alignItems: 'center' }}>Save &#8377;4566</span>

                                                    {/* <><span>&#8377; 5675</span><span>Fixed Price</span></> */}


                                                </div>
                                            </div>


                                        </div>
                                        <div style={{ display: 'flex', margin: "25px 0px 0px 0px", }} >
                                            <Button size="small" variant="contained" style={{ background: '#51cccc' }} startIcon={<ShoppingCart />}>Add to cart</Button>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} >
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </div> : <></>

                        }

                        {coupon ?
                            <div style={{ display: 'flex', width: '100%', padding: 0, margin: 0, flexDirection: 'column', background: '#fff', border: '1px solid #d5d5d5' }} >
                                <div style={{ display: 'flex' }} >
                                    <div style={{ display: 'flex', margin: '10px', padding: '5px', fontSize: '18px', fontWeight: 500, background: '#fff' }} >
                                        Coupons
                                    </div>
                                </div>
                                <Divider style={{ margin: '0px 0px 0px 0px' }} />
                                <div style={{ display: 'flex', margin: '10px', padding: '5px', flexDirection: 'row' }}>
                                    <ul>
                                        
                                        <li style={{ listStyle: 'none' }} >
                                            {/* 100 rupee off coupon */}
                                            <div style={{ width: '490px', height: '150px', background: '#F9F9F9', border: '1px solid #d5d5d5', borderRadius: '15px', flexDirection: 'column' }} >
                                                <div style={{ display: 'flex', justifyContent: 'none', alignItems: 'center', height: '100%' }} >
                                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: 0 }} >
                                                        <span style={{ borderRight: '1px dashed #d5d5d5', padding: 22 }} >
                                                            <span style={{ fontSize: '60px', fontWeight: '400', letterSpacing: "2px" }} >&#8377;100</span>
                                                            <span style={{ fontSize: '28px', fontWeight: '500', letterSpacing: "1px", height: '100%', marginTop: '30%' }} >off</span>
                                                        </span>
                                                    </span>
                                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'left', height: '100%', flexDirection: 'column', paddding: '0px 20px' }} >
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px',fontSize:'25px',fontWeight:400 }} >
                                                            Min. Cart Value &#8377;999
                                                        </div>
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px',fontSize:'12px',fontWeight:500 }}>
                                                            Applicable on all orders
                                                        </div>
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px' }} >
                                                            <div style={{ display: 'flex', border: '1px dashed #746F6F', width:'216px' }} >
                                                                <div style={{ display: 'flex', alignItems: 'left', margin: '4px 8px', }} >
                                                                    <div style={{display:'flex',marginRight:'60%'}}>
                                                                        <input readOnly type='textarea' value='TUG100' style={{ border: 'none', backgroung: '#F9F9F9', width: '59px' }} />
                                                                    </div>
                                                                    <div style={{display:'flex'}}>
                                                                        <button style={{ border: 'none', backgroung: '#51cccc', padding:'5px 12px' }} >COPY</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li style={{ listStyle: 'none',marginTop:'30px' }} >
                                            {/* 200 rupee off coupon */}
                                            <div style={{ width: '490px', height: '150px', background: '#F9F9F9', border: '1px solid #d5d5d5', borderRadius: '15px', flexDirection: 'column' }} >
                                                <div style={{ display: 'flex', justifyContent: 'none', alignItems: 'center', height: '100%' }} >
                                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: 0 }} >
                                                        <span style={{ borderRight: '1px dashed #d5d5d5', padding: 22 }} >
                                                            <span style={{ fontSize: '60px', fontWeight: '400', letterSpacing: "2px" }} >&#8377;200</span>
                                                            <span style={{ fontSize: '28px', fontWeight: '500', letterSpacing: "1px", height: '100%', marginTop: '30%' }} >off</span>
                                                        </span>
                                                    </span>
                                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'left', height: '100%', flexDirection: 'column', paddding: '0px 20px' }} >
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px',fontSize:'25px',fontWeight:400 }} >
                                                            Min. Cart Value &#8377;1999
                                                        </div>
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px',fontSize:'12px',fontWeight:500 }}>
                                                            Applicable on all orders
                                                        </div>
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px' }} >
                                                            <div style={{ display: 'flex', border: '1px dashed #746F6F', width:'216px' }} >
                                                                <div style={{ display: 'flex', alignItems: 'left', margin: '4px 8px', }} >
                                                                    <div style={{display:'flex',marginRight:'60%'}}>
                                                                        <input readOnly type='textarea' value='TUG200' style={{ border: 'none', backgroung: '#F9F9F9', width: '59px' }} />
                                                                    </div>
                                                                    <div style={{display:'flex'}}>
                                                                        <button style={{ border: 'none', backgroungColor: '#51cccc', padding:'5px 12px' }} >COPY</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li style={{ listStyle: 'none',marginTop:'30px' }} >
                                            {/* 300 rupee off coupon */}
                                            <div style={{ width: '490px', height: '150px', background: '#F9F9F9', border: '1px solid #d5d5d5', borderRadius: '15px', flexDirection: 'column' }} >
                                                <div style={{ display: 'flex', justifyContent: 'none', alignItems: 'center', height: '100%' }} >
                                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: 0 }} >
                                                        <span style={{ borderRight: '1px dashed #d5d5d5', padding: 22 }} >
                                                            <span style={{ fontSize: '60px', fontWeight: '400', letterSpacing: "2px" }} >&#8377;300</span>
                                                            <span style={{ fontSize: '28px', fontWeight: '500', letterSpacing: "1px", height: '100%', marginTop: '30%' }} >off</span>
                                                        </span>
                                                    </span>
                                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'left', height: '100%', flexDirection: 'column', paddding: '0px 20px' }} >
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px',fontSize:'25px',fontWeight:400 }} >
                                                            Min. Cart Value &#8377;2999
                                                        </div>
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px',fontSize:'12px',fontWeight:500 }}>
                                                            Applicable on all orders
                                                        </div>
                                                        <div style={{ display: 'flex', margin: '10px 0px 0px 10px' }} >
                                                            <div style={{ display: 'flex', border: '1px dashed #746F6F', width:'216px' }} >
                                                                <div style={{ display: 'flex', alignItems: 'left', margin: '4px 8px', }} >
                                                                    <div style={{display:'flex',marginRight:'60%'}}>
                                                                        <input readOnly type='textarea' value='TUG300' style={{ border: 'none', backgroung: '#F9F9F9', width: '59px' }} />
                                                                    </div>
                                                                    <div style={{display:'flex'}}>
                                                                        <button style={{ border: 'none', backgroungColor: '#51cccc', padding:'5px 12px' }} >COPY</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        
                                    </ul>

                                </div>
                            </div> : <></>

                        }

                        {help ?
                            <div style={{ display: 'flex', width: '100%', padding: 0, margin: 0, flexDirection: 'column', background: '#fff', border: '1px solid #d5d5d5' }} >
                                <div style={{ display: 'flex' }} >
                                    <div style={{ display: 'flex', margin: '10px', padding: '5px', fontSize: '18px', fontWeight: 500, background: '#fff' }} >
                                        Help Center
                                    </div>
                                </div>
                                <Divider style={{ margin: '0px 0px 0px 0px' }} />
                                <div style={{ display: 'flex', margin: '10px', padding: '5px', flexDirection: 'row' }}>

                                </div>
                            </div> : <></>

                        }

                    </div>


                </div>
            </div>
            <div>
                <QualityAssureComponent />
            </div>
            <HomeFooter />
        </div>
    )
}

