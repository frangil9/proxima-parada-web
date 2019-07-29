import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { countVideo, countReset } from '../../../redux/actions/count-video';
import MP4Content from '../base/mp4-content';
import HeaderTime from './header-time';
import HeaderDestination from './header-destination';
import HeaderNext from './header-next';
import HeaderStep from './header-step';
import { getPublicationsThunk } from '../../../redux/actions/publications';


class BaseContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderViewHeader: 1
    };
    this.handleCount = this.handleCount.bind(this);
  }

  componentDidMount() {
    const { onGetPublicationsThunk } = this.props;
    onGetPublicationsThunk();
    let orderViewHeader = 1;
    this.interval = setInterval(() => {
      this.setState({
        orderViewHeader: orderViewHeader
      });
      orderViewHeader++;
      if (orderViewHeader > 4) {
        orderViewHeader = 1;
      }
    }, 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  handleCount() {
    const { countVideo, onCountReset, onCountVideo, publications } = this.props;
    if (countVideo >= publications.length - 1) {
      onCountReset();
    } else {
      onCountVideo();
    }
  }

  render() {
    const { currentStop, publications, countVideo } = this.props;
    const currentSrc = publications.length > 0 ? publications[countVideo] : undefined;
    const cloneCurrent = {...currentSrc};
    const clone = {...cloneCurrent.metadata};
    return (
      <div className="content">
        {
          this.state.orderViewHeader === 1 && (<HeaderTime current={currentStop} />)
        }
        {
          this.state.orderViewHeader === 2 && (<HeaderDestination />)
        }
        {
          this.state.orderViewHeader === 3 && (<HeaderNext />)
        }
        {
          this.state.orderViewHeader === 4 && (<HeaderStep current={currentStop} />)
        }
        { clone.url !== undefined && <MP4Content source={clone.url} handleCount={this.handleCount} /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStop: state.currentStop,
    countVideo: state.countVideo,
    publications: state.publications
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountVideo: () => {
      dispatch(countVideo());
    },
    onCountReset: () => {
      dispatch(countReset());
    },
    onGetPublicationsThunk: () => {
      dispatch(getPublicationsThunk());
  }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);