import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconListTrial from './IconListTrial';






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const info = [{key:"1", title: "I'm a leader", src:"leadership.png", alt:"leader", width:"60px", height: "60px"},
  {key:"2", title: "I'm a Master's student", src:"student.png", alt:"college", width:"60px", height: "60px"},
  {key: "3", title: "I'm a college grad", src:"mortarboard.png", alt: "grad",width:"60px", height: "60px"},
  {key: "4", title: "Hi there!", src:"profile-pic.jpg", alt: "me", width:"60px", height: "60px"},
  {key: "5", title: "I'm am entrepreneur", src:"entrepreneur.png", alt: "entrepreneur", width:"60px", height: "60px"},
  {key: "6", title: "I'm a tennis player", src:"tennis.png", alt: "tennis", width:"60px", height: "60px"},
  {key: "7", title: "I'm an inventor", src:"inventor.png", alt: "inventor", width:"60px", height: "60px"},
]





export default function IconList(){

    return(<>
    <IconListTrial />
    </>);
}








    function IconList0(){
    return(
        <>

        <Box sx={{ flexGrow: 1 }} style={{ display: "flex", flexWrap: "flex", flexDirection:"row"}}>
      <Grid container spacing={2} columns={16} style={{display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
        
       {info.map(({key, title, alt, src, width, height})=>{return (<Grid key={key} item xs={3} style={{position:"relative",  padding:"0px"}}>
          
      
       <Paper elevation={23} style={{backgroundColor: "Gray"}}>

          <Item style={{}}>
          
            <Tooltip title={title}>
         
      <IconButton style={{marginTop:"30px"}}>
      <img src={`assets/images/${src}`} alt={alt} width={width} height={height} style={{}}/>
        
      </IconButton>
    </Tooltip>
    
    </Item>
    </Paper>

        </Grid>)})}




        f
      </Grid>
    </Box>
        </>
    )
  }

 function IconList1() {
  return (
<>

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>



<Tooltip title="Hi there!">
      <IconButton>
      <img src="assets/images/profile-pic.jpg" alt="me" width="70px" height="70px"/>
        
      </IconButton>
    </Tooltip>
    <Tooltip title="I'm a Master's student">
      <IconButton>
      <img src="assets/images/student.png" alt="master's student" width="70px" height="70px"/>
        
      </IconButton>
    </Tooltip>

    <Tooltip title="I'm a college grad">
      <IconButton>
      <img src="assets/images/mortarboard.png" alt="college" width="70px" height="70px"/>
        
      </IconButton>
    </Tooltip>
    <Tooltip title="I'm a leader">
      <IconButton>
      <img src="assets/images/leadership.png" alt="leader" width="70px" height="70px"/>
        
      </IconButton>
    </Tooltip>
    <Tooltip title="I'm a tennis player">
      <IconButton>
      <img src="assets/images/tennis.png" alt="tennis" width="70px" height="70px"/>
        
      </IconButton>
    </Tooltip>
    <Tooltip title="I'm an entrepreneur">
      <IconButton>
      <img src="assets/images/entrepreneur.png" alt="entrepreneur" width="70px" height="70px"/>
        
      </IconButton>
    </Tooltip>
    <Tooltip title="I'm an inventor">
      <IconButton>
      <img src="assets/images/inventor.png" alt="entrepreneur" width="70px" height="70px"/>
        
      </IconButton>
    </Tooltip>

</>

  );
}




