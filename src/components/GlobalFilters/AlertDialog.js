import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';
import React from 'react';

const styles = theme => ({
  PresetDialog: {
    width: '600px',
    left: 'auto !important'
  }
});

function AlertDialog(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => {
    console.log('count changed', props.open);
    if (props.open === true) {
      handleClickOpen();
    }
  }, [props.open]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose(status) {
    setOpen(false);

    props.deletePreset(status);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.PresetDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{props.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose.bind(null, 'cancel')} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose.bind(null, 'ok')} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const AlertDialogThemed = withStyles(styles, { withTheme: true })(AlertDialog);
export default AlertDialogThemed;
