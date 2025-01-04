import React from 'react'
import letters from '../assets/letters.svg'
import bottle from '../assets/bottle.jpg'
import pepper from '../assets/pepper.svg'
import left_bottle from '../assets/left-bottle.jpg'
import './scroll-animation.css'
export default function MainMainPage() {
  return (
    <div className='flex flex-wrap h-fit border-l border-b border-black mx-6 w-auto'>
        <div className="left w-1/2 h-fit  border-black overflow-hidden">
            <div className="w-full border-b border-black">
                <img className='pt-2 pb-2 m-auto'src={letters} alt="" />
            </div>
            <div className="anim flex pt-6 pb-6
                items-center overflow-hidden w-full">
                <img className='mr-8' src={pepper} alt="" />
                <p className='text-xl mr-8'> PUT SOME FIRE IN YOUR BELLY </p>
                <img className='mr-8' src={pepper} alt="" />
            </div>
            
            <div className="left_bottle  border-t border-black">
                <img src={left_bottle} alt="" className='pt-6 pb-6 m-auto'/>
            </div>
        </div>
        <div className="right  w-1/2  h-fit border-l border-r border-black">
            <p className='text-6xl text-center pt-8 pb-8 border-b border-black'> THE FIRST HOT <br></br>SAUCE MADE FOR <br></br> COFFEE</p>
            <img src={bottle} alt="" className='pt-7 pb-7  m-auto'/>
        </div>
    </div>
  )
}
