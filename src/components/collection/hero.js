import React from 'react';
import hero_image from './../../assets/images/lead-image.png'
import play from './../../assets/icons/iconly/Play.svg'
import music_add from './../../assets/icons/vuesax/music-square-add.svg'
import heart_red from './../../assets/icons/iconly/Heart-red.svg'

export default function Hero(){
    return(
        <section className='pb-16 pt-10 flex flex-col sm:flex-row gap-10'>
            <div>
                <img src={hero_image} alt='hero' className='md:w-[284px] min-w-[284px] h-[288.97px]'/>
            </div>
            <div className='space-y-10 self-end'>
                <div className='space-y-3'>
                    <h1 className='text-collection-light-blue font-bold text-4xl'>Tomorrow's tunes</h1>
                    <p className='text-collection-light w-[80%] text-sm'>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit ut aliquam, purus sit amet luctus venenatis
                    </p>
                    <p className='text-collection-light text-sm'>64 songs ~ 16 hrs+</p>
                </div>
                <div className='text-white flex flex-row items-center gap-3'>
                    <div className='flex flex-row items-center gap-3 py-2 px-4 bg-white/[7%] rounded-[32px] w-fit'>
                        <img src={play} alt="play" className='w-[14px] h-[14px]'/>
                        <a href='#' className='text-xs sm:text-sm md:text-base'>Play all</a>
                    </div>
                    <div className='flex flex-row items-center gap-3 py-2 px-4 bg-white/[7%] rounded-[32px] w-fit'>
                        <img src={music_add} alt="play" className='w-[14px] h-[14px]'/>
                        <a href='#' className='text-xs sm:text-sm md:text-base'>Add to collection</a>
                    </div>
                    <div className='flex flex-row items-center gap-3 justify-center bg-white/[7%] rounded-[50%] h-10 w-10'>
                        <img src={heart_red} alt="play" className='w-4 h-4'/>
                    </div>
                </div>
            </div>
        </section>
    )
}