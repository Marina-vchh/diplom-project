import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
        <Route path="/stickerPage" element={<StickerPage />} />
        <Route path="/" element={<LayoutChoosePage />} >
          <Route path="/" element={<Navigate replace to="/stickerPage" />} />
          <Route path="/stickerPage/:id" element={<ChoosePage />} />
        </Route>
        <Route path="/" element={<LayoutCartPage />} >
          <Route path="/cartPage/:id" element={<CartPage />} />
        </Route>
        <Route path="/" element={<LayoutCheckoutPage />} >
          <Route path="/cartPage/:id" element={<CartPage />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
        </Route>
          <Route path="/wishListPage" element={<WishListPage />} />
    </Routes>
  )
}

export default App;
