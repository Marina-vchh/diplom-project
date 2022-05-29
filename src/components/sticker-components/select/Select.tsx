import React from 'react';
import { IStickers, STICKERS } from '../../../mock-data';
import "./select.css";

interface ISelect {
   classNameSelect: string;
   classNameArrow: string;
   handleSelectActive: () => void;
   sortStickers: ( stickers: IStickers[], prop: keyof IStickers, dir: boolean ) => IStickers[]
}

const SelectComponent = ({ classNameSelect, classNameArrow, handleSelectActive, sortStickers }: ISelect) => {
   return (
      <div className="select is-active">
	      <div className="select__header" onClick={handleSelectActive}>
		      <span className="select__current">Sort By</span>
		      <div className={classNameArrow} />
	         <div className={classNameSelect} >
               <div className="select__item" 
                 onClick={() => sortStickers(STICKERS, "name", false)}>Name, A to Z
               </div>
               <div className="select__item" 
                 onClick={() => sortStickers(STICKERS, "name", true)}>Name, Z to A
               </div>
               <div className="select__item" 
                 onClick={() => sortStickers(STICKERS, "price", false)}>Price, low to high
               </div>
               <div className="select__item" 
                 onClick={() => sortStickers(STICKERS, "price", true ) }>Price, high to low
               </div>
	         </div>
         </div>
      </div>
   );
};

export default SelectComponent;