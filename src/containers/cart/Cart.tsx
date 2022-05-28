import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { removeSticker } from "../../redux/actions/stickersActionsCreators/stickersActionsCreators";
import { useDispatch } from "react-redux";
import Button from "../../components/common-components/button/Button";
import Counter from "../counter/Counter";
import { STICKERS } from "../../mock-data";
import "./cart.css";

interface ICart {
   data: any
}

const Cart = ({data : {data}}: ICart) => {
   const cartItem = [...STICKERS].filter((item) => item.id === data.id);

   const dispatch = useDispatch();

   const dispatchedRemoveSticker = useCallback(
      (id: number) => dispatch(removeSticker(id)),
      [dispatch]
  );

  const navigate = useNavigate();

   const goHome = () => navigate('/', {replace: true});

   return(
      <div className="cart-wrapper">
         <table className="table-cart">
            <tr className="table-row">
               <td className="table-column-header">Product</td>
               <td className="table-column-header">Price</td>
               <td className="table-column-header">Quantity</td>
               <td className="table-column-header">Total</td>
               <td className="table-column-header"></td>
            </tr>
            <tr>
               <td className="table-column">{cartItem[0].name}</td>
               <td className="table-column">{cartItem[0].price}</td>
               <td className="table-column"><Counter className="sticker-cart-counter" classNameCount="count-transparent" classNameButton="sticker-cart-counter-button" /></td>
               <td className="table-column">{cartItem[0].price}</td>
               <td className="table-column-header"><button className="delete-button" onClick={() => dispatchedRemoveSticker}></button></td>
            </tr>
         </table>
         <Button onClick={goHome} text="Continue shopping" className="button transparent-background cart-button" />
       </div>
   )
};

export default Cart;