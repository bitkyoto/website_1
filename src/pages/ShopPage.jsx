import React from 'react'
import MainShopPage from '../components/MainShopPage'
import HeaderShopPage from '../components/HeaderShopPage'
import FooterShopPage from '../components/FooterShopPage'
import Header from '../components/Header'
export default function ShopPage() {
  return (
    <>
      <Header/>
      <HeaderShopPage/>
      <MainShopPage/>
      <FooterShopPage/>
    </>
  )
}
