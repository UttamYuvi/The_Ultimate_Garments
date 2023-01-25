import React, { useState,useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import LoginDialog from "./LoginDialog";
import { postData } from "../../Services/NodeServices";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };


export default function AddressFormComponent(props) {


    console.log('ddddddddddddddddddddd', props.userData)

    // const [mobileNumber, setMobileNumber] = useState('');
    // const [emailid, setEmailid] = useState('');
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [dateofbirth, setDateofbirth] = useState('');
    // const [gender, setGender] = useState('');

    const [mobileNumber, setMobileNumber] = useState(props.userData.mobilenumber);
    const [emailid, setEmailid] = useState(props.userData.emailid);
    const [firstname, setFirstname] = useState(props.userData.firstname);
    const [lastname, setLastname] = useState(props.userData.lastname);
    const [dateofbirth, setDateofbirth] = useState(props.userData.dateofbirth);
    const [gender, setGender] = useState(props.userData.gender);
    const [pincode, setPincode] = useState('');
    const [town, setTown] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [userid, setuserID] = useState(props.userData.userid);
    const [userAddress, setUserAddress] = useState({})


    console.log('useriddddddddddd',props.userData.userid)

    const fetchUserAddress = async () => {
       
        var result = await postData("userinterface/check_user_address", { userid })
        if (result.status) {
            console.log(result.status)
            setUserAddress(result)
        }

    }


    useEffect(function () {
        fetchUserAddress()
    }, [])


    const showAddress=(address)=>{
        return address.map((item)=>{
        return(<div>
           <div>{props.userData.firstname} {props.userData.lastname}</div>
           <div>{item.address}</div>
           <div>{item.town} {item.pincode}</div>    
           <div>{item.city},{item.state}</div>
         </div>)
        })
        }

    const handleClick = async () => {
        if (town && pincode && city && state && address) {
            var result = await postData('userinterface/submit_useraddress', { userid, pincode, town, city, state, address })
            if (result.status) {
                alert("Address Submitted Successfully")
            }
            else {
                alert("Fail to submit ur address....")
            }
        }
        else {
            alert("Pls Input Complete Address.....")
        }
    }
    return (
        <div style={{ display: 'flex', width: '60%', padding: '10px 10px', flexDirection: 'column' }} >
            {/* <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', lineHeight: '27px' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }} >Already heav an account? <Button variant="outlined" size="small" style={{ marginLeft: 3 }} ><LoginDialog/></Button></div>                    
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }} >Or</div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }} >Checkout as Guest</div>
                </div>
            </div> */}
            <div style={{ display: 'flex', fontSize: '20px', fontWeight: '500', lineHeight: 3 }} >
                Delivery Address
            </div>

            {userAddress.status ? <>{showAddress(userAddress.data)}</> :
                <div style={{ display: 'flex', }} >
                    <Grid container spacing={2} >
                        
                        <Grid item xs={6} >
                            <TextField size="small" label="First Name" required fullWidth value={firstname} >First Name</TextField>

                        </Grid>
                        <Grid item xs={6} >
                            <TextField size="small" label="Last Name" required fullWidth value={lastname}>Last Name</TextField>

                        </Grid>
                        <Grid item xs={6} >
                            <TextField size="small" label="Email" required fullWidth value={emailid} >Email</TextField>

                        </Grid>
                        <Grid item xs={6} >
                            <TextField size="small" label="Phone No." required fullWidth value={mobileNumber} >Phone No.</TextField>

                        </Grid>
                        <Grid item xs={6} >
                            <TextField size="small" label="Pin Code" required fullWidth onChange={(event) => setPincode(event.target.value)} >Pin Code</TextField>

                        </Grid>
                        <Grid item xs={6} >
                            <TextField size="small" label="Town/Village" required fullWidth onChange={(event) => setTown(event.target.value)} >Town/Village</TextField>

                        </Grid>
                        <Grid item xs={6} >
                            <TextField size="small" label="City/District" required fullWidth onChange={(event) => setCity(event.target.value)} >City/District</TextField>

                        </Grid>
                        <Grid item xs={6} >
                            <TextField size="small" label="State" required fullWidth onChange={(event) => setState(event.target.value)} >State</TextField>

                        </Grid>
                        <Grid item xs={12} >
                            <TextField size="small" label="Address(House No,Building,Street,Area)" required fullWidth onChange={(event) => setAddress(event.target.value)} >Address(House No,Building,Street,Area)</TextField>

                        </Grid>
                        <Grid item xs={12}>
                            <Checkbox {...label} /> Make this my Default Address
                        </Grid>
                        <Grid item xs={12}>
                            <div
                                style={{
                                    background: "#ddd",
                                    width: 138,
                                    padding: 7,
                                    borderRadius: 5,
                                    border: "2px solid #ABABAB",
                                    fontFamily: "sans-serif",
                                    fontSize: 16,
                                    cursor: "pointer",
                                    lineHeight: ''
                                }}
                                onClick={handleClick}
                            >
                                + Add Address
                            </div>
                        </Grid>
                    </Grid>
                </div>
            }

        </div>
    )
}