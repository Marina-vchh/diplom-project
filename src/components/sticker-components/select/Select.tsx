import React from 'react';
import "./select.css";

interface ISelect {
   classNameSelect: string;
   classNameArrow: string;
   handleSelectActive: () => void;
}

const SelectComponent = ({classNameSelect, classNameArrow, handleSelectActive}: ISelect) => {
   return(
      <div className="select is-active">
	      <div className="select__header" onClick={handleSelectActive}>
		      <span className="select__current">Sort By</span>
		      <div className={classNameArrow} />
	      </div>
	      <div className={classNameSelect}>
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