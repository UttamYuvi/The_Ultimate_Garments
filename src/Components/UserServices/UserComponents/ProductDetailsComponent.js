import React from "react";
import { ServerURL } from "../../Services/NodeServices";
import { useNavigate } from "react-router-dom";


export default function ProductDetailsComponent(props) {

    const navigate=useNavigate()
    const handleProductDetails = (item) => {

        navigate('/productdetails',{state:{product:JSON.stringify(item)}})

    }


    return props.data.map((item) => {
        return (

            <div onClick={()=>handleProductDetails(item)} style={{ display: 'flex', flexDirection: 'column' }}>

                <div style={{ padding: 2, margin: 4, position: 'relative', width: '272px', height: '296px' }}>
                    <img src={`${ServerURL}/images/${item.picture}`} alt='smallcomponent' style={{ width: '100%', height: '100%' }} />

                    <div style={{ fontSize: 20, fontWeight: 'bold', position: 'absolute', top: '91%', color: '#fff', zIndex: 2, textAlign: 'center', width: '99%', background: '#000', opacity: '60%', display: 'flex', justifyContent: 'center' }}>{item.description}</div>

                </div>
                <div style={{ display: 'flex', justifyContent: "center", marginTop: 5, color: '#000', fontWeight: 700, letterSpacing: 1, fontSize: 16 }} >
                    {item.productname}
                </div>
                <div style={{ display: 'flex', justifyContent: "center", marginTop: 3, fontWeight: 600, letterSpacing: 1, fontSize: 14 }}>
                    {item.offerprice > 0 ? <><span style={{ color: '#000' }}>&#8377;{item.offerprice}</span><span style={{ marginLeft: 7, textDecoration: 'line-through', color: 'red' }}>&#8377;{item.price}</span><span style={{ marginLeft: 7, color: 'green' }}>Save &#8377;{item.price - item.offerprice}</span></> : <><span>&#8377; {item.price}</span><span>Fixed Price</span></>}
                </div>


            </div>
        )
    })


}