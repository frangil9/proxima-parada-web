import React from 'react';
import './style.css';
import bus from '../../../../assets/images/bus.png';

const HeaderNext = () => {
  return (
    <div className="header">
      <div className="next-header">
        <div className="subtitle-next">
          Próximas Paradas
          </div>
        <img src={bus} alt="Bus" />
      </div>
    </div>
  );
}

export default HeaderNext;