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
            <Route exact index path='/ ' element={<Home />}></Route>
            <Route exact  path='/collection' element={<Collection />}></Route>
            <Route exact path='/radio' element={<Radio />}></Route>
            <Route exact path='/music-videos' element={<MusicVideos />}></Route>
            <Route exact path='/account' element={<Account />}></Route>
        </Routes>
        </>
    )
}

export default App;