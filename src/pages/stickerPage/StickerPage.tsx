import React from "react";
import Background from "../../containers/background/Background";
import StickersField from "../../containers/stickers/StickersField";
import Footer from "../../containers/footer/Footer";
import './stickerPage.css';

const StickerPage = () => {
   return (
      <div className="sticker-page">
         <Background titleText="Create your own app" className="background background-sticker" titleTextClassname="title-wrapper title-wrapper-sticker"/>
         <StickersField />
         <Footer />
      </div>
   )
} 

export default StickerPage;