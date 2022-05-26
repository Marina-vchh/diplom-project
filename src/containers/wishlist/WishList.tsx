import React from "react";
import Button from "../../components/common-components/button/Button";
import Counter from "../../components/choose-components/counter/Counter";
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
            Quantity
         </th>
         <th>
            Total
         </th>
         </tr>
         <tr><td><Counter /></td></tr>
       </table>
      <Button text="Continue shopping" className="button" />
      </div>
   )
}
export default WishList;