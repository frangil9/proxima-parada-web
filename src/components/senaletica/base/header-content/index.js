import React from 'react';
import './style.css';
import HeaderTime from '../header-time';
import HeaderDestination from '../header-destination';
import HeaderNext from '../header-next';
import HeaderStep from '../header-step';

const HeaderContent = (props) => {
  const { orderView, currentStop } = props;
  return (
    <div>
      { orderView === 1 && (<HeaderTime current={currentStop} />) }
      { orderView === 2 && (<HeaderDestination />) }
      { orderView === 3 && (<HeaderNext />) }
      { orderView === 4 && (<HeaderStep current={currentStop} />) }
    </div>
  );
}

export default HeaderContent;