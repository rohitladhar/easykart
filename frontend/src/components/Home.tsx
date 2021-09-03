import React from 'react';
import Slider from './Slider'
import FourItems from './FourItems';
import SliderItems from './SliderItems';
const Home:React.FC=()=>{
    return(
        <>
            <Slider/>
            <FourItems/>
            <SliderItems/>
        </>  
    )
}

export default Home;