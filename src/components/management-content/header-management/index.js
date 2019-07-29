import React, { Component } from 'react';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import UploadDialog from '../upload-dialog';
import SearchBar from '../search-bar';

class HeaderManagement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
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
    const item = {};
    return (
      <div className="header-manage-video">
        <SearchBar />
        <div>
          <UploadDialog icon="fa fa-video-camera" tooltip="Subir video" item={item} />
          <IconButton
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Cerrar sesión</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default HeaderManagement;