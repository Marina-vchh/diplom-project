import React from "react";
import './icon.css'


interface IIcon{
   children: React.ReactNode;
}

const Icon = ({children}: IIcon) => {
   return (
      <div className="icons">
         {children}
         {/* <Icon2 className="icon-item"/>
         <Icon3 className="icon-item"/> */}
      </div>
   )
}

export default Icon