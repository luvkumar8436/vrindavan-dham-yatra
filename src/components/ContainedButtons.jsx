import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './ContainedButtons.css'

export default function ContainedButtons(props) {
  return (
    <Stack className={props.class} >
      <Button style={{fontSize:'0.7rem'}} variant="contained" href="#contained-buttons">
        {props.text}
      </Button>
    </Stack>
  );
}