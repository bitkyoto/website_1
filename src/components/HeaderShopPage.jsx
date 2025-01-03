import React from 'react'
import left_scorp from '../assets/lscorp.svg'
import right_scorp from '../assets/right_scorp.svg'
export default function HeaderShopPage() {
  return (
    <header className='flex flex-wrap py-14 px-7 mx-6 w-auto justify-between items-center border-l border-b border-r border-black'>
        <img src={left_scorp} alt="" />
        <p className='text-6xl text-center'>THROW SOME LAVA IN <br />YOUR JAVA</p>
        <img src={right_scorp} alt="" />
    </header>
  )
}
