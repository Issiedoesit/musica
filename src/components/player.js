import React, { useState } from 'react';
import half_face from './../assets/images/half-face.png'
import next from './../assets/icons/vuesax/next.svg'
import previous from './../assets/icons/vuesax/previous.svg'
import play from './../assets/icons/play.svg'
import repeat_one from './../assets/icons/vuesax/repeate-one.svg'
import volume_high from './../assets/icons/vuesax/volume-high.svg'
import shuffle from './../assets/icons/vuesax/shuffle.svg'
import { motion } from 'framer-motion';

// import useState from 'react'

export default function Player(){

    // const rangeInputs = document.querySelectorAll('input[type="range"]')

    // function handleInputChange(e) {
    // let target = e.target
    // if (e.target.type !== 'range') {
    //     target = document.getElementById('song_range')
    // } 
    // const min = target.min
    // const max = target.max
    // const val = target.value
    // console.log(min)
    
    // target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    // }

    // rangeInputs.forEach(input => {
    // input.addEventListener('input', handleInputChange)
    // })
    const [musicIndex, setMusicIndex] = useState(0)
    let songs = document.querySelectorAll('.songs')
    let player_img = document.getElementById('player_img')
    let song_art = document.querySelectorAll('.song-art')
    let artists = document.querySelectorAll('.artist')
    let song_title = document.querySelectorAll('.song-title')
    let player_song = document.getElementById('player_song')
    let player_artist = document.getElementById('player_artist')
    let preview_url = document.querySelectorAll('.preview-url')
    songs.forEach((song, index)=>{
        song.addEventListener('click', ()=>{
            setMusicIndex(index)
            let art = song_art[musicIndex].getAttribute('src')
            player_img.setAttribute('src', art)
            player_artist.innerHTML = artists[musicIndex].innerHTML
            player_song.innerHTML = song_title[musicIndex].innerHTML
            preview_url.forEach((url)=>{
                url.pause()
            })
            preview_url[musicIndex].play()
        })
    })
    console.log(song_art);
    return(
        <section className='h-28 z-[40] md:z-[100] py-5 w-full border-t-0.25 border-gray-800 drop-shadow-player flex flex-row gap-10 justify-between fixed bottom-0 left-0 px-8 lg:px-10 bg-transparent/30 backdrop-blur-xl music-player'>
            <div className='flex flex-row gap-4 items-center'>
                <img id='player_img' src={half_face} alt="playing" className='w-16 h-16 rounded-[14px]'/>
                <div className='space-y-2 text-white'>
                    <h2 id='player_song' className='font-bold'>Seasons in</h2>
                    <p id='player_artist' className='text-xs'>James</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-7/12 self-center'>
                <div className='flex flex-row justify-end items-center md:mx-auto gap-6 md:gap-8 lg:gap-16'>
                    <div className='hidden md:block'>
                        <motion.img src={shuffle} whileHover={{ scale: ['1', '1.3'] }} transition={{ ease: "easeOut", duration:0.5 }} alt='shuffle' className='w-5 h-5 cursor-pointer'/>
                    </div>
                    <div className='hidden md:block'>
                        <motion.img src={previous} whileHover={{ scale: ['1', '1.3'] }} transition={{ ease: "easeOut", duration:0.5 }} alt='previous' className='w-5 h-5 cursor-pointer'/> 
                    </div>
                    <motion.div whileHover={{ scale: ['1', '1.1'] }} transition={{ ease: "easeInOut", duration:0.5 }} className='play-pause button cursor-pointer p-3 rounded-[50%] bg-sec-yellow shadow-md shadow-white/30'>
                        <motion.img src={play}   alt='play' className='w-5 h-5'/>
                    </motion.div>
                    <div >
                        <motion.img src={next} whileHover={{ scale: ['1', '1.3'] }} transition={{ ease: "easeOut", duration:0.5 }}  alt='next' className='w-5 h-5 cursor-pointer'/>
                    </div>
                    <div className='hidden md:block'>
                        <motion.img src={repeat_one} whileHover={{ scale: ['1', '1.3'] }} transition={{ ease: "easeOut", duration:0.5 }}  alt='repeat once' className='w-5 h-5 cursor-pointer'/>
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