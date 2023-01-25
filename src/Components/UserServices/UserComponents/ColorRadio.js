import { useEffect, useState } from "react"

export default function ColorRadio(props) {

    var selectedcolor= null
    console.log('xxxxxxxxxxxxxxxxx',props.colorlist)
    const [colorId, setColorId] = useState('')
    const [colorName, setColorName] = useState('')

    const handleColor = (cname) => {
        setColorName(cname)
        selectedcolor = cname
        props.onClick(selectedcolor)
    }

    useEffect(function(){
        if(props && props.colorName){
            setColorName(props.colorName)
        }
    },[])
    const showColor = () => {
        return Object.keys(props.colorlist).map((item) => {

            return (<div onClick={() => handleColor(item)} 

            style={{ border: `${item==colorName ? '2px solid #51cccc' : '1px solid #fff'}`,  boxShadow: ' 10px 10px 5px 0px rgba(0,0,0,0.75);', width: '42px', height: '42px', borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px 7px', cursor: 'pointer',background: `${props.colorlist[item]}` }} value={item}></div>)

            
        })
    }

    return (
        <div>
            <div style={{ paddingTop: '1%' }}><span><span style={{ fontWeight: '400px', fontSize: '20px', paddingTop: '40px' }}>Color : </span><span style={{ color: 'grey' }}>{colorName}</span></span></div>
            <div style={{ display: 'flex', flexDirection: 'row',margin:'1%' }}>
                {props.colorlist==null?<>Pls Select Size....</>:showColor()}
            </div>
        </div>)


}