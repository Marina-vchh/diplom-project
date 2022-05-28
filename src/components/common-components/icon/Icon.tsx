import React from "react";
import './icon.css'

interface IIcon {
   children: React.ReactNode;
};

const Icon = ({ children }: IIcon) => {
   return (
      <div className="icons-wrapper">
         {children}
      </div>
   );
};

export default Icon;