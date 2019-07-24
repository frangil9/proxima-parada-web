import React from 'react';
import './style.css';

const HeaderDestination = () => {
  return (
    <div className="header">
      <div className="ca1">
        <span className="text-ca1">CA1</span>
      </div>
      <span className="arrow-ca1"></span>
      <div className="next-dest">
        <div className="title">
          Destino
          </div>
        <div className="subtitle">
          Ciudad Vieja
          </div>
      </div>
    </div>
  );
}

export default HeaderDestination;