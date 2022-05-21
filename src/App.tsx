import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from './components/common-components/layout/Layout';
import StickerPage from './pages/stickerPage/StickerPage';
import ChoosePage from './pages/choosePage/ChoosePage';
import WishListPage from './pages/wishListPage.tsx/WishListPage';
import {STICKERS} from './mock-data'

function App() {
  return (
    <>
    <Routes>
        <Route path='*' element={<StickerPage />} />
        <Route path='/wishlistPage' element={<WishListPage />}  />
        <Route element={<Layout />}>
        <Route index element={<Navigate replace to="/stickerPage" />} />
            <Route path='stickerPage' element={<StickerPage />} />
              {/* <Route path='/wishListPage/*' element={<WishListPage />} /> */}
        </Route>
    </Routes>
    </>
  )
}

export default App;
