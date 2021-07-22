import './App.css';
import { useState, useEffect } from 'react';
import Square from './Components/Square';
import axios from 'axios';
function App() {
  const [board,setBoard]=useState(["","","","","","","","",""]);
   const [player, setPlayer] = useState("X");
const [result, setResult] = useState({winner: "none", state: "none"});

//Initialize  board
  useEffect(()=>{
    const postData = { board: board };
    //send board user states to backend and get response. 
        axios.post("http://localhost:6060/updateGame", postData)
            .then(response => {
              //check result from backend and also check total filled square.
              if(response.data.data.tieOrWin === 1 && board.filter(Boolean).length === 9){
                //if Game is Tie
                  setResult({ winner: "No One", state: "Tie" });
                  alert(`Its Tie`);
                  setBoard(["", "", "", "", "", "", "", "", ""]);
                  setPlayer("X");
                
              }
              else if(response.data.data.tieOrWin === 0){
                if(response.data.data.winner === 'O'){
                  //If Player O wins. 
                  setResult({ winner: "O", state: "Won" });
                   alert(`O Won`);
                }
                else if(response.data.data.winner === 'X'){
                //If Player X wins.
                setResult({ winner: "X", state: "Won" });
                alert(`X Won`);
              }
              //Reset Board State agian after one game. (Restart Game)
             setBoard(["", "", "", "", "", "", "", "", ""]);
             setPlayer("X");
            }
      }).catch(error => { 
        alert('Something Went Wrong!! Kindly Try Again');
      
      });
  },[board]);

//Get Details of choosen Square return user name and square value.
const chooseSquare = (square:any) =>{
  setBoard(board.map((val, idx) =>{
    if(idx === square && val === ""){
      if(player === "X"){
          setPlayer("O");
        }
        else{
          setPlayer("X");
        }
    return player;
    }
    return val;
    }));
};


return (
    <div className="App">
      <div className="board">
      <div className="row">
      <Square val = {board[0]} chooseSquare={() => {chooseSquare(0)}} />
      <Square val = {board[1]} chooseSquare={() => {chooseSquare(1)}} />
      <Square val = {board[2]} chooseSquare={() => {chooseSquare(2)}} />
      </div>  
      <div className="row">
      <Square val = {board[3]} chooseSquare={() => {chooseSquare(3)}} />
      <Square val = {board[4]} chooseSquare={() => {chooseSquare(4)}} />
      <Square val = {board[5]} chooseSquare={() => {chooseSquare(5)}} />
      </div>  
      <div className="row">
      <Square val = {board[6]} chooseSquare={() => {chooseSquare(6)}} />
      <Square val = {board[7]} chooseSquare={() => {chooseSquare(7)}} />
      <Square val = {board[8]} chooseSquare={() => {chooseSquare(8)}} />
      </div>    
      </div>  
    </div>
  );
}

export default App;
