import React, { useState } from "react";
import { Grid,Button } from "@mui/material";

export default function ProductDetailsSubComponent(props) {

    const [showMoreOrLessBtn, setShowMoreOrLessBtn] = useState(false)

    return (
        <div>
            <Grid container spacing={2} >
                <Grid item xs={12} style={{ marginLeft: '16px', fontSize: '22px', fontWeight: '600' }} >
                    Product Details
                </Grid>

                <Grid item xs={11}  >
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        <div style={{ display: 'flex', background: '#f1f2f6', margin: '10px', padding: '10px', width: '33%', }} >
                            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', fontWeight: '600', lineHeight: '50px' }}>Product Highlights
                                <div style={{ fontSize: '15px', fontWeight: '400', lineHeight: '30px' }}>
                                    <tr>
                                        <td style={{ fontWeight: 'bold', width: '100px' }}>Fabric</td>
                                        <td >100% Cotton</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 'bold' }}>Pattern</td>
                                        <td>Solid</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 'bold' }}>Fit</td>
                                        <td> Regular-Fit </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 'bold' }}>Style</td>
                                        <td>	Street Wear</td>
                                    </tr>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', background: '#f1f2f6', margin: '10px', padding: '10px', width: '33%', flexDirection: 'column' }} >
                            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', fontWeight: '600', lineHeight: '50px' }}>Product Description</div>
                            <div style={{ display: 'flex', fontSize: '15px', fontWeight: '400', lineHeight: '25px' }}>
                                <ul>
                                    <li>Made with deluxe Cotton – provides a soft feel everytime</li>
                                    <li>2 multi-functional pockets & 1 cargo pocket</li>
                                    <li>Smooth-elastic waistband with adjustable drawstring</li>
                                    <li>Ideal street wear with topmost comfort</li>
                                    <li>Available in 7 bold colors</li>
                                </ul>
                            </div>

                            {showMoreOrLessBtn ? <><div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', fontWeight: '600', lineHeight: '50px' }}>Size & Fit:</div>
                                <div style={{ display: 'flex', fontSize: '15px', fontWeight: '400', lineHeight: '25px' }}>
                                    <ul>
                                        <li>Every Jogger Pant is tailored with regular fit over years of testing.</li>
                                        <li>Our model (Height:6.1ft) is wearing a size 32.</li>
                                        <li>Please refer to the size chart for more accuracy.</li>

                                    </ul>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', fontWeight: '600', lineHeight: '50px' }}>Wash Care</div>
                                <div style={{ display: 'flex', fontSize: '15px', fontWeight: '400', lineHeight: '25px' }}>
                                    <ul>
                                        <li>Gentle machine wash</li>
                                        <li>Do not tumble dry</li>
                                        <li>Do not iron directly</li>
                                        <li>Do not use bleach</li>
                                    </ul>
                                </div>
                            </> : <></>}
                            <div>
                                <Button onClick={() => setShowMoreOrLessBtn(!showMoreOrLessBtn)} style={{ textTransform: 'capitalize', color: '#51cccc', margin: "3px 0px" }}>Read Description</Button>
                            </div>


                        </div>
                        <div style={{ display: 'flex', background: '#f1f2f6', margin: '10px', padding: '10px', width: '33%', flexDirection: 'column' }} >
                            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', fontWeight: '600', lineHeight: '50px' }} >
                                Delivery & Return Policy
                            </div>
                            <div style={{ display: 'flex', fontSize: '14px' }}>
                                <p>We provide free shipping on all orders. Pay online to avoid charges of ₹50/product applicable on COD orders. The return or exchange can be done within 15 days after delivery. Every delivery from Beyoung is processed under excellent condition and in the fastest time possible. For our beloved customer’s care, we give contactless delivery. Refer to FAQ for more information.</p>
                            </div>

                        </div>
                    </div>
                </Grid>



            </Grid>

        </div>
    )
}