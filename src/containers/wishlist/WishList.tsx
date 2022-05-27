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
      <div className="wishlist">
         <table className="table-wishlist">
            <tr className="table-wishlist__header">
               <td> Product </td>
               <td> Price </td>
               <td> Stock status </td>
            </tr>
       </table>
      <Button text="All stickers" className="button transparent-background wishList-button" onClick={goHome} />
      </div>
   )
}
export default WishList;