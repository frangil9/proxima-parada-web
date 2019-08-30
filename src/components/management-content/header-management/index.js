import React, { Component } from 'react';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import UploadDialog from '../upload-dialog';
import SearchBar from '../search-bar';
import Tooltip from '@material-ui/core/Tooltip';


class HeaderManagement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      openDialogCreate: false
    };
  }

  handleOpenDialogCreate = () => {
    this.setState({
      openDialogCreate: true
    });
  };

  handleCloseDialogCreate = () => {
    this.setState({
      openDialogCreate: false
    });
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
    return (
      <div className="header-manage-video">
        <SearchBar />
        <div>
          <Tooltip title="Subir contenido">
            <IconButton
              className="menu"
              color="inherit"
              onClick={this.handleOpenDialogCreate}
            >
              <i className="fa fa-video-camera"></i>
            </IconButton>
          </Tooltip>
          {this.state.openDialogCreate && <UploadDialog open={this.state.openDialogCreate} handleCloseDialog={this.handleCloseDialogCreate} title="Subir contenido" />}
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