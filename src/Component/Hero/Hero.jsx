import { useEffect, useState } from 'react'
import './Hero.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import video1 from '../../assets/video1.mp4'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
import arrow_btn from '../../assets/arrow_btn.png'

function Hero() {
    let heroData = [
        {text1:"Dive into",text2:"What you love"},
        {text1:"Indulge",text2:"your passions"},
        {text1:"Give in to",text2:"your passions"},
    ]

    const [heroCount, setHeroCount] = useState(2)
    const [playStatus, setPlayStatus] = useState(false)

    const currentHero = heroData[heroCount];

    useEffect(()=>{
        setInterval(() => {
          setHeroCount((count)=>{
            return count===2?0:count+1
          })
        }, 3000);
    },[])

return (
    <div className="hero-home">
        <div className="background">
        {playStatus
        ?   <video className='hero-img fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        :   
            <>
            {heroCount === 0 ? (
                <img src={image1} className='hero-img' alt="" />
            ) : heroCount === 1 ? (
                <img src={image2} className='hero-img' alt="" />
            ) : heroCount === 2 ? (
                <img src={image3} className='hero-img' alt="" />
            ) : <img src={image1} className='hero-img' alt="" /> }
            </>
        }

        
        </div>

        <div className="hero-details">
            <div className="hero-text">
                <p>{currentHero?.text1}</p>
                <p>{currentHero?.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <img src={arrow_btn} alt="" />
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=> setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=> setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=> setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                </ul>
                <div className="hero-play">
                {/* <img  src={play_icon} alt="" /> */}
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                <p>See the video</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Hero
