import React from 'react';
import "../App.css";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import  Typography  from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from '@mui/material';
const Nav = (props)=>{
  const handleLangChange = (event) =>{
    
      console.log(event.target.value)
      props.setMode(event.target.value);
    
  }
  const handleModeChange = (event) =>{
    
    console.log(event.target.value)
    props.setMode(event.target.value);
    
  }
  function handleShapeChange(event){
    props.setPlayer(event.target.value);
  }
  return(
  <div className="App-header">
      <h1>Morski shah</h1>
      <Button onClick={props.reset} variant='outlined'>Reset Game</Button>
    <div>

    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Language</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={props.lang}
        label={"Language"}
        onChange={handleLangChange}
        >
        
        <MenuItem value="BG">BG</MenuItem>
        <MenuItem value="EN">EN</MenuItem>
       
      </Select>
    </FormControl>
    </div>
    <div className="">
    </div>
        <ToggleButtonGroup
      color="primary"
      value={props.mode}
      exclusive
      onChange={handleModeChange}
      aria-label="Platform"
    >
      <ToggleButton value="PVP">PVP</ToggleButton>
      <ToggleButton value="PVC">PVC</ToggleButton>
      
    </ToggleButtonGroup>
    <ToggleButtonGroup
      color="primary"
      value={props.player}
      exclusive
      onChange={handleShapeChange}
      aria-label="Platform"
    >
      <ToggleButton value="O">O</ToggleButton>
      <ToggleButton value="X">X</ToggleButton>
      
    </ToggleButtonGroup>
    <Typography variant='h2'>
        {props.winner?`Winner is ${props.winner}`:`Next Player: ${props.player}`}
      </Typography>
  </div>)
}
export  default Nav;
