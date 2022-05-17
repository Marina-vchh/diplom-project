import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from './components/common-components/layout/Layout';
import StickerPage from './pages/stickerPage/StickerPage';
import ChoosePage from './pages/choosePage/ChoosePage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<StickerPage />} />
        <Route path='/choosePage' element={<ChoosePage />} />
        <Route element={<Layout />}>
        <Route path='/' element={<Navigate replace to="/stickerPage" />} />
              <Route path='/stickerPage' element={<StickerPage />} />
              {/* <Route path='/page2' element={<Page2 />} />
              <Route path='/page3' element={<Page3 />} /> */}
        </Route>
    </Routes>
  )
}

export default App;
