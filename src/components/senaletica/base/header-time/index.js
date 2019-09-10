import React from 'react';
import './style.css';

const HeaderTime = (props) => {
  const { current } = props;
  return (
    <div className="header">
      <div className="ca1">
        <span className="text-ca1">CA1</span>
      </div>
      <span className="arrow-ca1"></span>
      <div className="next">
        <div className="title">
          Próxima Parada
          </div>
        <div className="subtitle">
          {current.next_stop}
        </div>
      </div>
      <div className="time">
        <span className="arrow-time"></span>
        <div className="content-min">
          <span className="minutes">{current.time_next_stop ? current.time_next_stop : '0'}</span>
          <span className="min">min.</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderTime;