import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

import ShoppingCart from "@mui/icons-material/ShoppingCart";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


import PriceDetails from "./UserComponents/PriceDetails";
import DiscountComponent from "./UserComponents/DiscountComponent";
import CouponComponent from "./UserComponents/CouponComponent";
import AddressFormComponent from "./UserComponents/AddressFormComponent";
import QualityAssureComponent from "./UserComponents/QualityAssureComponent";

import LoginDialog from "./UserComponents/LoginDialog";
import HomeFooter from "./UserComponents/HomeFooter";
import { useSelector } from "react-redux";

export default function Shipping() {   


    var cart = useSelector(state => state.cart)
    var user = useSelector(state => state.user)
    var userData = Object.values(user)[0]
    console.log('userid',userData)
    var values = Object.values(cart)
    const [refresh, setRefresh] = useState(false)
    const updateCart = () => {
        setRefresh(!refresh)
    }


    return (
        <div>
            <body style={{
                //background:'#dfe6e9',
                background: '#ecf0f1'
            }}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" style={{ background: '#000' }} >
                        <Toolbar>
                            <div style={{ width: '100%', display: 'flex' }}>
                                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ width: '200px', height: '50px', display: 'flex' }} >
                                        <img src="images/TUG.png" alt='logoTUG' width='100%' />

                                    </div>
                                </div>
                                <div style={{ width: '80%', display: 'flex' }}>
                                    <div style={{ display: 'flex', marginLeft: '57%' }} >
                                        <span style={{ display: 'flex', justifyContent: 'center' }}><img src="images/shield.svg" alt="shield" width="50px" /></span>
                                        <span><h2>100% SECURE PAYMENT</h2></span>

                                    </div>
                                </div>
                            </div>


                        </Toolbar>

                    </AppBar>
                </Box>


                <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <ul style={{ display: 'flex', margin: '25px auto', width: '40%', justifyContent: 'space-between', position: 'realtive', listStyleType: 'none' }}>
                            <span>
                                <li style={{ display: 'flex', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '45px', background: '#fff', marginLeft: '17%', }}><ShoppingCart style={{ marginTop: '15%' }} /></li>
                                MyCart
                            </span>
                            <span>
                                <li style={{ display: 'flex', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '45px', background: '#fff', marginLeft: '17%' }}><HomeRoundedIcon style={{ marginTop: '15%' }} /></li>
                                Address
                            </span>
                            <span>
                                <li style={{ display: 'flex', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '45px', background: '#fff', marginLeft: '17%' }}><PaymentRoundedIcon style={{ marginTop: '15%' }} /></li>
                                Payment
                            </span>

                        </ul>
                    </div>
                </div>


                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', }}>
                    <div style={{ display: 'flex', width: '90%', justifyContent: 'center', background: '#fff', padding: '20px' }}>

                        <AddressFormComponent userData={userData} />

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40%', flexDirection: 'column' }}>
                            <CouponComponent />
                            <DiscountComponent />


                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <PriceDetails page={"Shipping"} values={values} updateCart={updateCart} />

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div >
                    <QualityAssureComponent />
                </div>
                <div>
                    <HomeFooter />
                </div>
            </body>
        </div>
    )
}