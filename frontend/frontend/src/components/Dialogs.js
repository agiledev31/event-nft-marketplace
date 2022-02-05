import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputBase } from '@material-ui/core';
import { BlueButton } from './Buttons';

const StyledDialog = withStyles({
  root: {
    '& .MuiDialogTitle-root': {
      padding: '30px 25px 20px 25px',
      '& h2': {
        fontSize: '1.25rem',
        fontFamily: 'Poppins',
        minWidth: '16rem',
      },
    },
    '& .MuiDialogContent-root': {
      padding: '0 25px',
      '& p': {
        fontFamily: 'Poppins',
      }
    },
    '& .MuiDialogActions-root': {
      padding: '30px 25px 30px 25px',
    },
  },
})(Dialog);

const StyledInput = withStyles({
  root: {
    width: '100%',
    height: '36px',
    padding: '6px 16px',
    borderRadius: '6px',
    border: 'solid 2px #f0f0f0',
    backgroundColor: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: '16px',
    color: '#2e2e2e',
    '&.Mui-error': {
      border: 'solid 1px #f44336',
    },
  },
})(InputBase);

const SelectInput = withStyles({
  root: {
    width: '100%',
    border: '1px solid #e2e2e1',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  input: {
    padding: '8px 15px',
    '&:focus': {
      backgroundColor: 'unset',
    },
  }
})(InputBase);

const MessageDialog = ({ open, title, description, onClose }) => (
  <StyledDialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <BlueButton onClick={onClose}>Ok</BlueButton>
    </DialogActions>
  </StyledDialog>
);

export { MessageDialog, StyledDialog, StyledInput, SelectInput };
