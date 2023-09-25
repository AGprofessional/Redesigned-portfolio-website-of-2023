



import React from 'react';
import "./responsiveSlider.css";
import images from "./imagesFinlit";
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";

export default function ResponsiveSlider({images}){
const [width, setWidth] = useState(0);
const carousel=useRef();
useEffect(()=>{
console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
//setWidth(1075);
}, []);

    return (
        <>
<motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>

        <motion.div 
        drag="x" 
        dragConstraints={{right:0, left:-width}} 
        className='inner-carousel'
        
        >
           {images.map((image)=>{return (
           <motion.div className="item"> <img  key={image} src={image} alt=""/> </motion.div>) })}
        </motion.div>
</motion.div>

        
        </>
    )
}

//https://www.youtube.com/watch?v=W0bEL93tt4k

