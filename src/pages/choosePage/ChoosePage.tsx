import React from "react";
import Background from "../../containers/background/Background";
import Layout from "../../components/common-components/layout/Layout";
import './choosePage.css'
import Footer from "../../containers/footer/Footer";
import StickersChoose from "../../containers/stickersChoose/StickersChoose";

const ChoosePage = () => {
   return(
      <>
         <Background titleText="Shop" className="background background-choose" titleTextClassname="title-wrapper title-wrapper-order"/>
         <Layout />
         <StickersChoose  />
         <Footer />
      </>
   )
}

export default ChoosePage;