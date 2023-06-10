
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import IconList from './IconList';


export default function NavBar(){

    return(<>
        
        <div style={{display:"flex", flexDirection: "row", alignContent: "space-around", justifyContent: "center", margin:"10px"}}>
<IconList/>
</div>
        </>);
}







function NavBar1(){

    return (
        <>
 
 <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          height: "10vh",
        },
      }}
    >
      
        <div style={{display:"flex", flexDirection: "row", alignContent: "space-around", justifyContent: "center"}}>
<IconList/>
<div>

</div>
</div>


        
        
        </Box>

      

   </>
    )
}
