import { Button } from "@mui/material";
import "./app.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import Accordian from "./Accordian";
import ScrollToTopButton from "./ScrollToTopButton";


function App() {
  return (

<div className="container">

    <div className="box" style={{backgroundColor:"#F2C87Dff"}}>
    
        <div className="yellow-box">
       
            <div className="top-aligned">
                <img src="./assets/images/profile-pic.jpg" alt="image" className="image"/>
            </div>
           
            <div className="middle-aligned">
                <p className="titleFont"style={{}}>
                    Akash <span style={{color:"blue"}}>(Sunny)</span> Gopalkrishnan
                </p>
            </div>
            
            
               
                
            <div className="bottom-aligned">
                <p className="footer">
                     Created in June 2023 <span style={{marginLeft: "10px",marginRight:"10px", color: "black"}}>
                    by Sunny </span>using React.js/Material UI
                </p>
            </div>
<div className="buttons">
<span>
    <Tooltip title="LinkedIn: @akashgkrishn">
        
    <IconButton  style={{color: "#9AC2CBff"}} outlinedSuccess href="https://www.linkedin.com/in/akashgkrishn" target="_blank">
<LinkedInIcon fontSize="large"/>
    </IconButton>
    
    </Tooltip>

    <Tooltip title="Github: @AGprofessional" >
        
   <IconButton fullwidth style={{marginLeft: "50px", color:"#9AC2CBff"}} outlinedSuccess href="https://www.github.com/AGprofessional" target="_blank">
   <GitHubIcon fontSize="large"/>

   </IconButton>

   </Tooltip>
 
   <Tooltip title="Email: sunny@hiringsunny.com" >
        
        <IconButton fullwidth style={{marginLeft: "50px", color:"#9AC2CBff"}} outlinedSuccess href="" target="_blank">
        <EmailIcon fontSize="large"/>
     
        </IconButton>
     
        </Tooltip>
      
   
           </span>

</div>
           
        </div>
    </div>

    <div className="box" style={{backgroundColor:"#10130Aff"}}>
        <h1 style={{marginLeft: "10px", color: "#E07F3Fff"}}>
            Portfolio
        </h1>
    <Accordian />
    
 

    
     </div>
</div>

  );
}


export default App;
/**
<palette>
  <color name="Sunset" hex="F2C87D" r="242" g="200" b="125" />
  <color name="Wisteria" hex="BCACE3" r="188" g="172" b="227" />
  <color name="Caramel" hex="E07F3F" r="224" g="127" b="63" />
  <color name="Sandy brown" hex="EDA15C" r="237" g="161" b="92" />
  <color name="Light blue" hex="9AC2CB" r="154" g="194" b="203" />
  <color name="Night" hex="0D0D0D" r="13" g="13" b="13" />
  <color name="Dutch white" hex="F1E2C1" r="241" g="226" b="193" />
  <color name="Sunset" hex="F0C87D" r="240" g="200" b="125" />
  <color name="Eerie black" hex="1A1A18" r="26" g="26" b="24" />
  <color name="Night" hex="10130A" r="16" g="19" b="10" />
</palette> 



/* CSS HEX 
--sunset: #F2C87Dff;
--sandy-brown: #EDA15Cff;
--night: #10130Aff;
--eerie-black: #1A1A18ff;
--light-blue: #9AC2CBff;
--sunset-2: #F0C87Dff;
--dutch-white: #F1E2C1ff;
--caramel: #E07F3Fff;
--wisteria: #BCACE3ff;

keys in order from second..third..last..first
/* CSS HEX 
--sunset: #F2C87Dff;
--ecru: #DAB370ff;
--dutch-white: #F1E2C1ff;
--dun: #D9C9ADff;
--caramel: #E3803Fff;
--cocoa-brown: #CD7335ff;
--wisteria: #BCACE3ff;
--wisteria-2: #A998CAff;
--light-blue: #9AC2CBff;
--cadet-gray: #8CAFB7ff;




*/

 function App1(){
    return(
<div class="container">
<div className="left-column" style={{backgroundColor:"#F2C87Dff"}}>
    <div class="top-aligned">Top Div</div>
    <div class="center-aligned">Center Div</div>
    <div class="bottom-aligned">Bottom Div</div>
  </div>
  <div className="right-column" style={{backgroundColor:"#10130Aff"}}>
</div>
</div>

    );
}