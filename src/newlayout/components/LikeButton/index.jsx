import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import IconButton from '@mui/material/IconButton';

export default function(){
    const [count, setCount]  =useState(1);
    return(
        <>
        <div className="likebutton">
        <Tooltip title="Like">
          <IconButton
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
           <Badge color="secondary"style={{color:"#a2e55"}} badgeContent={count}  anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}>
          <ThumbUpIcon style={{color:"#ca2e55"}}fontSize="large" />
        </Badge>
          </IconButton>
          </Tooltip>
        </div>
        
        </>
    )
}


         
//red: ca2e55
//green: 16db93

