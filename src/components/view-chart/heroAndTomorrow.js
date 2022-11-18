import React from 'react';
import AfroParty from './charts/afroParty';
import Hero from './hero';
import Tomorrow from './tomorrow';



export default function HeroAndTomorrow(){
    const data = AfroParty
    function msToTime(ms) {
        let seconds = (ms / 1000).toFixed(1);
        let minutes = (ms / (1000 * 60)).toFixed(1);
        let hours = (ms / (1000 * 60 * 60)).toFixed(1);
        if (seconds < 60) return seconds + " Sec";
        else if (minutes < 60) return minutes + " Min";
        else return hours + " Hrs"
      }
    const HeroDataSet = ()=> { 
        let hours = data.tracks.items
        const jo = hours.map((hour)=>{
           return parseInt(hour.track.duration_ms)
            
        })
        let jo_sum = jo.reduce((a, b)=>{
            return(a + b)
        })
        let play_time = msToTime(jo_sum)
       return <Hero image={data.images[0].url} chart_description={data.description} chart_name={data.name} song_amount={data.tracks.items.length} play_time={play_time}/>
    }
    return(
        <section className="h-full pb-16 z-40">
            {HeroDataSet()}
            <Tomorrow />
        </section>
    )
}