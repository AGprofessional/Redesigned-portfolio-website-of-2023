import { Button } from "@mui/material";
import "./app.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import NorthIcon from '@mui/icons-material/North';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import Accordian from "./AccordianEngineering";
import ScrollToTopButton from "./ScrollToTopButton";
import { useRef } from "react";
import upArrow from "./stock-images/up-arrow.png";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import LikeButton from "./components/LikeButton";
import {useState} from "react";
import Switch from '@mui/material/Switch';
import RadioButtons from "./components/RadioButtons";
import reactLogo from "./all-other-assets/logo/react.png";
import cssLogo from "./all-other-assets/logo/css-3.png";
import jsLogo from "./all-other-assets/logo/js.png";
import htmlLogo from "./all-other-assets/logo/html-5.png";
import nodeLogo from "./all-other-assets/logo/nodejs.png";
import gitLogo from "./all-other-assets/logo/github.png";
import aiLogo from "./all-other-assets/logo/ai.png";
import googleLogo from "./all-other-assets/logo/google-logo.png";



function App() {

       const objectOn="Engineering";
       const objectOff = "MBA";
       const [isSwitchOn, setIsSwitchOn] = useState(true);
          // Function to handle switch toggle
          const handleSwitchToggle = () => {
            setIsSwitchOn((prev) => !prev);
          }

        const ScrollToTop = () => {
            const element = document.getElementById('top-of-page');
            if (element) {
              // 👇 Will scroll smoothly to the top of the next section
              element.scrollIntoView({ behavior: 'smooth' });
            }
          };

        const ScrollToBottom = () => {
            const element = document.getElementById('projects-are-here');
            if (element) {
              // 👇 Will scroll smoothly to the top of the next section
              element.scrollIntoView({ behavior: 'smooth' });
            }
          };
          const color="#f2C87Dff" //sunset
          const brown = "#826251" //not used this color yet, but its a great brown
  return (

<div className="container" id="top-of-page">

    <div className="box" style={{backgroundColor:"#F3C77B"}}>
        <div className="yellow-box">
            <div className="top-aligned">

                <div className="image-container">
                  <Tooltip title="I'm mobile-friendly!">
                  <img  style={{cursor: "pointer"}} src="./assets/images/Gopalkrishnan, Akash.jpg" alt="self-image" className="image"/>
                  </Tooltip>
                </div>
                {/* <div className="likebutton">
                <LikeButton/>
                </div>
               */}
               
            </div>

            <div className="middle-aligned">
                <p className="titleFont"style={{}}>
                    Akash <span style={{color:"#715AFF"}}>(Sunny)</span> Gopalkrishnan
                </p>
            </div>
            
            <div className="bottom-aligned">
            <Tooltip title="powered by ReactJS, CSS, HTML, Javascript, Node.js, Git, Vercel, MaterialUI, ChatGPT-3.5">

                <p className="footer">
                     ©️Copyright 2023 <span style={{marginLeft: "10px",marginRight:"10px", color: "#715AFF"}}>
                    coded, debuged, & tested by Akash (Sunny) Gopalkrishnan </span>

                    <div>
                      
                        <span><img src={reactLogo} height="40" width="40" alt="React.js" /></span>
                        <span><img src={htmlLogo} width="40" height="40" alt="HTML5"/></span>
                        <span><img src={cssLogo} width="40" height="40" alt="CSS3"/></span>
                    </div>
                    
                     <div>
                        <span><img src={jsLogo} width="40" height="40" alt="Javascript"/></span>
                        <span><img src={gitLogo} width="40" height="40" alt="Git"/></span>
                        <span><img src={nodeLogo} width="40" height="40" alt="Node.js"/></span>
                     </div>
                     <div>
                        <span><img src={aiLogo} width="40" height="40" alt="ChatGPT"/></span>
                        <span><img src={googleLogo} width="40" height="40" alt="google-MaterialUI"/></span>
                     </div>
                     

                     
                </p>
                </Tooltip>

            </div>
<div className="buttons">
<span>

    <Tooltip title="LinkedIn: @akashgkrishn">
    <IconButton  style={{color: "#715AFF"}} outlinedSuccess href="https://www.linkedin.com/in/akashgkrishn" target="_blank">
<LinkedInIcon fontSize="large"/>
    </IconButton>
    
    </Tooltip>

    <Tooltip title="Github: @AGprofessional" >
        
   <IconButton fullwidth style={{marginLeft: "50px", color:"#16db93"}} outlinedSuccess href="https://www.github.com/AGprofessional" target="_blank">
   <GitHubIcon fontSize="large"/>

   </IconButton>

   </Tooltip>

   <Tooltip title="Email: sunny@hiringsunny.com" >
        
        <IconButton fullwidth style={{marginLeft: "50px", color:"#715AFF"}} outlinedSuccess href="" target="_blank">
        <EmailIcon fontSize="large"/>
     
        </IconButton>
     
        </Tooltip>

           </span>

</div>

<div class="Projects-Navigation">
  <Tooltip title="enjoy the good stuff">
    <Button style={{backgroundColor:"#ca2e55"}} onClick={ScrollToBottom} variant="contained"> My Projects</Button>
  </Tooltip>
</div>     
        </div>
    </div>
{/* <p id="engVSmba">{isSwitchOn ? objectOn : objectOff}</p>
        <Switch
            checked={isSwitchOn}
            onChange={handleSwitchToggle}
            color="primary"
            name="toggleSwitch"
            
            inputProps={{ 'aria-label': 'Toggle switch' }}
          /> */}
    <div className="box">
      <div className="mainContainer">
             
             {/* <h1 id="portfolio">
Portfolio
</h1>
 */}
              <div id="switch">

                
                <RadioButtons />
                
                </div>
              
        </div>
        
      {/*<Accordian /> */}  
    
 

    <div className="scroll-up-button" style={{cursor: "pointer"}}>
          {/* <Button onClick={ScrollToTop} style={{background: "none",
                    border: "none",
                    margin: "7px",
                    padding: "0", cursor:"pointer"}}>
           <img style={{width: "50px", height: "50px"}} src={upArrow} alt="go back up" />

           </Button> */}


           <Tooltip title="No where but up from here">
        
        <IconButton  style={{background: "none",
                    border: "none",
                    margin: "7px",
                    color:"#f3c77b",
                    padding: "0", cursor:"pointer"}} 
                    onClick={ScrollToTop} 
                   fullwidth
                   outlinedSuccess 
                   href="" 
                   target="_blank"
          >
        <ArrowCircleUpIcon fontSize="large"/>
     
        </IconButton>
     
        </Tooltip>
        
            </div>

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