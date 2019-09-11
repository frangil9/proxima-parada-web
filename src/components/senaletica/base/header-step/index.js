import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import bus from '../../../../assets/images/bus.png';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';


class HeaderStep extends Component {

  constructor(props) {
    super(props);
    const { current } = this.props;
    this.state = {
      current: current,
      index: 0,
      arrivalTime: current.time_next_stop
    }
  }

  componentDidMount() {
    const { nextsStops, current } = this.props;
    this.count = 1;
    const nextsStopsFilter = nextsStops.filter((elem, index) => index < 5);
    let sumTime = current.time_next_stop;
    this.intervalHeadStep = setInterval(() => {
      if (this.count <= nextsStopsFilter.length - 1) {
        sumTime = sumTime + nextsStopsFilter[this.count].time_next_stop;
        this.setState({
          index: this.count,
          current: nextsStopsFilter[this.count],
          arrivalTime: sumTime
        });
        this.count++
        if (this.count > nextsStopsFilter.length - 1) {
          clearInterval(this.intervalHeadStep);
        }
      }
    }, 1000);
  }

  componentWillMount() {
    if (this.intervalHeadStep) {
      clearInterval(this.intervalHeadStep);
    }
  }

  render() {
    const { current, index, arrivalTime } = this.state;
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
            <Steps labelPlacement="vertical" current={index}>
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
            <span className="minutes">{arrivalTime ? arrivalTime : '0'}</span>
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