import React from "react";
import Background from "../../containers/background/Background";
import Layout from "../../components/common-components/layout/Layout";

const WishListPage = () => {
   return(
      <>
         <Background titleText="Wishlist" className="background background-wishlist" titleTextClassname=''/>
         <Layout />
      </>
   )
};

export default WishListPage;