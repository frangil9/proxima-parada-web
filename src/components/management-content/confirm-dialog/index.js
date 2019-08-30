import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deletePublicationThunk } from '../../../redux/actions/publications';

class ConfirmDialog extends Component {

  handleDeletePublication = () => {
    const { onDeletePublicationThunk, item } = this.props;
    onDeletePublicationThunk(item._id);
  }

  handleCloseModal = () => {
    const {handleCloseDialogConfim} = this.props;
    handleCloseDialogConfim();
  }

  render() {
    const { open, item } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirmación"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Está seguro que desea eliminar la publicación con título "{item.title}"?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseModal} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleDeletePublication} color="primary" autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePublicationThunk: (id) => {
      dispatch(deletePublicationThunk(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(ConfirmDialog);