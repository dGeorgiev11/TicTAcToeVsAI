import React from 'react';
import './board.css'
import { FindBest, MiniMax } from '../../algorithms/algorithms';

export default function Board(props) {
  const  board = [...props.board];
  
  
  const HandleClick=async (index)=>{
    
    
    props.setIngame("yes")
    if(board[index]!==''||CheckWin(props.player)!==null)return;
    board[index]=props.player;
    props.setBoard([...board]);
    if(CheckWin(props.player)!==null) {
      props.setWinner(props.player)
      return;
    }
    if(CheckTie()===false){
      props.setWinner("tie");
      alert("It's a tie!");
    }
   
    if(props.mode==="PVC")
    setTimeout(()=>{
      
        
      if(props.mode==="PVC"){
        let x =FindBest(board,props.player,true,CheckWin,CheckTie)
        console.log(x);
        MakeMove(x);
      }else{
        CP();
      }
        
        
        
        
    },1000)
    
    
  }
  function CP(){
    
    props.player==="O" ? props.setPlayer("X"):props.setPlayer("O");
    
    
  }
  function MakeMove(index){
    
    if(board[index]!==''||CheckWin(props.player)!==null)return;
    board[index]=props.player=="O"? "X":"O";
    props.setBoard([...board]);
    if(CheckWin(props.player)!==null) {
      props.setWinner(props.player==="O"? "X":"O")
      return;
    }
    if(CheckTie()===false){
      props.setWinner("tie");
      alert("It's a tie!");
    }
    
  }
  function CheckWin(player){
    if((board[0]===board[1]&&board[0]===board[2])&&board[0]!=='')return player;
    if((board[3]===board[4]&&board[3]===board[5])&&board[3]!=='')return player;
    if((board[6]===board[7]&&board[6]===board[8])&&board[6]!=='')return player;
    if((board[0]===board[3]&&board[0]===board[6])&&board[0]!=='')return player;
    if((board[1]===board[4]&&board[1]===board[7])&&board[1]!=='')return player;
    if((board[2]===board[5]&&board[2]===board[8])&&board[2]!=='')return player;
    if((board[0]===board[4]&&board[0]===board[8])&&board[0]!=='')return player;
    if((board[6]===board[4]&&board[6]===board[2])&&board[6]!=='')return player;
    return null;
  }
  function CheckTie(){
    return board.includes("");
  }
  return(
    <>
    
      <div className="board">
        {board.map((pl,index)=>{
          
        return <div key={index} className="tile" onClick={()=>{HandleClick(index);
          
        }}>{pl}</div>
        })}
      </div>
      

    
    </>
  )
}
