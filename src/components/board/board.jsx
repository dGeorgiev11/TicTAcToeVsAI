import React from 'react';
import './board.css'
import { Typography } from '@mui/material';

export default function Board(props) {
  const  board = [...props.board];
  console.log(board);
  const HandleClick=(index)=>{
    if(CheckWin()===true) {
      props.setWinner(props.player)
      return;
    }
    if(board[index]!=='')return;
    board[index]=props.player;
    props.setBoard([...board]);
    props.player==="O" ? props.setPlayer("X"):props.setPlayer("O");
  }
  function CheckWin(){
    if((board[0]===board[1]&&board[0]===board[2])&&board[0]!=='')return true;
    if((board[3]===board[4]&&board[3]===board[5])&&board[3]!=='')return true;
    if((board[6]===board[7]&&board[6]===board[8])&&board[6]!=='')return true;
    if((board[0]===board[3]&&board[0]===board[6])&&board[0]!=='')return true;
    if((board[1]===board[4]&&board[1]===board[7])&&board[1]!=='')return true;
    if((board[2]===board[5]&&board[2]===board[8])&&board[2]!=='')return true;
    if((board[0]===board[4]&&board[0]===board[8])&&board[0]!=='')return true;
    if((board[6]===board[4]&&board[2]===board[2])&&board[6]!=='')return true;
    return false;
  }
  return(
    <>
    
      <div className="board">
        {board.map((pl,index)=>{
          console.log(index);
        return <div key={index} className="tile" onClick={()=>{HandleClick(index)}}>{pl}</div>
        })}
      </div>
      

    
    </>
  )
}
