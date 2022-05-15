import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import StickerPage from './pages/stickerPage/StickerPage';
import OrderPage from './pages/orderPage/OrderPage';

function App() {
  return (
    <div>
        <StickerPage />
        <OrderPage />
    </div>
  )
}

export default App;
