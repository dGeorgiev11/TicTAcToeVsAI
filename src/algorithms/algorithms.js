export function MiniMax(board, player, max, checkWin, CheckTie) {
  if (checkWin(player) === player) {
    return 1;
  }

  const opponent = player === "X" ? "O" : "X";

  if (checkWin(opponent) === opponent) {
    return -1;
  }

  if (!CheckTie()) {
    return 0;
  }
let bestScore;
 
  if(max===true){
    bestScore=-Infinity;
    for(let i = 0;i<9;i++){
      if(board[i]===""){
        board[i]=player;
        bestScore= Math.max(bestScore,MiniMax(board,opponent,false,checkWin,CheckTie))
        board[i]="";
      }
  }
 
}else{
  bestScore=-Infinity;
    for(let i = 0;i<9;i++){
      if(board[i]===""){
        board[i]=player;
        bestScore= Math.min(bestScore,MiniMax(board,opponent,true,checkWin,CheckTie))
        board[i]="";
      }}
}
return bestScore;
}

export function FindBest(board, player, max, checkWin, CheckTie) {
  let bestMove = 0;
  let bestScore = max ? -Infinity : Infinity;
  if(board[4]==="")return 4;

  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      
      board[i] = player;
      const score = MiniMax(board, player, !max, checkWin, CheckTie);
      board[i] = "";
      if (score>=bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
}



