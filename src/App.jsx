import React from 'react';
import './index.css';
import MainPage from './pages/MainPage';
import ShopPage from './pages/ShopPage';
import FillerPage from './pages/FillerPage';
import StoryPage from './pages/StoryPage';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/"       element ={<MainPage/>}/>
        <Route path="/shop"   element ={<ShopPage/>}/>
        <Route path="/filler" element ={<FillerPage/>}/>
        <Route path="/story"  element ={<StoryPage/>}/>
      </Routes>
    </>
  );
}
