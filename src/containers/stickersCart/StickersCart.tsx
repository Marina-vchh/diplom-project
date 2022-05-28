import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common-components/button/Button";
import Counter from "../counter/Counter";
import "./StickersCart.css"

const StickersCart = () => {
   const navigate = useNavigate();

   const goHome = () => navigate('/', {replace: true});

   return(
      <div className="cart-wrapper">
         <table className="table-cart">
            <tr className="table-row">
               <td className="table-column">Product</td>
               <td className="table-column">Price</td>
               <td className="table-column">Quantity</td>
               <td className="table-column">Total</td>
            </tr>
            <tr>
               <td></td>
               <td></td>
               <td><Counter className="count-transparent" classNameCount="" classNameButton="" /></td>
               <td></td>
            </tr>
         </table>
         <Button onClick={goHome} text="Continue shopping" className="button transparent-background cart-button" />
       </div>
   )
};

export default StickersCart;