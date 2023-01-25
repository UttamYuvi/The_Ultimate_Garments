import React from "react";

import { TextField, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Checkbox from '@mui/material/Checkbox';

export default function LoginOtpDialog(props) {

    const [otpDialog, setOtpDialog] = React.useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleOtpClose = () => {
        setOtpDialog(false);
    };

    const handleOtpDialog = () => {
        setOtpDialog(true)


    }

    

    return (
        <div>

            <Dialog open={otpDialog} onClose={handleOtpClose}>
                <DialogTitle>Login <span style={{ color: 'rgba(40, 44, 63, 0.8)' }}>/</span> Signup</DialogTitle>
                <DialogContent>
                    <img src='images/login-image-final.jpg' alt="login" width="350px" />
                    <DialogContentText style={{ fontSize: '12px', display: 'block', color: 'color: rgba(40, 44, 63, 0.8)' }}>
                        Get Exiting offers on your favoriot product.

                    </DialogContentText>
                    <div style={{ paddingTop: 15 }}>
                        <TextField
                            autoFocus
                            size='small'
                            margin="dense"
                            id="name"
                            label="Phone Number"
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                            value={props.phoneNo}


                        />
                    </div>
                    <div style={{ paddingTop: 15 }} >
                        <TextField
                            size="small"
                            margin="dense"
                            id="fullname"
                            label="Full Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                        />
                    </div>
                    <div style={{ paddingTop: 15 }} >
                        <TextField
                            size="small"
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                        />
                    </div>
                    <div>
                        <Checkbox {...label} defaultChecked size="small" />
                    </div>
                    <div style={{ paddingTop: 15, fontSize: '12px' }}>
                        <Button variant="contained" size='medium' fullWidth  >
                            Sign up
                        </Button>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button size='small' onClick={handleOtpClose}>Close</Button>
                </DialogActions>
            </Dialog>

        </div>

    )
}