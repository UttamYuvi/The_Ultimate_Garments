import React from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ProductPriceComponent from "./ProductPriceComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";

import { Button } from "@mui/material";


export default function WishListComponent() {

    return (
        <div  >
            <div style={{ display: 'flex', margin: '10px', padding: '5px', fontSize: '18px', fontWeight: 500 }} >
                WishList
            </div>
            <Divider style={{ margin: '0px 0px 0px 0px' }} />

            <div style={{ display: 'flex', margin: '10px', padding: '5px', flexDirection: 'row' }} >
                <div style={{ display: 'flex', background: "yellow" }} >
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
                        <ProductPriceComponent />
                    </div>
                    <div style={{ display: 'flex', margin: "25px 0px 0px 0px", }} >
                        <Button size="small" variant="contained" style={{ background: '#51cccc' }} startIcon={<ShoppingCart />}>Add to cart</Button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} >
                    <DeleteIcon />
                </div>
            </div>
            <Divider style={{ margin: '0px 0px 0px 0px' }} />

            <div style={{ display: 'flex', margin: '10px', padding: '5px' }} >
                <div style={{ display: 'flex', width: '100px', height: "120px", background: "blue" }} >
                    img
                </div>
                <div style={{ display: 'flex', margin: "0% 0% 0% 10%", background: "blue" }}>
                    Product 2

                </div>
            </div>
            <Divider style={{ margin: '0px 0px 0px 0px' }} />



        </div>

    )
}