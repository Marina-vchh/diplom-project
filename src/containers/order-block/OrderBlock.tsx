import React from "react";
import { useSelector } from "react-redux";
import { counterSelector } from "../../redux/selectors/counter-selectors/counterSelectors";
import Title from "../../components/common-components/title/Title";
import "./orderBlock.css";

interface IOrderBlock {
   text: string;
};

const OrderBlock = ({ text }: IOrderBlock) => {
   const count = useSelector(counterSelector);
   return(
      <div className="cart-block">
         <table>
            <tr>
               <Title text={text} className="title-thumbnail title-cart" />
            </tr>
            <tr>
               <td className="order-block__text">Subtotal</td>
               <td className="order-block__text">{count}</td>
            </tr>
            <tr>
               <td className="order-block__text">Shipping</td>
               <td className="order-block__text">free</td>
            </tr>
            <tr>
               <td><Title text="Total" className="title-thumbnail title-cart-without__border" /></td>
               <td></td>
            </tr>
         </table>
      </div>
   );
};

export default OrderBlock;