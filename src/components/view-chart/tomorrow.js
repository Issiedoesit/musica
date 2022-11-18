import React from 'react';
import TomorrowCards from './tomorrowCards';
// import TomorrowData from './tomorrowData';
import { motion, Variants } from 'framer-motion';
import AfroParty from './charts/afroParty';
// import Show from './show';


// const AfroPartySet = AfroParty.map((fro)=>{
//   return fro.tracks.items
// })
//  console.log(AfroPartySet);
// function playMusic() {


// playMusic()

export default function Tomorrow(){
    const cardVariants: Variants = {
        offscreen: {
          y: 150,
          opacity:0,
        },
        onscreen: {
          y: 0,
          opacity:1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration:2,
            delayChildren: 0.5,
            staggerDirection: -1
          }
        }
      };
    // const TomorrowDataSet = AfroParty.map((data)=>{
    //     return <TomorrowCards image={data.tracks.items[0].track.album.images[0].url} key={data.id} artist={data.artist} song={data.song} album={data.album} duration={data.duration} />
    // })
    
    const data = AfroParty
    const items_list = data.tracks.items
    function millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    const TomorrowDataSet = items_list.map((data) =>{
      let dur = data.track.duration_ms
      let durInMins  = millisToMinutesAndSeconds(dur)
     return <TomorrowCards preview_url={data.track.preview_url} image={data.track.album.images[0].url} song={data.track.name} artist={data.track.artists[0].name} album={data.track.album.album_type} duration={durInMins}/>
   })
  //  items_list.forEach(item => {
  //   const images = item.track.album.images[0].url
  //     console.log(images);
  //     return <h1>HI</h1>
  //   })

    
    
    
    return (
        <motion.section className='space-y-3' initial="offscreen" variants={cardVariants} whileInView="onscreen" viewport={{ once: true, amount: 0 }} transition={{ ease: "easeOut", duration: 2 }}>
            {
              TomorrowDataSet
            }
        </motion.section>
    )
}
