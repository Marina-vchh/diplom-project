import React from "react";
import Button from "../../components/common-components/button/Button";
import { useNavigate } from "react-router-dom";
import Counter from "../counter/Counter";
import "./wishList.css";

interface IWishList {

}

const WishList = () => {
   const navigate = useNavigate();

   const goHome = () => navigate('/', {replace: true});

   return(
      <div className="wishList">
         <table className="table">
         <tr>
            <th>
           Product
           </th>
         <th>
           Price
         </th>
         <th>
            Stock status
         </th>
         </tr>
       </table>
      <Button text="All stickers" className="button wishList-button" onClick={goHome} />
      </div>
   )
}
export default WishList;