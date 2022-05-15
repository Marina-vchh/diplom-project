import React from 'react';
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Layout from './components/common-components/layout/Layout';
import StickerPage from './pages/stickerPage/StickerPage';
import OrderPage from './pages/orderPage/OrderPage';

function App() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<StickerPage />}></Route>
        <Route path='/orderPage' element={<OrderPage />}></Route>
        <Route element={<Layout />}>
        <Route path='/' element={<Navigate replace to="/stickerPage" />} />
              <Route path='/stickerPage' element={<StickerPage />} />
              {/* <Route path='/page2' element={<Page2 />} />
              <Route path='/page3' element={<Page3 />} /> */}
        </Route>
    </Routes>
    </div>
  )
}

export default App;
