import React, { Component, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Progress } from 'reactstrap';
import Tooltip from '@material-ui/core/Tooltip';
import DropzoneFile from '../dropzone-file';
import { addPublicationThunk } from '../../../redux/actions/publications';

class UploadDialog extends Component {

  state = {
    title: '',
    description: '',
    imgPreview: '',
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
    const { currentUpload, onAddPublicationThunk } = this.props;
    const { title, description } = this.state;
    const data = {
      title,
      description,
      ...currentUpload
    };
    onAddPublicationThunk(data);
    this.handleClose();
    console.log(data)
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { currentUpload, icon, tooltip } = this.props;
    return (
      <Fragment>
        <Tooltip title={tooltip}>
          <IconButton
            className="menu"
            color="inherit"
            onClick={this.handleClickOpen}
          >
            <i className={icon}></i>
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
              {currentUpload.thubnailUrl && <div className="card"><img src={currentUpload.thubnailUrl} alt="thub" /></div>}
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
    currentUpload: state.currentUpload
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      onAddPublicationThunk: (data) => {
          dispatch(addPublicationThunk(data));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadDialog);