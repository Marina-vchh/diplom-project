import React, {useEffect, useState} from "react";
import Background from "../../containers/background/Background";
import StickersField from "../../containers/stickers/StickersField";
import Footer from "../../containers/footer/Footer";
import StickerItemList from "../../components/sticker-components/stickerItemsList/StickerItemList";
import './stickerPage.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Layout from "../../components/common-components/layout/Layout";

interface IPreloaderState {
   data: any
}

const StickerPage = () => {
   const [data, setData] = useState<IPreloaderState | null>(null);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => updateState(data));

      const updateState = (data: IPreloaderState[keyof IPreloaderState]) => {
              setData({ data })
      }
  }, []);
   return (
      <div className="sticker-page">
         <Background titleText="Create your own app" className="background background-sticker" titleTextClassname="title-wrapper title-wrapper-sticker"/>
         <StickersField />
         <Footer />
      </div>
   )
} 

export default StickerPage;