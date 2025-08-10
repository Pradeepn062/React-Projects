import './Background.css'

import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpeg'
import img3 from '../../assets/image3.jpg'
import vid1 from '../../assets/videoplayback.mp4'

const Background = ({count,playStatus}) => {

    if(playStatus)
    {
         return(
            <video autoPlay muted loop className='images'>
                <source src={vid1} type='video/mp4'/>
            </video>  
        )   
    }

    else if(count===0)
    {
        return (
        <>
            <img src={img1} alt='imag1' className='images'></img>        
        </>
        )
    }

    else if(count===1)
    {
        return (
        <>
            <img src={img2} alt='imag2' className='images'></img>        
        </>
        
        )
    }
    else if(count===2)
    {
        return (
        <>
            <img src={img3} alt='imag3' className='images'></img>        
        </>
        
        )
    }
}

export default Background