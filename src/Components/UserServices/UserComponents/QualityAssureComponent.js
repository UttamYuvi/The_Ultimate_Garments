import React from "react";
import { Grid } from "@mui/material";

export default function QualityAssureComponent() {

    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', }}>
            <div style={{ display: 'flex', width: '90%', justifyContent: 'center', background: '#fff', padding: '20px', marginTop: '10px' }}>
                <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <div style={{ display: 'flex' }} ><img src="images/home-grown-icons.jpg" width='65px' /></div>
                        <div style={{ display: 'flex' }}>Hone Grown Brand</div>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ display: 'flex' }}><img src="images/quality-icons.jpg" width='65px' /></div>
                        <div style={{ display: 'flex' }}>100% Quantity Assured</div>

                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ display: 'flex' }}><img src="images/secure-payment-icons.jpg" width='65px' /></div>
                        <div style={{ display: 'flex' }}>100% Secure Payment</div>

                    </Grid>
                </Grid>

            </div>

        </div>
    )
}