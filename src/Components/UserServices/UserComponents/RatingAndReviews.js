import React from 'react';
import { Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function RatingAndReviews() {

    return (
        <Grid container spacing={2} >
            <Grid item xs={12} style={{ marginLeft: '16px', fontSize: '22px', fontWeight: '600' }} >
                Rating & Reviews
            </Grid>
            <Grid item xs={5} >
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px', fontWeight: '500' }} >
                    Rating & Reviews
                </div>
                <div style={{ display: 'flex', width: '90%', height: '250px', background: '#000', margin: '10px 10px 10px 25px', flexDirection: 'column' }} >
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', width: '100%', margin: '10px 10px', fontSize: '30px', fontWeight: '700' }} >
                        4.80
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', }} >
                        <StarIcon style={{ color: "yellow" }} />
                        <StarIcon style={{ color: "yellow" }} />
                        <StarIcon style={{ color: "yellow" }} />
                        <StarIcon style={{ color: "yellow" }} />
                        <StarIcon style={{ color: "#fff" }} />

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', fontSize: '15px', fontWeight: '500', lineHeight: '30px' }}>
                        15 Beyoungster Rating
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', fontSize: '15px', fontWeight: '500', lineHeight: '30px' }}>
                        User says
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', fontSize: '15px', fontWeight: '500', lineHeight: '30px', flexDirection: 'row', width: "100%" }}>

                        <div style={{ display: 'flex', width: '20%', justifyContent: 'center' }} >
                            Fitness
                        </div>

                        <div style={{ display: 'flex', width: '60%', alignItems: 'center' }} >
                            <div style={{ display: 'flex', width: '100%', height: "10px", margin: "10px", background: '#fff' }} >
                                <div style={{ display: 'flex', width: '93%', justifyContent: 'left', background: 'orange' }} ></div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', width: '20%', justifyContent: 'center' }} >
                            93%
                        </div>

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', fontSize: '15px', fontWeight: '500', lineHeight: '30px', flexDirection: 'row', width: "100%" }}>

                        <div style={{ display: 'flex', width: '20%', justifyContent: 'center' }} >
                            Comfort
                        </div>

                        <div style={{ display: 'flex', width: '60%', alignItems: 'center' }} >
                            <div style={{ display: 'flex', width: '100%', height: "10px", margin: "10px", background: '#fff' }} >
                                <div style={{ display: 'flex', width: '97%', justifyContent: 'left', background: 'orange' }} ></div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', width: '20%', justifyContent: 'center' }} >
                            97%
                        </div>

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', fontSize: '15px', fontWeight: '500', lineHeight: '30px', flexDirection: 'row', width: "100%" }}>

                        <div style={{ display: 'flex', width: '20%', justifyContent: 'center' }} >
                            Softness
                        </div>

                        <div style={{ display: 'flex', width: '60%', alignItems: 'center' }} >
                            <div style={{ display: 'flex', width: '100%', height: "10px", margin: "10px", background: '#fff' }} >
                                <div style={{ display: 'flex', width: '83%', justifyContent: 'left', background: 'orange' }} ></div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', width: '20%', justifyContent: 'center' }} >
                            83%
                        </div>

                    </div>

                </div>
            </Grid>
            <Grid item xs={7}>
                <Grid>
                    <Grid item xs={10} style={{ marginLeft: '16px', fontSize: '18px', fontWeight: '500' }} >
                        Customer Reviews
                    </Grid> 
                    <Grid item xs={10} style={{margin:'0px 30px',lineHeight:'26px'}} >

                        <div style={{ display: 'flex', flexDirection: 'row',marginTop:'20px' }}  >
                            <div style={{ display: 'flex' }}   >
                                <div style={{ width: '50px', height: '32px', background: 'green',borderRadius:'7px' }}   >
                                    <div style={{ display: 'flex',color:'#fff',justifyContent:'center',alignItems:'center' }}  >
                                        <span style={{margin:'4px 3px '}} >4</span><StarIcon size='small' style={{color:'#fff'}} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex',marginLeft:'10px' }}   >
                                Nice quality. Just as shown in the picture. Quick delivery by Beyoung
                            </div>
                        </div>
                        <div style={{ display: 'flex',color:'#515151',fontSize:'13px',fontWeight:500,marginLeft:'60px' }}   >
                            Uttam | 5 Nov 2022
                        </div>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}