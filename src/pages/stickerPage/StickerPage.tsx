import React from "react";
import '../containers/background/Background'
import Background from "../../containers/background/Background";
import StickersField from "../../containers/stickers/StickersField";
import Footer from "../../containers/footer/Footer";
import './stickerPage.css';

const StickerPage = () => {
   return (
      <div className="sticker-page">
         <Background />
         <StickersField />
         <Footer />
      </div>
   )
} 

export default StickerPage;