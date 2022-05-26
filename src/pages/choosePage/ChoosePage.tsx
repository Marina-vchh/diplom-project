import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Background from "../../containers/background/Background";
import Layout from "../../components/common-components/layout/Layout";
import StickerItem from "../../components/sticker-components/stickerItem/StickerItem";
import { IStickers, STICKERS } from "../../mock-data";
import { Link } from "react-router-dom";
import './choosePage.css'
import Footer from "../../containers/footer/Footer";
import StickersChoose from "../../containers/stickersChoose/StickersChoose";
import RelatedStickers from "../../containers/relatedStickers/RelatedStickers";

interface IChooseStickers {
   newStickersArr: any;
}

const ChoosePage = () => {
   const {id} = useParams();
   return(
      <>
         <Background titleText="Shop" className="background background-choose" titleTextClassname="title-wrapper title-wrapper-order"/>
         <StickersChoose  />
         <RelatedStickers />
         <Footer />
      </>
   )
};

export default ChoosePage;