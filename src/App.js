import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Collection from './components/collection/collection';
import Radio from './components/radio/radio';
import Home from './components/Home';
import Nav from './components/Nav';
import MusicVideos from './components/music-videos/music-videos';
import Account from './components/account/account';





function App(){
    return(
        <>
        <Nav />
        <Routes>
            <Route index path='/' element={<Home />}></Route>
            <Route path='/collection' element={<Collection />}></Route>
            <Route path='/radio' element={<Radio />}></Route>
            <Route path='/music-videos' element={<MusicVideos />}></Route>
            <Route path='/account' element={<Account />}></Route>
        </Routes>
        </>
    )
}

export default App;