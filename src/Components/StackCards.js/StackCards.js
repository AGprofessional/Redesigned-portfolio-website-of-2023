






import * as React from 'react';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ContainerSunny from '../ContainerSunny';

export default function StackCards({children, value, colorBack, label, labelColor, fontColor}){






    return(
        <>
        
  
<Container  maxWidth="xl" style={{ backgroundColor:`${colorBack}`, font:`${fontColor}`}}>
<h4 style={{font:`${labelColor}`}}>
    {`${label} ${value}`}
</h4>
       
       <Grid sx={{ flexGrow: 2}} container spacing={2}>
         <Grid item xs={12}>
           <Grid container justifyContent="center" spacing={2} style={{width:"100%"}}>
           
           {children}

 


           </Grid>
         </Grid>
       </Grid>
                  </Container>

        </>
    );
}