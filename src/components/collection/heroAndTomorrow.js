import React from 'react';
import Hero from './hero';
import Tomorrow from './tomorrow';

export default function HeroAndTomorrow(){
    return(
        <section className="h-full pb-16 z-40">
            <Hero />
            <Tomorrow />
        </section>
    )
}