import React from 'react';
import ChartsCards from './ChartsCards';
import ChartData from './chartsData';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';



export default function Chart(){
    const ChartDataSet = ChartData.map((data)=>{
        return(
            <ChartsCards image={data.image} name={data.name} composer={data.composer} duration={data.duration}/>
        )
    })
    const [width, setWidth] = useState(0);
    const carousel = useRef()

    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    return(
        <main className="space-y-4 w-full lg:w-1/2 lg:pl-10 ">
            <h1 className='text-white font-bold text-2xl'>Top charts</h1>
            <motion.div  ref={carousel} whileTap={{cursor: 'grabbing' }} className="carousel cursor-grab overflow-hidden">
                <motion.div drag="x" dragConstraints={{ right:0, left:-width }} className='inner-carousel flex flex-row md:flex-col justify-between overflow-x-clip gap-3 w-fit md:w-11/12 lg:w-full '>
                    {ChartDataSet}
                </motion.div>
            </motion.div>
        </main>
    )
}