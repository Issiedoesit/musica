import React from 'react';
import Chart from './charts';
import Player from './player';
import NewReleases from './NewReleases';
import CuratedPlaylist from './curatedPlaylist';
import Nav from './Nav';

// let chart_section = document.querySelectorAll('.chart-section')
// chart_section.forEach((chart)=>{
//     chart.addEventListener('click', function(){
//         chart.style.display = 'none'
//     })
// })
export default function Home(){
    return(
        <main className='bg-dark-blue box-border font-Quicksand'>
            <Nav /> 
            <main className='w-full bg-dark-blue min-h-screen box-border md:pr-6 md:pl-24 pb-32'>
            <section className='flex flex-col lg:flex-row h-fit px-6 md:pl-5 lg:pr-10 gap-10 lg:gap-0'>
                <CuratedPlaylist />
                <Chart />
            </section>
            <NewReleases />
            </main>
            <Player />
        </main>
    )
}