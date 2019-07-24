import React from 'react';
import './style.css';


const SearchBar = () => {
  return (
    <div>
      <div className="container-1">
        <span className="icon"><i className="fa fa-search"></i></span>
        <input type="search" id="search" placeholder="Search..." />
      </div>
    </div>
  );
}

export default SearchBar;