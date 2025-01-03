import React from 'react';
import './index.css';
import MainPage from './pages/MainPage';
import ShopPage from './pages/ShopPage';
import FillerPage from './pages/FillerPage';
import StoryPage from './pages/StoryPage';
export default function App() {
  return (
    <>
      <MainPage/>
      <ShopPage/>
      <FillerPage/>
      <StoryPage/>
    </>
  );
}
