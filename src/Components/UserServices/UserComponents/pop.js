import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function Pop(props) {
  const [anchorEl, setAnchorEl] = React.useState(props.anchorEl);
  const [open,setOpen] = React.useState(props.open)

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
     
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {'ddddddddddd'}
      </Popover>
    </div>
  );
}