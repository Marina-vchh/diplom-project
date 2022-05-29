import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StickerSelector } from "../../redux/selectors/stickers-selectors/sticker-selector";
import { removeSticker } from "../../redux/actions/stickersActionsCreators/stickersActionsCreators";
import HomeButton from "../../components/common-components/button/HomeButton";
import Counter from "../counter/Counter";
import "./cart.css";

interface ICart {
   data: any;
}

const Cart = ({ data : { data } }: ICart) => {
   const sticker = useSelector(StickerSelector)

   const dispatch = useDispatch();

   const dispatchedRemoveSticker = useCallback(
      ( id: number ) => dispatch( removeSticker(id) ),
      [dispatch]
  );

   const cartItem = [...sticker].filter( ( item ) => item.id === data.id );

   const navigate = useNavigate();

   const goHome = () => navigate('/', { replace: true });

   return(
      <div className="cart-wrapper">
         <table className="table-cart">
            <tr className="table-row">
               <td className="table-column-header">Product</td>
               <td className="table-column-header">Price</td>
               <td className="table-column-header">Quantity</td>
               <td className="table-column-header">Total</td>
               <td className="table-column-header" />
            </tr>
            <tr>
               <td className="table-column">
                  {
                     cartItem.map(( item ) => {
                        return (
                           <div className="product-name-group">
                              <img className="sticker-item-img-in-table" 
                                   src={ item.src } alt={ item.alt } />
                              <p className="table-column-text">{ item.name }</p>
                           </div>
                        )
                     })
                  }
               </td>
               <td className="table-column">
                  {
                     cartItem.map((item) => {
                        return (
                           <p className="table-column-text">{item.price}</p>
                        )
                     })
                  }
               </td>
               <td className="table-column">
                  <Counter className="sticker-cart-counter" classNameCount="count-transparent" classNameButton="sticker-cart-counter-button" />
               </td>
               <td className="table-column">
                  {
                     cartItem.map((item) => {
                        return (
                           <p className="table-column-text">{item.price}</p>
                        )
                     })
                  }
               </td>
               <td className="table-column-header">
                  <button className="delete-button" 
                          onClick={() => dispatchedRemoveSticker} />
               </td>
            </tr>
         </table>
         <HomeButton onClick={goHome} 
                     text="Continue shopping" 
                     className="button transparent-background cart-button" />
       </div>
   )
};

export default Cart;