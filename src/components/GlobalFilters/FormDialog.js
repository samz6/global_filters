import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  PresetDialog: {
    width: '600px',
    left: 'auto !important'
  }
});

class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      presetName: ''
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    console.log('cancel clicked');
    this.setState({ open: false });
  };

  presetNameChangeHandler = e => {
    this.setState({ presetName: e.target.value });
  };

  handleSave = () => {
    if (this.props.mode === 'openEdit') {
      this.props.updatePresetHandler(this.state.presetName, this.props.id);
    } else {
      this.props.createPresetHandler(this.state.presetName);
    }
    this.setState({ open: false });
  };

  componentWillReceiveProps(nextProps, b) {
    if (nextProps.mode === 'openEdit' && this.state.open === false) {
      setTimeout(() => {
        this.setState({ presetName: nextProps.presetName }, () => {
          this.handleClickOpen();
        });
      }, 0);
    }
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log(state);
  //     if (props.mode === 'openEdit' && state.open === false) {
  //       return { presetName: props.presetName, open: true };
  //     } else {
  //       return null;
  //     }
  //   }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          disabled={this.props.disableCreatePresetBtn}
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Create New Preset
        </Button>
        <Dialog
          open={this.state.open}
          className={classes.PresetDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent style={{ borderTop: '7px solid teal', borderRadius: '2px' }}>
            <Typography variant="h5" component="h5">
              Create Preset
            </Typography>
            <DialogContentText>Please enter the preset name</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Preset Name"
              type="email"
              fullWidth
              value={this.state.presetName}
              onChange={e => this.presetNameChangeHandler(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const FormDialogWrapped = withStyles(styles, { withTheme: true })(FormDialog);

export default FormDialogWrapped;
