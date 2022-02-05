import React, {useState} from 'react';
import Explorers from './explorers';
import GetStarted from './getstarted';
import Hotcollections from './hotcollections';
import Lastevents from './lastevents';
import Nftevents from './nftevents';
import Topsellers from './topsellers';

const Home = () => {
    return (
        <main className='main'>
            <div className='home'>
                <Nftevents />
            </div>
            <div className='container'>
                <Lastevents />
                <Topsellers />
                <Explorers />
                <Hotcollections />
                <GetStarted />
            </div>
        </main>
    )
}

export default Home;