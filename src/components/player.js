import React from 'react';
import half_face from './../assets/images/half-face.png'
import next from './../assets/icons/vuesax/next.svg'
import previous from './../assets/icons/vuesax/previous.svg'
import play from './../assets/icons/play.svg'
import repeat_one from './../assets/icons/vuesax/repeate-one.svg'
import volume_high from './../assets/icons/vuesax/volume-high.svg'
import shuffle from './../assets/icons/vuesax/shuffle.svg'
// import useState from 'react'

export default function Player(){

    const rangeInputs = document.querySelectorAll('input[type="range"]')

    function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('song_range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value
    console.log(min)
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    }

    rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
    })


    return(
        <section className='h-28 z-[100] py-5 w-full border-t-0.25 border-gray-800 drop-shadow-player flex flex-row gap-10 justify-between fixed bottom-0 left-0 px-8 lg:px-10 bg-transparent/30 backdrop-blur-md music-player'>
            <div className='flex flex-row gap-4 items-center'>
                <img src={half_face} alt="playing" className='w-16 h-16 rounded-[14px]'/>
                <div className='space-y-2 text-white'>
                    <h2 className='font-bold'>Seasons in</h2>
                    <p className='text-xs'>James</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-7/12 self-center'>
                <div className='flex flex-row justify-end items-center md:mx-auto gap-6 md:gap-8 lg:gap-16'>
                    <div className='hidden md:block'>
                        <img src={shuffle}  alt='shuffle' className='w-5 h-5 cursor-pointer'/>
                    </div>
                    <div className='hidden md:block'>
                        <img src={previous}  alt='previous' className='w-5 h-5 cursor-pointer'/> 
                    </div>
                    <div className='p-3 rounded-[50%] bg-sec-yellow shadow-md shadow-white/30'>
                        <img src={play}  alt='play' className='w-5 h-5 cursor-pointer'/>
                    </div>
                    <div >
                        <img src={next}  alt='next' className='w-5 h-5 cursor-pointer'/>
                    </div>
                    <div className='hidden md:block'>
                        <img src={repeat_one}  alt='repeat once' className='w-5 h-5 cursor-pointer'/>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <input type="range" name="song-range" id="song_range" className='w-full appearance-none'/>
                </div>
            </div>
            <div className='hidden md:flex flex-row items-center gap-5'>
               <img src={volume_high} alt="volume" className='h-5 w-5 cursor-pointer'/>
               <input type="range" name="song-range" id="song_range" className='w-full appearance-none'/> 
            </div>
        </section>
    )
}