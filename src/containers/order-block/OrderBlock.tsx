import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/common-components/title/Title";
import Button from "../../components/common-components/button/Button";
import "./orderBlock.css";

interface IOrderBlock {
   text: string;
}

const OrderBlock = ({ text }: IOrderBlock) => {
   return(
      <div className="cart-block">
         <table>
            <tr>
               <Title text={text} className="title-thumbnail title-cart" />
            </tr>
            <tr><td className="order-block__text">Subtotal</td></tr>
            <tr>
               <td className="order-block__text">Shipping</td>
               <td className="order-block__text">free</td>
            </tr>
            <tr>
               <td><Title text="Total" className="title-thumbnail title-cart-without__border" /></td>
               <td>564456</td>
            </tr>
         </table>
      </div>
   )
};

export default OrderBlock;