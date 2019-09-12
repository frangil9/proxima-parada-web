import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { countVideo, countReset } from '../../../redux/actions/count-video';
import MP4Content from '../base/mp4-content';
import HeaderContent from './header-content';
import OutTravel from './out-travel';
import { getPublicationsThunk } from '../../../redux/actions/publications';
import MapContainer from '../map';

class BaseContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderView: 1
    };
    this.handleCount = this.handleCount.bind(this);
  }

  componentDidMount() {
    const { onGetPublicationsThunk } = this.props;
    onGetPublicationsThunk();
    let orderView = 1;
    this.interval = setInterval(() => {
      this.setState({
        orderView: orderView
      });
      orderView++;
      if (orderView > 4) {
        orderView = 1;
      }
    }, 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { stateTravel, sendSocket } = this.props;
    if (prevProps.stateTravel !== stateTravel) {
      if (stateTravel.isInRadiusCircleStop1 === true) {
        sendSocket(1);
      }
      if (stateTravel.isInRadiusCircleStop2 === true) {
        sendSocket(2);
      }
      if (stateTravel.isInRadiusCircleStop3 === true) {
        sendSocket(3);
        this.props.history.push('/arrival');
      }
      if (stateTravel.isInRadiusCircleStop4 === true) {
        sendSocket(4);
      }
      if (stateTravel.isInRadiusCircleStop5 === true) {
        sendSocket(5);
      }
      if (stateTravel.isInRadiusCircleStop6 === true) {
        sendSocket(6);
      }
      if (stateTravel.isInRadiusCircleStop7 === true) {
        sendSocket(7);
      }
      if (stateTravel.isInRadiusCircleStop8 === true) {
        sendSocket(8);
        this.props.history.push('/arrival');
      }
      if (stateTravel.isInRadiusCircleStop9 === true) {
        sendSocket(9);
      }
      if (stateTravel.isInRadiusCircleStop10 === true) {
        sendSocket(10);
      }
      if (stateTravel.isInRadiusCircleStop11 === true) {
        sendSocket(11);
      }
      if (stateTravel.isInRadiusCircleStop12 === true) {
        sendSocket(12);
        this.props.history.push('/destination');
      }
      if (stateTravel.isInPolyDetour === true) {
        this.props.history.push('/detour');
      }
      if (stateTravel.isInPolyFacultad === true) {
        this.props.history.push('/point');
      }
      if (stateTravel.isInPolyIntendencia === true) {
        this.props.history.push('/point');
      }
      if (stateTravel.isInPolyCagancha === true) {
        this.props.history.push('/point');
      }
      if (stateTravel.isInPolyIndependencia === true) {
        this.props.history.push('/point');
      }
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
    const { currentStop, publications, countVideo, stateTravel } = this.props;
    const currentSrc = publications.length > 0 ? publications[countVideo] : undefined;
    const cloneCurrent = { ...currentSrc };
    const clone = { ...cloneCurrent.metadata };
    return (
      <div className="content">
        {stateTravel.isInPolyCentral === false ? <OutTravel /> : <HeaderContent orderView={this.state.orderView} currentStop={currentStop} />}
        {clone.urlLocalAndroid !== undefined && <MP4Content source={clone.urlLocalAndroid} handleCount={this.handleCount} />}
        <MapContainer withoutStyle={true} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStop: state.currentStop,
    countVideo: state.countVideo,
    publications: state.publications,
    stateTravel: state.stateTravel
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