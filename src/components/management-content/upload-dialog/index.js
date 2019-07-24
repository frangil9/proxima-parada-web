import React, { Component, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Progress } from 'reactstrap';
import Tooltip from '@material-ui/core/Tooltip';
import DropzoneFile from '../dropzone-file';

class UploadDialog extends Component {

  state = {
    title: '',
    description: '',
    open: false,
    progress: 0
  };

  handleChangeProgress = (progress) => {
    this.setState({
      progress: progress
    });
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { uploadCurrent } = this.props;
    const { title, description } = this.state;
    const data = {
      title,
      description,
      ...uploadCurrent
    };
    console.log(data)
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { uploadCurrent } = this.props;
    return (
      <Fragment>
        <Tooltip title="Subir video">
          <IconButton
            className="menu"
            color="inherit"
            onClick={this.handleClickOpen}
          >
            <i className="fa fa-video-camera"></i>
          </IconButton>
        </Tooltip>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subir Video</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                autoFocus
                margin="dense"
                name="title"
                label="Título"
                onChange={this.handleInputChange}
                fullWidth
              />
              <TextField
                margin="dense"
                name="description"
                label="Descripción"
                onChange={this.handleInputChange}
                fullWidth
              />
              {uploadCurrent.thubnailUrl && <div className="card"><img src={uploadCurrent.thubnailUrl} alt="thub" /></div>}
              <DropzoneFile handleChangeProgress={this.handleChangeProgress} />
              {this.state.progress > 0 && <Progress striped value={this.state.progress}>{this.state.progress}%</Progress>}
            </form>
          </DialogContent>
          <DialogActions>
          <Button onClick={this.handleClose} color="primary">
              Cancelar
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
              Subir
          </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploadCurrent: state.uploadCurrent
  };
};

export default connect(mapStateToProps, null)(UploadDialog);