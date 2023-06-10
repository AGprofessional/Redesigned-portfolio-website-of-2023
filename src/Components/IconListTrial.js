import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useState } from "react";
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const info = [{key:"0", title: "I'm a leader", src:"leadership.png", alt:"leader", width:"60px", height: "60px"},
{key:"1", title: "I'm a Master's student", src:"student.png", alt:"college", width:"60px", height: "60px"},
{key: "2", title: "I'm a college grad", src:"mortarboard.png", alt: "grad",width:"60px", height: "60px"},
{key: "3", title: "Hi there!", src:"profile-pic.jpg", alt: "me", width:"60px", height: "60px"},
{key: "4", title: "I'm am entrepreneur", src:"entrepreneur.png", alt: "entrepreneur", width:"60px", height: "60px"},
{key: "5", title: "I'm a tennis player", src:"tennis.png", alt: "tennis", width:"60px", height: "60px"},
{key: "6", title: "I'm an inventor", src:"inventor.png", alt: "inventor", width:"60px", height: "60px"},
]



export default function IconListTrial(){
const [description, setD] = useState("");
const handleDescription = (e)=>{
  setD("");

}

    return(
    
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {info.map(({key, title, src, alt, width, height}) => (
            <Grid key={key} item>
       
                <Tooltip title={title}>
         
         <IconButton onClick={handleDescription} style={{marginTop:"30px"}}>
         <img src={`assets/images/${src}`} alt={alt} width={width} height={height} style={{}}/>
           
         </IconButton>
       </Tooltip>
       <p>
        {description}
       </p>
       
              
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    );
}