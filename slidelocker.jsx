import React from 'react';
import {Title} from "./esignature.jsx";
import  './slidelocker.css';
import './happy.css';
function Slidelocker({handelInput,sliderValue,width}) {
    let slideStyle={
        appearance:"none",
        width:!width?"300px":width,
        height:"50px",
        background:"rgba(188,190,188,0.5)",
        outline:"none"
    };
    return (
        <>
        <Title text={"Slide Locker Example"}/>
            <input type="range" className={"slider mb-2 border-5"}  style={slideStyle} value={sliderValue} onInput={handelInput}/>

        </>
    );
}

export default Slidelocker;