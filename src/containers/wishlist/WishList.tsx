import React from "react";
import Button from "../../components/common-components/button/Button";
import Counter from "../counter/Counter";
import "./wishList.css";

interface IWishList {

}

const WishList = () => {
   return(
      <div>
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
      <Button text="All stickers" className="button" />
      </div>
   )
}
export default WishList;