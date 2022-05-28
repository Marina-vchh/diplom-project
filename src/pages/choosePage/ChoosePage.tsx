import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Background from "../../containers/background/Background";
import { IStickers, STICKERS } from "../../mock-data";
import { Link } from "react-router-dom";
import './choosePage.css'
import StickerItem from "../../components/sticker-components/stickerItemList/StickerItemList";
import Footer from "../../containers/footer/Footer";
import { LinksComponentChoose } from "../../components/common-components/LinksComponent/LinksComponentChoose";
import RelatedStickers from "../../containers/relatedStickers/RelatedStickers";
import StickerChoose from "../../containers/stickersChoose/StickersChoose"

interface IChooseStickers {
   data: any;
}

const ChoosePage = () => {
   const {id} = useParams();
   const [data, setData] = useState<IChooseStickers | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => updateState(data));

        const updateState = (data: IChooseStickers[keyof IChooseStickers]) => {
                setData({ data })
        }
    }, [id]);

   return(
      <>
         <Background titleText="Shop" className="background background-choose" titleTextClassname="title-wrapper title-wrapper-order"/>
         <LinksComponentChoose data={data} />
         <RelatedStickers />
         <Footer />
      </>
   )
};

export default ChoosePage;