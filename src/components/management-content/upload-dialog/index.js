import React, { Component, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Progress } from 'reactstrap';
import DropzoneFile from '../dropzone-file';
import { addPublicationThunk, updatePublicationThunk } from '../../../redux/actions/publications';
import uploadCurrent from '../../../redux/actions/upload-current';

class UploadDialog extends Component {

  state = {
    title: '',
    description: '',
    progress: 0
  };

  componentDidMount() {
    const {item, onUploadCurrent} = this.props;
    if (item) {
      this.setState({
        title: item.title,
        description: item.description
      });
      onUploadCurrent(item.metadata);
    } else {
      onUploadCurrent({});
    }
  }

  handleChangeProgress = (progress) => {
    this.setState({
      progress: progress
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { currentUpload, onAddPublicationThunk, onUpdatePublicationThunk, item } = this.props;
    if (!currentUpload.thubnailUrl) {
      return;
    }
    const { title, description } = this.state;
    const data = {
      title,
      description,
      ...currentUpload
    };

    if (item) {
      onUpdatePublicationThunk(item._id, data)
    } else {
      onAddPublicationThunk(data);
    }
    const { handleCloseDialog } = this.props;
    handleCloseDialog();
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { currentUpload, handleCloseDialog, open, title } = this.props;
    return (
      <Fragment>
        <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                autoFocus
                margin="dense"
                name="title"
                label="Título"
                value={this.state.title}
                onChange={this.handleInputChange}
                fullWidth
              />
              <TextField
                margin="dense"
                name="description"
                label="Descripción"
                value={this.state.description}
                onChange={this.handleInputChange}
                fullWidth
              />
              {currentUpload.thubnailUrl && <div className="card"><img src={currentUpload.thubnailUrl} alt="thub" /></div>}
              <DropzoneFile handleChangeProgress={this.handleChangeProgress} />
              {this.state.progress > 0 && <Progress striped value={this.state.progress}>{this.state.progress}%</Progress>}
            </form>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
              Cancelar
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
              Guardar
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
      },
      onUploadCurrent: (metadata) => {
        dispatch(uploadCurrent(metadata));
      },
      onUpdatePublicationThunk: (id, data) => {
        dispatch(updatePublicationThunk(id, data));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadDialog);