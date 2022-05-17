import React from 'react';
import "./select.css";

interface ISelect {
   onClick: () => void;
}

const SelectComponent = () => {
   return(
      <div className="select is-active">
	      <div className="select__header">
		      <span className="select__current">Sort By</span>
		      <div className="select__icon" />
	   </div>
	      <div className="select__body">
            <div className="select__item">New products first</div>
            <div className="select__item">Name, A to Z</div>
            <div className="select__item">Name, Z to A</div>
            <div className="select__item">Price, low to high</div>
            <div className="select__item">Price, high to low</div>
	      </div>
      </div>
   );
};

export default SelectComponent;