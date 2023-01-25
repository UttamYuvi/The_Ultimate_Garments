import React from "react"

export default function ProductPriceComponent(props) {


    return (<div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px' }}>

            <div style={{ display: 'flex', fontWeight: '600', fontSize: '18px', flexDirection: 'row' }} >

                <span>&#8377; 3243</span><span style={{ display: 'flex', fontWeight: '500', fontSize: '16px', color: '#515151', margin: '0px 10px', alignItems: 'center' }}><s>&#8377; 5464</s></span><span style={{ display: 'flex', color: 'green', fontWeight: '500', fontSize: '16px', margin: '0px 10px', alignItems: 'center' }}>Save &#8377;4566</span>

                {/* <><span>&#8377; 5675</span><span>Fixed Price</span></> */}


            </div>
        </div>
    </div>)
}