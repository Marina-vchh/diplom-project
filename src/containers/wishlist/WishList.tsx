import React, {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeSticker } from "../../redux/actions/stickersActionsCreators/stickersActionsCreators";
import Button from "../../components/common-components/button/Button";
import HomeButton from "../../components/common-components/button/HomeButton";
import { useNavigate } from "react-router-dom";
import { StickerSelector } from "../../redux/selectors/stickers-selectors/sticker-selector";
import Title from "../../components/common-components/title/Title";
import "./wishList.css";

const WishList = () => {
   const stickers = useSelector(StickerSelector);
   const likedStickers = stickers.filter((item: any) => item.isLike);

   console.log(likedStickers)

   const dispatch = useDispatch();

   const dispatchedRemoveSticker = useCallback(
      (id: number) => dispatch(removeSticker(id)),
      [dispatch]
  );

   const navigate = useNavigate();

   const goHome = () => navigate('/', {replace: true});

   if(likedStickers.length > 0) {
      return(
         <div className="wishlist">
            <table className="table-wishlist">
               <tr className="table-wishlist-row table-wishlist-row__header">
                  <td className="table-column__header"> Product </td>
                  <td className="table-column__header"> Price </td>
                  <td className="table-column__header"> Stock status </td>
                  <td className="table-column__header"> </td>
               </tr>
               <tr className="table-wishlist-row">
                  <td className="table-column">
                     {
                        likedStickers.map((item: any) => {
                           return (
                           <div className="product-name-group">
                              <img className="sticker-item-img-in-table" src={item.src} alt={item.alt} />
                              <p>{item.name}</p>
                           </div>
                           )
                        })
                     }
                  </td>
                  <td className="table-column">
                     {likedStickers.map((item: any) => {
                     return (
                           <p>{item.price}</p>
                        )
                     })}
                  </td>
                  <td className="table-column">
                     {likedStickers.map((item: any) => {
                        return (
                              <p>{item.stock}</p>
                        )
                        })
                     }
                  </td>
                  <td className="table-column">
                     {likedStickers.map((item: any) => {
                        return (
                           <Link key={item.id} to={`/stickerPage/${item.id}`}> 
                              <Button  
                                 disabled={false}
                                 text="add to cart" 
                                 className={"button transparent-background"} />
                           </Link>)
                  })
                  }  
                  </td>
                  <td className="table-column">
                     {
                        likedStickers.map((item: any) => {
                           return (
                              <button className="delete-button" onClick={() => dispatchedRemoveSticker} />)
                        })
                     }  
                  </td>
               </tr>
            </table>
         <HomeButton text="All stickers"  
                 className="button transparent-background wishList-button" 
                 onClick={goHome} />
         </div>
      )
   } else {
      return(
         <>
            <Title text="No like stickers" className="title" />
            <Link to="/">
            <HomeButton text="All stickers" 
                    className="button transparent-background wishList-button" 
                    onClick={goHome} />
            </Link>
         </>
      ) 
   }

   
};
export default WishList;