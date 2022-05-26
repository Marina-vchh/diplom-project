import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Background from "../../containers/background/Background";
import { IStickers, STICKERS } from "../../mock-data";
import { Link } from "react-router-dom";
import './choosePage.css'
import { LinksComponent } from "../../containers/LinksComponent/LinksComponent";
import Footer from "../../containers/footer/Footer";
import StickersChoose from "../../containers/stickersChoose/StickersChoose";
import RelatedStickers from "../../containers/relatedStickers/RelatedStickers";
import StickersField from "../../containers/stickers/StickersField";

interface IChooseStickers {
   data: any;
}

const ChoosePage = () => {
   const {id} = useParams();
   const [data, setData] = useState<IChooseStickers | null>(null);

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => res.json())
          .then(data => setData(data))
  }, [id]);

   return(
      <>
         <Background titleText="Shop" className="background background-choose" titleTextClassname="title-wrapper title-wrapper-order"/>
         <StickersChoose data={id} />
         {data && (
                <>
                    <h1>{data.id}</h1>
                </>
            )}
         <RelatedStickers />
         <Footer />
      </>
   )
};

export default ChoosePage;