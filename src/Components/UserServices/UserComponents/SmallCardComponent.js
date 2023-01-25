import React, { useState, useEffect } from "react";
import { ServerURL } from "../../Services/NodeServices";

export default function SmallCardComponent(props) {

    const MyComponent = () => {

        return props.data.map((item) => {
            return (
                <div style={{padding:2, margin:4, position: 'relative', width: '272px', height: '296px' }}>
                    <img src={`${ServerURL}/images/${item.picture}`} alt='smallcomponent' style={{ width: '100%', height: '100%' }} />
                    
                    <div style={{ fontSize: 20, fontWeight: 'bold', position: 'absolute', top: '91%', color: '#fff', zIndex: 2, textAlign:'center', width:'99%', background:'#000',opacity:'60%', display:'flex', justifyContent:'center' }}>{item.productname}</div>
                    
                </div>
            )
        })

    }



    return (
        <MyComponent />       
    )
}