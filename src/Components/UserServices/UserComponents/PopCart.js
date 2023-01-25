import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import { useSelector } from 'react-redux';
import { ServerURL } from '../../Services/NodeServices';
import { Divider } from '@mui/material';


export default function PopCart(props) {
  console.log(props)
  const [anchorE1, setAnchorE1] = useState(props.anchorE2);
  const [open, setOpen] = useState(props.popOpen)
  const [refresh, setRefresh] = useState(false)

  var cart = useSelector(state => state.cart)
  var keys = Object.keys(cart)
  var values = Object.values(cart)
  React.useEffect(function () {
    setOpen(props.popOpen)
    setAnchorE1(props.anchorE2)
  }, [props])

  const handlePopoverClose = () => {
    alert('kkk')
    setAnchorE1(null);
    setRefresh(!refresh)
  };

  const totalPayableAmount = (a, b) => {
    var price = 0
    if (b.offerprice > 0)
      price = b.offerprice * b.qty
    else
      price = b.price * b.qty
    return a + price
  }

  const actualAmount = (a, b) => {
    console.log('www', b.price)
    return a + b.price * b.qty
  }
  const aamt = values.reduce(actualAmount, 0)
  const tamt = values.reduce(totalPayableAmount, 0)

  const showCart = () => {
    return values.map((item) => {
      return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '300px', margin: '4px' }}>

          <div style={{ width: '30%', height: 75, display: 'flex' }}>
            <img src={`${ServerURL}/images/${item.picture}`} alt='smallcomponent' style={{ width: 75, height: 75 }} />

          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <div style={{ display: 'flex', justifyContent: "left", marginTop: 5, color: '#000', fontWeight: 700, letterSpacing: 1, fontSize: 14 }} >
              {item.productname}
              <div style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>* {item.qty}</div>
            </div>
            <div style={{ marginTop: 3, fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>
              {item.offerprice > 0 ? <><div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', flexDirection: 'row' }}><span style={{ color: '#000' }}>&#8377;{item.offerprice}</span><span style={{ marginLeft: 7, textDecoration: 'line-through', color: 'red' }}>&#8377;{item.price}</span></div></div><div><span style={{ color: 'green' }}>Save &#8377;{item.price - item.offerprice}</span></div></> : <><span>&#8377;{item.price}</span><span>Fixed Price</span></>}
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '8px', width: '20%' }} >

            <span style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12, marginLeft: '5px' }}>
              {item.offerprice > 0 ? <>&#8377;{item.offerprice * item.qty}</> : <>&#8377;{window.payableAmt = item.price * item.qty}</>}

            </span>
          </div>

        </div>

      )
    })
  }

  const showPaymentDetails = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '0px 10px 0px 10px' }}>
        <div style={{ padding: '5px 0px 5px 0px', display: 'flex', width: 300, justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>Total Amount:</div>
          <span style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>
            &#8377;{aamt}
          </span>
        </div>
        

        <div style={{ padding: '5px 0px 5px 0px', display: 'flex', width: 300, justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12, color: 'green' }}>You save:</div>
          <span style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12, color: 'green' }}>
            -&#8377;{aamt - tamt}
          </span>
        </div>

        <div style={{ padding: '5px 0px 5px 0px', display: 'flex', width: 300, justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>Shipping:</div>
          <span style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12, color: 'green' }}>
            Free
          </span>
        </div>
        <div style={{ width: 300 }}>
          <Divider style={{ color: '#000' }} />
        </div>
        <div style={{ padding: '5px 0px 5px 0px', display: 'flex', width: 300, justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>Amount Payable:</div>
          <span style={{ fontWeight: 600, letterSpacing: 1, fontSize: 12 }}>
            <span style={{ fontSize: '10px', margin: "10px", }} >INR</span>
            &#8377;{tamt}
          </span>
        </div>

      </div>
    )
  }


  return (
    <div>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',

        }}
        open={open}
        anchorE1={anchorE1}
        anchorOrigin={{
          marginTop: '100px',
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {showCart()}
        <Divider />
        {showPaymentDetails()}

      </Popover>
    </div>
  );
}