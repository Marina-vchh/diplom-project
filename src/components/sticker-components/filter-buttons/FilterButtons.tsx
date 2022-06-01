import React from "react";
import { IFilterButtons } from "../../../mock-data";
import "./filterButtons.css";

interface IFilterButton {
   buttons: IFilterButtons[];
   className: string;
   activeFilter: string;
   filterChange: (filter: string) => void;
};

const FilterButtons = ({ buttons, className, activeFilter, filterChange }: IFilterButton) => {
   return (
         <ul className={className}>
            {
               buttons.map(({ id, value }) => (
                  <button 
                     key={id} 
                     className={id === activeFilter ? "filter-button active" : 'filter-button'}
                     onClick={() => filterChange(id)}> {value}
                  </button>
                  )
               )
            }
         </ul>
   );
};

export default FilterButtons;