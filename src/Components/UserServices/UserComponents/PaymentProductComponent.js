import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { ServerURL } from "../../Services/NodeServices";

export default function PaymentProductComponent(props) {

    var cart = useSelector(state => state.cart)
    var keys = Object.keys(cart)
    var values = Object.values(cart)

    return values.map((item) => {

        return (
            <div style={{ display: 'flex', flexDirection: 'row', width: '300px', margin: '4px' }}>

                <div style={{ width: '30%', height: 75, display: 'flex' }}>
                    <img
                        src={`${ServerURL}/images/${item.picture}`} 
                        alt='smallcomponent' style={{ width: 75, height: 75 }} />

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                    <div style={{ display: 'flex', justifyContent: "left", marginTop: 5, color: '#000', fontWeight: 700, letterSpacing: 1, fontSize: 14 }} >
                        {item.productname}
                        <div style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>* {item.qty}</div>
                    </div>
                    <div style={{ marginTop: 3, fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>
                        {/* {item.offerprice > 0 ? <><div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', flexDirection: 'row' }}><span style={{ color: '#000' }}>&#8377;{item.offerprice}</span><span style={{ marginLeft: 7, textDecoration: 'line-through', color: 'red' }}>&#8377;{item.price}</span></div></div><div><span style={{ color: 'green' }}>Save &#8377;{item.price - item.offerprice}</span></div></> : <><span>&#8377;{item.price}</span><span>Fixed Price</span></>} */}
                        1200
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '8px', width: '20%' }} >

                    <span style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12, marginLeft: '5px' }}>
                        {/* {item.offerprice > 0 ? <>&#8377;{item.offerprice * item.qty}</> : <>&#8377;{window.payableAmt = item.price * item.qty}</>} */}
                        1200

                    </span>
                </div>

            </div>
        )

    })

}