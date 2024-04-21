import logo from './logo.svg';
import './App.css';
import Nav from "./components/header"

import { useState,useEffect } from 'react';
import Board from './components/board/board';
import { Typography } from '@mui/material';
function App() {
  const [lang,setLang] = useState(localStorage.getItem("lang"));
  const [mode,setMode] = useState(localStorage.getItem("mode"));
  const [board,setBoard] = useState(['','','','','','','','','']);
  const [winner,setWinner] =useState(null);
  const[player,setPlayer] = useState("O");
  const [ingame,setIngame]= useState("No")

  function init(){
    setBoard(['','','','','','','','',''])
    setWinner(null)
    setIngame("no");
    console.log(board)
  }
  useEffect(()=>{
    localStorage.setItem("lang",lang);
  },[lang])
  useEffect(()=>{
    localStorage.setItem("mode",mode);
  },[mode])
  
  useEffect(()=>{
    console.log(board);
  },[board])
  return (
    <div className="App">
      <Nav 
      lang={lang}
      mode={mode}
      setLang={setLang}
      setMode={setMode}
      reset={init}
      winner={winner}
      player={player}
      setPlayer= {setPlayer}
      ingame={ingame}/>
      <Board board={board}
      setBoard={setBoard}
      player={player}
      setPlayer={setPlayer}
      winner={winner}
      setWinner={setWinner}
      mode={mode}
      setIngame={setIngame}/>
      
    </div>
  );
}

export default App;
