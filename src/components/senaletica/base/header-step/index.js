import React from 'react';
import './style.css';
import bus from '../../../../assets/images/bus.png';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

const HeaderStep = (props) => {
  const { current } = props;
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
        <Steps labelPlacement="vertical" current={1}>
          <Step title="Av. 18 de Julio" />
          <Step title="A. Beisso" />
          <Step title="Dr. Martín C. Martínez" />
          <Step title="Arenal G." />
          <Step title="Eduardo A." />
        </Steps>
      </div>
      <div className="time">
        <span className="arrow-time"></span>
        <div className="content-min">
          <span className="minutes">1</span>
          <span className="min">min.</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderStep;