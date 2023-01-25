import React from "react";
import { Button, Grid, TextField, } from "@mui/material";


export default function DeliveryOptionBox() {

    return (
        <Grid container spacing={2} >

            <Grid item xs={12} style={{ display: 'flex', border: '1px solid #ddd', margin: '10px', padding: '10px', flexDirection: 'column' }} >
                <div style={{ display: 'flex',fontSize:'18px',lineHeight:'35px',fontWeight:400 }}  >
                    Delivery Options
                </div>
                <div style={{ display: 'flex',fontSize:'15px',lineHeight:'30px',color:'#515151' }}>
                    Enter your Pincode to check the delivery time and free pick up options
                </div>
                <div  style={{ display: 'flex',margin:'10px 0px' }}>
                    <span><TextField label='Enter Pincode' size="small"></TextField></span>
                    <span><Button size="medium" variant="contained" style={{borderRadius: 5,backgroundColor: "#51cccc",fontSize: "15px"}} >APPLY</Button></span>

                </div>
                <div  style={{ display: 'flex',fontSize:'14px',color:'#515151' }}>
                    <span><img src="images/cod.jpg" alt="cod" width='25px'  /></span>
                    <span>Cash on Delivery</span>

                </div>
                <div  style={{ display: 'flex',fontSize:'14px',color:'#515151' }}>
                <span><img src="images/ship.jpg" alt="ship" width='25px'  /></span>
                    <span>Express Shipping</span>
                </div>

            </Grid>
        </Grid>
    )
}