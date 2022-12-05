import React from 'react';
import Nav from '../Nav';import Player from '../player';
import HeroAndTomorrow from './heroAndTomorrow';
// import $ from "jquery"

// let chart_img = $('#chart_image').attr('src')
// let chart_back = document.getElementById('chart_back')
// function displayImage() {
//     chart_back.style.backgroundImage = "url(" + chart_img + ")";
//     chart_back.style.backgroundRepeat = 'no-repeat'
//     chart_back.style.backgroundSize = 'cover'
// }
// // only works if page has loaded before
// displayImage()

export default function Chart(){
    return(
       <main id='chart_back' className='bg-collection-pattern box-border font-Quicksand'>
        <section className='fixed top-0 left-0 z-auto h-full w-full bg-transparent backdrop-blur-md '></section>
       <Nav />
       <main className='w-full z-auto bg-gradient-to-b from-black/20 to-black/100 min-h-screen box-border md:pr-6 md:pl-24 pb-32'>
       <section className='flex z-auto flex-col h-fit px-6 md:pl-5 lg:pr-10 gap-10 lg:gap-0'>
          <HeroAndTomorrow />
       </section>
       </main>
       <Player />
   </main>
    )
}