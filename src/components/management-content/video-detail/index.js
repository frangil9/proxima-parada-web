import React, { Component } from 'react';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { getItemThunk } from '../../../redux/actions/item-current';

class VideoDetail extends Component {

  componentDidMount() {
    const {
      match: { params: { id } },
      onGetItemThunk
    } = this.props;
    onGetItemThunk(id);
  }

  goTo = () => {
    this.props.history.push('/demo/management/items');
  }

  render() {
    const { currentItem } = this.props;
    return (
      <div className="content-main-video">
        <div className="detail-video-center">
          <div className="float">
            <IconButton
              className="menu"
              color="inherit"
              onClick={this.goTo}
            >
              <i className="fa fa-arrow-left"></i>
            </IconButton>
          </div>
          <div className="video-detail col-md-9">
            <div className="embed-responsive embed-responsive-16by9">
              {currentItem.metadata && <iframe className="embed-responsive-item" src={currentItem.metadata.url}></iframe>}
            </div>
            <div className="details">
              <div className="title-item-detail">{currentItem.title}</div>
              <div className="description-item-detail">{currentItem.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetItemThunk: (id) => {
      dispatch(getItemThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);