import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/common-components/layout/Layout";
import StickerPage from "./pages/stickerPage/StickerPage";
import ChoosePage from "./pages/choosePage/ChoosePage";
import WishListPage from "./pages/wishListPage.tsx/WishListPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"
import CartPage from "./pages/cartPage/CartPage";

function App() {
  return (
    <>
    <Routes>
        <Route path= "/" element={<StickerPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate replace to="/stickerPage" />} />
          <Route path="/stickerPage" element={<StickerPage />} />
          <Route path="/stickerPage/:id" element={<ChoosePage />} />
          <Route path="/wishListPage" element={<WishListPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
        </Route>
    </Routes>
    </>
  )
}

export default App;
