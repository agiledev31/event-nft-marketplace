import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import React from 'react';

const StyledDlg = withStyles({
    root: {
      '& .MuiPaper-root': {
        backgroundColor: 'transparent'
      },
    },
  })(Dialog);

const CustomModalComponent = ({children, open, onClose}) => {
    // const radioGroupRef = React.useRef(null);
    // const handleEntering = () => {
    //   if (radioGroupRef.current != null) {
    //     radioGroupRef.current.focus();
    //   }
    // };
    return (
        <StyledDlg 
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            // TransitionProps={{ onEntering: handleEntering }}
        >
            {children}
        </StyledDlg>
    )
}

export default CustomModalComponent;