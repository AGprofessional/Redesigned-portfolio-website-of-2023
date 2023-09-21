import React, { useState } from 'react';
import { Radio, FormControlLabel, RadioGroup, FormControl } from '@mui/material';
import Accordian from '../../AccordianEngineering';
import {  ThemeProvider, createTheme } from '@mui/material';
import AccordianEngineering from '../../AccordianEngineering';
import AccordianMBA from '../../AccordianMBA';

function RadioButton() {
  const [selectedValue, setSelectedValue] = useState('Engineering');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

   // Create a custom theme with updated colors
   const theme = createTheme({
    palette: {
      primary: {
        main: '#ca2e55', // Change the color of the radio button
      },
      text: {
        primary: '#ca2e55', // Change the color of the label text
      },
    },
  });

  const customRadioStyles = {
    color: '#ca2e55', // Change the color of the radio button
    transition: 'color 0.2s', // Increase the speed of the color change
    marginLeft: "10px",

  };

  const customLabelStyles = {
    color: '#f3c77b',
  };
  return (
    <>
    <ThemeProvider theme={theme}>
        <div id="radiobutton-group">
        <FormControl component="fieldset">
        
        <RadioGroup id="ind-radios"
            aria-label="gender"
            name="gender"
            value={selectedValue}
            onChange={handleChange}
            
        >
            <FormControlLabel
            value="Engineering"
            control={<Radio sx={customRadioStyles}  />}
            label={<span style={customLabelStyles}>Engineering</span>
  }/>
            <FormControlLabel
            value="MBA"
            control={<Radio sx={customRadioStyles}  />}
            label={<span style={customLabelStyles}>MBA</span>
        }/>


        </RadioGroup>
        </FormControl>

        </div>
    </ThemeProvider>

<h1 id="portfolio" style={{color:"#16db93"}}>
{ `${selectedValue}`}
      
</h1>
<h1 id="portfolio" style={{color: "#16db93"}}>
  Portfolio
</h1>

{(selectedValue=="Engineering")? <AccordianEngineering />: <AccordianMBA />}


</>
  );
}

export default RadioButton;


{/*<Switch
            checked={isSwitchOn}
            onChange={handleSwitchToggle}
            color="primary"
            name="toggleSwitch"
            
            inputProps={{ 'aria-label': 'Toggle switch' }}
          />              */}