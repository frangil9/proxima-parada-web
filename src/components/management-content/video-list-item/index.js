import React, { Component } from 'react';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import UploadDialog from '../upload-dialog';
import ConfirmDialog from '../confirm-dialog';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';


class VideoListItem extends Component {

  state = {
    anchorEl: null,
    openDialogEdit: false,
    openDialogConfirm: false
  };

  handleOpenDialogEdit = () => {
    this.setState({
      openDialogEdit: true
    });
  };

  handleCloseDialogEdit = () => {
    this.setState({
      openDialogEdit: false
    });
  };

  handleOpenDialogConfim = () => {
    this.setState({
      openDialogConfirm: true
    });
  }

  handleCloseDialogConfim = () => {
    this.setState({
      openDialogConfirm: false
    });
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { item, goTo } = this.props;
    return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left" onClick={() => goTo(`/demo/management/item/${item._id}`)}>
            <img className="media-object" src={item.metadata.thubnailUrl} />
          </div>
          <div className="media-body" onClick={() => goTo(`/demo/management/item/${item._id}`)}>
            <div className="title-item">{item.title}</div>
            <div className="description-item">{item.description}</div>
          </div>
          <IconButton
            aria-haspopup="true"
            color="inherit"
            onClick={this.handleOpenDialogEdit}
          >
            <EditIcon />
          </IconButton>
          {this.state.openDialogEdit && <UploadDialog open={this.state.openDialogEdit} item={item} handleCloseDialog={this.handleCloseDialogEdit} title="Editar contenido" />}
          <IconButton
            aria-haspopup="true"
            color="inherit"
            onClick={this.handleOpenDialogConfim}
          >
            <DeleteIcon />
          </IconButton>
          <ConfirmDialog open={this.state.openDialogConfirm} item={item} handleCloseDialogConfim={this.handleCloseDialogConfim} />
          <IconButton
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <Typography variant="inherit">Agregar a lista de reproducción</Typography>
            </MenuItem>
          </Menu>
        </div>
      </li>
    );
  }
}

export default VideoListItem;