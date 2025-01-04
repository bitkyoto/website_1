import React from 'react'
import catalog from '../assets/Frame.png'
export default function MainShopPage() {
  return (
        <div id='shop' className="main_shop_page flex flex-wrap mx-6 w-auto border-l border-b border-r border-black">
            <img className='m-auto w-full' src={catalog} alt="" />
        </div>
    )
}
