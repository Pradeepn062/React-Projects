import React from 'react'
import './Body.css'

import play_icon from '../../assets/play-button.png'
import pause_icon from '../../assets/pause-button.jpg'
import arrow_btn from '../../assets/arrow-button.jpg'

const Body = ({heroData,count,setCount,setPlayStatus,playStatus}) => {

  return (
    <div className='body'>
        <div className="body-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        
        <div className='arrow-button'>
            <p>Explore the features</p>
            <img onClick={()=>count==2?setCount(0):setCount(count+1)} src={arrow_btn} alt='arrow' className='arrow-btn'></img>
        </div>

        <div className='list-scroll'>
                <li onClick={()=>setCount(0)} className={count===0? 'orange-dot' : 'white-dot'}></li>
                <li onClick={()=>setCount(1)} className={count===1? 'orange-dot':'white-dot'}></li>
                <li onClick={()=>setCount(2)} className={count===2? 'orange-dot' : 'white-dot'}></li>
        </div>

        <div className='play-pause-icon'>
            <img onClick={() => setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} className='icon'></img>
            <p className='play-pause-video'>Play the video</p>
        </div>

    </div>
  )
}

export default Body