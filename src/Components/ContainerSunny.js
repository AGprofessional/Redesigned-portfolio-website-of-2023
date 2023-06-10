import { Container } from '@mui/material';
import * as React from 'react';


export default function ContainerSunny({title}){

    return(
        <Container maxWidth="xl" style={{backgroundColor:"yellow"}}>
            <h1>
                {title}
            </h1>
            </Container>
    );
}