import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Footer from "../../containers/footer/Footer";
import { LinksComponentChoose } from "../../components/common-components/LinksComponent";
import Related from "../../containers/related/Related";
import "./choosePage.css";

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
         <LinksComponentChoose data={data} />
         <Related />
         <Footer />
      </>
   )
};

export default ChoosePage;