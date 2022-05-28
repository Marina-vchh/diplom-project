import React, {useEffect, useState} from "react";
import Background from "../../containers/background/Background";
import Stickers from "../../containers/stickers/Stickers";
import Footer from "../../containers/footer/Footer";
import "./stickerPage.css";

const StickerPage = () => {
   return (
      <div className="sticker-page">
         <Background titleText="Create your own app" className="background background-sticker" />
         <Stickers/>
         <Footer />
      </div>
   );
};

export default StickerPage;