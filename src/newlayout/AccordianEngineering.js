import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import imagesFinlit from "./imagesFinlit";
import imagesCalendifi from "./imagesCalendifi";
import superskate from "./all-other-assets/superskate.png";
import "./app.css";
import StackCards from './StackCards';
import ResponsiveSlider from './ResponsiveSlider';
import robResearch from "./all-other-assets/robResearch.png";
import animatedGIF from "./all-other-assets/hackathonGIF.gif";
import researchImage from "./all-other-assets/bird.jpg";
import birdGif from "./all-other-assets/birdGif.gif";
import bikeGif from "./all-other-assets/bikeGIF.gif";
import bikeImg from "./all-other-assets/bikefull.JPG";
export default function AccordianEngineering() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

 

  return (
    <div className='accordian' id="projects-are-here" >
              {/*1*/}

      <Accordion style={{backgroundColor:"white", marginBottom:"3px"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        style={{backgroundColor:"#9AC2CBff"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <div style={{display:"inline-block", padding:"10px", backgroundColor:"#8CAFB7ff", color:"white"}}>
                <b>Product Innovation: Design Thinking, UI/UX, Front-end</b>
                </div>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} style={{marginLeft: "10px"}}> I take a human-centered approach to product innovation. I can translate business requirements into technical specifications and implement several cloud, web development, and AI solutions. I'm certified in Design Thinking.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* -------begin product development details---- */}
          <div className="designContainer">

         





              <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                           <span style={{color: "green"}}> FinLit </span>
                        </h1>
                      </Typography>
                                <Paper elevation={3} style={{ backgroundColor: "#9AC2CBff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography>
                                <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#8CAFB7ff", color:"white"}}>
                            <b>Swipe right or left!</b>
                            </div>
                                    
                              </Typography>
                              <div className='responsiveSlider'> 
                              <ResponsiveSlider images={imagesFinlit}/> 

                              </div>
                                </Paper>
                   
                  </div>



            <div className='design-FinLit'>
                          <Typography>
                            <h1 style={{fontSize: "24px"}}>
                              Calendifi 
                            </h1>
                          </Typography>
                                    <Paper elevation={3} style={{ backgroundColor: "#9AC2CBff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                    <Typography>
                                    <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#8CAFB7ff", color:"white"}}>
                                    <b>Swipe right or left!</b>
                                </div>
                                        
                                  </Typography>
                                    <ResponsiveSlider images={imagesCalendifi}/>
                                    </Paper>
            </div>
          
        </div>
      
                    {/* -------end product development details---- */}

        </AccordionDetails>
      </Accordion>
      {/*2 */}
      <Accordion style={{backgroundColor:"white", marginBottom:"3px"}}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
        style={{backgroundColor:"#F2C87Dff"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            
            <div style={{display:"inline-block", padding:"10px", backgroundColor:"#DAB370ff", color:"white"}}>
                <b>Hybrid Cloud, Hackathons, Leadership, Teamwork

                </b>
            </div>
            
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            My goal is to become a subject matter expert in hybrid cloud, AI, and technical development. I've completed the Amazon Web Services Cloud Foundations course and won "Best Use of Google Cloud" at HackTCNJ!      </Typography>
        </AccordionSummary>
        <AccordionDetails>

          {/*-----hackathons details start---------- */}
        <div className="designContainer">
              <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                        Awarded <span style={{color: "green"}}> Best Use of Google Cloud Platform </span>at HackTCNJ, The College of New Jersey 
                        </h1>
                      </Typography>
                                <Paper elevation={3} style={{ backgroundColor: "#F2C87Dff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography>
                                <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#DAB370ff", color:"white"}}>
                            <b>
                        All Hands On Deck
                            </b>
                            </div>
                                    
                              </Typography>

                              <div className='hacktcnj-gif-container' style={{marginBottom:"30px"}}>
                                          {/*-----drop hacktcnj gif here---------- */}
                                          <a href='https://www.youtube.com/watch?v=xsMvJurmF_w' target='_blank'>
                                            <img className="clickable-image" src={animatedGIF} alt='animated gif'/>

                                          </a>
                                </div>
                                </Paper>
                   
                  </div>



                  
          
        </div>

                  {/*----end hackathon details----------- */}

        </AccordionDetails>
      </Accordion>

            {/*3 */}

      <Accordion style={{backgroundColor:"white", marginBottom:"3px"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
         style={{backgroundColor:"#F1E2C1ff"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div className="diversity-text eng" >
                <b>Machine Learning, Artificial Intelligence, Generative AI

                </b>
            </div>        </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            I've been interested in AI since I could talk and I love exploring the fields of automation and natural language processing.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Do you want to see my latest Business Intelligence Machine Learning Project? If yes then navigate to the <span style={{color: "#ca2e55", fontWeight:"bolder"}}> MBA</span> tab and check out "<span style={{color: "#ca2e55", fontWeight:"bolder"}}>Business Intelligence with Data Mining</span>"! Thank you!
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/*4 */}


      <Accordion style={{backgroundColor:"white", marginBottom:"3px"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
        style={{backgroundColor:"#E3803Fff"}}

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div style={{display:"inline-block", padding:"10px", backgroundColor:"#CD7335ff", color:"white"}}>
                <b>Space Enthusiast

                </b>
            </div>        </Typography>
          <Typography sx={{color: 'text.secondary' }} style={{marginLeft: "10px"}}> I'm passionate about space, control theory, mechatronics, digital signal processing, and systems engineering. I want to create interstellar vehicles!</Typography>
        </AccordionSummary>
        <AccordionDetails>
           {/*-----research projects start---------- */}
        <div className="designContainer">
              <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                         <span style={{color: "green"}}> Mechanical and Aerospace Engineering </span> at Rutgers U. School of Engineering
                        </h1>
                      </Typography>
                                <Paper elevation={3} style={{ backgroundColor: "#E3803Fff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography>
                                <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#CD7335ff", color:"white"}}>
                            <b>
                        Robotic Self-Driving Flapping/Flying Car (Biomimicry)
                            </b>
                            </div>
                                    
                              </Typography>

                              <div className='research-poster-img-container' style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly" }}>
                                          {/*-----drop research poster image here---------- */}

                                          <img style={{margin: "10px", boxSizing:"border-box", height: "200px", width: "320px"}}src={researchImage} alt='research image'/>
                                         <a href='https://www.youtube.com/shorts/ISVF2acChVY' target='_blank'>
                                         <img className="clickable-image" style={{margin:"10px",  boxSizing:"border-box", height: "200px", width: "350px"}} src={birdGif} alt="animated gif"/>

                                         </a>
                                          <img style={{margin: "10px", marginTop:"20px",marginBottom:"30px", boxSizing:"border-box", height: "250px", width: "360px"}}src={robResearch} alt='research poster'/>

                                </div>
                                </Paper>
                   
                  </div>
        </div>

                  {/*----end research project details----------- */}
        </AccordionDetails>
      </Accordion>


{/*5 */}

      <Accordion style={{backgroundColor:"white", marginBottom:"3px"}}expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
        style={{backgroundColor:"#BCACE3ff"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>          
          <div style={{display:"inline-block", padding:"10px", backgroundColor:"#A998CAff", color:"white"}}>
                <b>SolidWorks, AutoCAD, 3D Modeling

                </b>
            </div> </Typography>
        </AccordionSummary>
        <AccordionDetails>
           {/*-----3d modeling projects start---------- */}
        <div className="designContainer">
              <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                         <span style={{color: "green"}}> Mechanical and Aerospace Engineering </span> at Rutgers U. School of Engineering
                        </h1>
                      </Typography>
                                <Paper elevation={3} style={{ backgroundColor: "#BCACE3ff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography>
                                <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#A998CAff", color:"white"}}>
                            <b>
                        HardTail Mountain Bike, 50+ parts, SolidWorks 
                            </b>
                            </div>
                                    
                              </Typography>

                              <div className='bike-container' style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly" }}>
                                          {/*-----drop bike image here---------- */}
                                          <a href='https://www.youtube.com/watch?v=rOuEvl8O1Ls' target='_blank'>
                                          <img className="clickable-image" style={{margin: "10px", boxSizing:"border-box", height: "220px", width: "320px"}}src={bikeImg} alt='bike image'/>

                                          </a>
                                          <a href='https://www.youtube.com/watch?v=m4brpmIfPE8' target='_blank'>
                                          <img className="clickable-image" style={{margin:"10px", marginBottom:"30px", boxSizing:"border-box", height: "220px", width: "350px"}} src={bikeGif} alt="animated gif"/>
                                          </a>
                                </div>
                                </Paper>
                   
                  </div>
        </div>

                  {/*----3D Modeling  project details end---------- */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}