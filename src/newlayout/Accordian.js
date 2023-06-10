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
export default function Accordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='accordian'>
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
                <b>Product Development Competitions</b>
                </div>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} style={{marginLeft: "10px"}}> I'm a natural problem solver and an innovator.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* -------begin product development details---- */}
          <div className="designContainer">

          <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                          Awarded <span style={{color: "violet"}}> Grand Prize </span>at Rider University Collegiate Business Concept Competition 2022 &  <span style={{color: "green"}}> Finalist </span> at UPitch New Jersey 2022
                        </h1>
                      </Typography>
                                <Paper elevation={3} style={{ backgroundColor: "#9AC2CBff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography>
                                <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#8CAFB7ff", color:"white"}}>
                            <b>SuperSkate</b>
                            </div>
                                    
                              </Typography>
                              
                                <div className='hacktcnj-gif-container' style={{marginBottom:"30px"}}>
                                           {/*-----drop superskate pics here---------- */}
                                          
                                         
                                            <img style={{margin: "10px", marginTop:"20px",marginBottom:"30px", boxSizing:"border-box", height: "250px", width: "360px"}}src={superskate} alt='image'/>

                                </div>
                                </Paper>
                   
                  </div>





              <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                          Awarded <span style={{color: "green"}}> Top 5 Finalist </span>at Rider University Collegiate Business Concept Competition 2021
                        </h1>
                      </Typography>
                                <Paper elevation={3} style={{ backgroundColor: "#9AC2CBff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography>
                                <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#8CAFB7ff", color:"white"}}>
                            <b>FinLit</b>
                            </div>
                                    
                              </Typography>
                                <ResponsiveSlider images={imagesFinlit}/>
                                </Paper>
                   
                  </div>



            <div className='design-FinLit'>
                          <Typography>
                            <h1 style={{fontSize: "24px"}}>
                              Awarded <span style={{color: "green"}}> Grand Prize </span>at Rider University Collegiate Business Concept Competition 2021
                            </h1>
                          </Typography>
                                    <Paper elevation={3} style={{ backgroundColor: "#9AC2CBff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                    <Typography>
                                    <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#8CAFB7ff", color:"white"}}>
                                <b>Calendifi</b>
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
                <b>Hackathons

                </b>
            </div>
            
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
 I can both lead a project and get down into the coding details!          </Typography>
        </AccordionSummary>
        <AccordionDetails>

          {/*-----hackathons details start---------- */}
        <div className="designContainer">
              <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                        Awarded <span style={{color: "green"}}> Best Use of Google Cloud Platform </span>at HackTCNJ, The College of New Jersey 2021
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



                  <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                          Awarded <span style={{color: "green"}}> Best Failed Attempt Hack </span>at HackHERS at Rutgers, The State University of New Jersey 2021
                        </h1>
                      </Typography>
                                <Paper elevation={3} style={{ backgroundColor: "#F2C87Dff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography>
                                <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#DAB370ff", color:"white"}}>
                            <b>Phishing Chrome Extension</b>
                            </div>
                                    
                              </Typography>
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
          <div className="diversity-text">
                <b>Current Projects

                </b>
            </div>        </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
I'm just trying to make my life easier, if something can be automated, then why not make a computer do it?         </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Coming Soon!
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
                <b>Research Projects

                </b>
            </div>        </Typography>
          <Typography sx={{color: 'text.secondary' }} style={{marginLeft: "10px"}}> Sounds easy, but it's suprisingly really hard: Self-Driving Flying Cars         </Typography>
        </AccordionSummary>
        <AccordionDetails>
           {/*-----research projects start---------- */}
        <div className="designContainer">
              <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                         <span style={{color: "green"}}> Mechanical and Aerospace Engineering </span> with Professor Bagchi at Rutgers, The State University of New Jersey 2017
                        </h1>
                      </Typography>
                                <Paper elevation={3} style={{ backgroundColor: "#E3803Fff", marginBottom: "30px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                <Typography>
                                <div style={{display:"inline-block", margin: "10px",padding:"10px", backgroundColor:"#CD7335ff", color:"white"}}>
                            <b>
                        Robotic Self-Driving Flapping/Flying Car
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
                <b>3D Modeling

                </b>
            </div> </Typography>
        </AccordionSummary>
        <AccordionDetails>
           {/*-----3d modeling projects start---------- */}
        <div className="designContainer">
              <div className='design-Finlit'>
                          <Typography>
                        <h1 style={{fontSize: "24px"}}>
                         <span style={{color: "green"}}> Mechanical and Aerospace Engineering </span> at Rutgers, The State University of New Jersey 2014
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