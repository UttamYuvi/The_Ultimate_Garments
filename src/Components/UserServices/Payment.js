import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import ProductStatusBar from "./UserComponents/ProductStatusBar";
import { Button, Grid } from '@mui/material';
import PaymentSelection from "./UserComponents/PaymentSection";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PriceDetails from "./UserComponents/PriceDetails";
import { useSelector } from "react-redux";
import PaymentProductComponent from "./UserComponents/PaymentProductComponent";
import QualityAssureComponent from "./UserComponents/QualityAssureComponent";
import HomeFooter from "./UserComponents/HomeFooter";

export default function Payment(props) {

    
    var cart = useSelector(state => state.cart)
    var values = Object.values(cart)
    var user = useSelector(state => state.user)
    var userData = Object.values(user)[0]

    const [refresh, setRefresh] = useState(false)
    const updateCart = () => {
        setRefresh(!refresh)
    }



    return (        

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


            <ProductStatusBar />


            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', }}>
                <Grid item xs={12} style={{ display: 'flex', width: '90%', justifyContent: 'center', background: '#fff', padding: '20px' }}>
                    <Grid item xs={8} style={{ display: 'flex', border: '1px solid #ddd', width: '60%', height: 'auto' }} >
                        <PaymentSelection  />
                    </Grid>

                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', width: '40%', flexDirection: 'column', margin: '0px 28px 0px' }}>
                        
                        <div>
                            <PaymentProductComponent/>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <PriceDetails page={"Payment"} value={values} updateCart={updateCart} />

                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>

            <div style={{ marginTop: 30 }}>
                <QualityAssureComponent />
            </div>
            <div style={{ marginTop: 30 }}>
                <HomeFooter/>
            </div>
        </body>





    )
}