import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import bus from '../../../../assets/images/bus.png';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

class HeaderStep extends Component {

  render() {
    const { current } = this.props;
    return (
      <div className="header">
        <div className="content-bus">
          <img src={bus} alt="Bus" />
        </div>
        <span className="arrow-content-bus"></span>
        <div className="next">
          <div className="title-step">
            {current.next_stop}
          </div>
          <div className="content-steps">
          <Steps labelPlacement="vertical" current={0}>
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
          </Steps>
          </div>
        </div>
        <div className="time">
          <span className="arrow-time"></span>
          <div className="content-min">
            <span className="minutes">0</span>
            <span className="min">min.</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nextsStops: state.nextsStops,
  };
};

export default connect(mapStateToProps, null)(HeaderStep);