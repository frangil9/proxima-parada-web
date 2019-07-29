import React, { Component } from 'react';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import UploadDialog from '../upload-dialog';

class VideoListItem extends Component {

  state = {
    anchorEl: null
  };

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
          <div className="media-left" onClick={() => goTo(`/management/item/${item._id}`)}>
            <img className="media-object" src={item.metadata.thubnailUrl} />
          </div>
          <div className="media-body" onClick={() => goTo(`/management/item/${item._id}`)}>
            <div className="title-item">{item.title}</div>
            <div className="description-item">{item.description}</div>
          </div>
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
            <MenuItem>
              <UploadDialog icon="fa fa-edit" tooltip="" item={item} />Editar
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <i className="fa fa-trash"></i>
              </IconButton>Eliminar
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <i className="fa fa-plus-circle"></i>
              </IconButton>Agregar a lista de reproducción
            </MenuItem>
          </Menu>
        </div>
      </li>
    );
  }
}

export default VideoListItem;