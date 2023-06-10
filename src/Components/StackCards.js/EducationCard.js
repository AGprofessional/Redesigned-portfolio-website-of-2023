
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const src = "rider.jpg"
const imgData={src: "rider.jpg", alt: "Rider U.", width:"400px", height: "300px"}

export default function EducationCard(){

    return(
        <Grid container spacing={1} style={{paddingBottom:"10px", display: "flex", justifyContent:"space-evenly"}}>

                    <Grid item xs={8}>
                        <Item>
                            <img src={`assets/images/${imgData.src}`} alt={`${imgData.alt}`} width={imgData.width} height={imgData.height} style={{}}/>
                        </Item>
                    </Grid>

                    <Grid item xs={4}>

                        <Item>
                            <h4>
                                I'm really enjoying my <span style={{color: "blue"}}>Information Systems</span> courses. My <u>favorite course</u>  so far is
                                <span style={{color:"green"}}> Business Intelligence in Tech: Data Mining </span>
                            </h4>
                        </Item>
                       

                        
                    </Grid>

               

                    <Grid item xs={8}>
                        <Item style={{marginTop:"10px", color:"black"}}>
                            <h3>
                                As an underrepresented, low-income student, I wanted to help solve the problem of <span style={{color: "brown"}}> Under-representation in Machine Learning</span>. ML models in self-driving cars, for example, contain racial biases and social injustices such as sex, race, and age, leading to higher deaths of unprivleged groups                            </h3>
                        </Item>
                      
                    </Grid>
                    <Grid item xs={4}>
                        ss
                    </Grid>
                    
         </Grid>              
    );
}

/**
 * 
 *  <Item style={{marginTop:"5px"}}>
                            <h4 style={{fontSize:"14px"}}>
                            Use IBM AI Fairness 360 to mitigate racial biases in pre-trained computer vision models.


                            </h4>
                        </Item>
 */