import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutChoosePage from "./components/common-components/layouts/LayoutChoosePage";
import LayoutCartPage from "./components/common-components/layouts/LayoutCartPage";
import LayoutCheckoutPage from "./components/common-components/layouts/LayoutCheckoutPage";
import StickerPage from "./pages/stickerPage/StickerPage";
import ChoosePage from "./pages/choosePage/ChoosePage";
import WishListPage from "./pages/wishListPage.tsx/WishListPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"
import CartPage from "./pages/cartPage/CartPage";

function App() {
  return (
    <Routes>
        <Route path= "/" element={<StickerPage />} />
        <Route path="/stickers" element={<StickerPage />} />
        <Route element={<LayoutChoosePage />} >
          <Route path="/stickers/:id" element={<ChoosePage />} />
        </Route>
        <Route element={<LayoutCartPage />} >
          <Route path="/cart/:id" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route element={<LayoutCheckoutPage />} >
          <Route path="/cart" element={<CartPage />} />
        </Route>
          <Route path="/wishList" element={<WishListPage />} />
          <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default App;
