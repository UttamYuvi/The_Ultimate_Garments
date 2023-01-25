import React, { useState, useEffect } from "react";
import { ServerURL } from "../../Services/NodeServices";

export default function TwoCardComponent(props) {

    const MyComponent = () => {

        return props.data.map((item) => {
            return (
                <div style={{padding:2, margin:3, position: 'relative', width: '558px', height: '412px' }}>
                    <img src={`${ServerURL}/images/${item.picture}`} alt='TWOcomponent' style={{ width: '100%', height: '100%' }} />
                    <div style={{ fontSize: 20, fontWeight: 'bold', position: 'absolute', left: '10%', top: '90%', color: '#fff', zIndex: 1 }}>{item.productname}</div>
                </div>
            )
        })

    }



    return (     
        <MyComponent />       
    )
}