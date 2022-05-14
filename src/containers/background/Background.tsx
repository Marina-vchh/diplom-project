import React from "react";
import Header from "../header/Header";
import Title from "../../components/common-components/title/Title";
import './background.css'

const Background = () => {
   return (
      <div className="background">
         <Header />
         <Title text="Create your own stickers" />
      </div>
   )
}

export default Background;