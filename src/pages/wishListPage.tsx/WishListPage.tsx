import React from "react";
import Background from "../../containers/background/Background";
import WishList from "../../containers/wishlist/WishList";

const WishListPage = () => {
   return(
      <>
         <Background titleText="Wishlist" className="background background-wishlist" titleTextClassname=''/>
         <WishList />
      </>
   )
};

export default WishListPage;