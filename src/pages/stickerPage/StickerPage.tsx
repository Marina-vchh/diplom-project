import React, {useEffect, useState} from "react";
import Background from "../../containers/background/Background";
import StickersField from "../../containers/stickersField/StickersField";
import Footer from "../../containers/footer/Footer";
import './stickerPage.css';
import { IStickers, STICKERS } from "../../mock-data";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { LinksComponentSticker } from "../../components/common-components/LinksComponent/LinksComponentSticker";
import Layout from "../../components/common-components/layout/Layout";

interface IPreloaderState {
   data: IResult[];
};

interface IResult {
    name: string;
 };

const StickerPage = () => {
    const [data, setData] = useState<IPreloaderState | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => updateState(data));

        const updateState = (data: IPreloaderState[keyof IPreloaderState]) => {
            window.setTimeout(() => {
                setData({ data })
            }, 1000);
        }
    }, []);

   return (
      <div className="sticker-page">
         <Background titleText="Create your own app" className="background background-sticker" titleTextClassname="title-main title-main-stickers"/>
         <LinksComponentSticker data={data}/>
         <Footer />
      </div>
   )
} 

export default StickerPage;