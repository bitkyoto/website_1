import React from 'react'
import letters from '../assets/letters.svg'
import bottle from '../assets/bottle.jpg'
import pepper from '../assets/pepper.svg'
import left_bottle from '../assets/left-bottle.jpg'
export default function MainMainPage() {
  return (
    <div className='flex flex-wrap h-fit border-b border-black mx-6 w-auto'>
        <div className="left w-1/2 h-fit border-l border-black">
            <img className='pt-2 pb-2 m-auto'src={letters} alt="" />
            <div className="border-t border-b border-black flex flex-wrap pt-6 pb-6 text-block">
                <p className='text-xl mr-8'> IRE IN YOUR BELLY </p>
                <img className='mr-8' src={pepper} alt="" />
                <p className='text-xl mr-8'> PUT SOME FIRE IN YOUR BELLY </p>
                <img className='mr-8' src={pepper} alt="" />
                <p className='text-xl mr-8'> PUT SOME FI  </p>
            </div>
            <div className="left_bottle">
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
