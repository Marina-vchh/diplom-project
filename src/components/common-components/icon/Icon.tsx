import React from "react";
import './icon.css'


interface IIcon{
   children: React.ReactNode;
};

const Icon = ({ children }: IIcon) => {
   return (
      <div className="icons">
         {children}
      </div>
   );
};

export default Icon;