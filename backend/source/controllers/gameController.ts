import { Request, Response, NextFunction } from 'express';


//function that is responsible for game.
const updateGameStatus = async (req: Request, res: Response, next: NextFunction) => {
  //Required Winning combinations
  let winCombinations = [  
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],
        [2,5,8],[0,4,8],[2,4,6]
    ]; 

    //Get user board combinations
    let board = req.body.board;
    let winningCombinationIndex = 0;
    let winner = null;
    //compare both Winning combinations with user board combinations
    while (winningCombinationIndex < winCombinations.length && !winner) {

      const boardPositionsToCheck = winCombinations[winningCombinationIndex];
      
      const boardValuesToCkeck = boardPositionsToCheck.map(
        (index) => board[index]
      );
      const checkingValue = boardValuesToCkeck[0];
      
      const isFinished = boardValuesToCkeck.every(
        (value) => value === checkingValue && checkingValue
      );
      winner = !isFinished ? null : checkingValue;
      winningCombinationIndex++;
    }


    //Return data that can defined wether user is winner or game is tie.
    // If tieOrWin = 1 (game tie)
    // If tieOrWin = 0 (game Win)
    // Winner Param return name of winner X or O
    // There is also third param for tieOrwin: 3 (which mean nothing happen user are playing game)


    var data={};
    if(winner !== null){
      //winner
             data={
            tieOrWin:0,
            winner:winner
            }
    }
    //check winner null status also check total filled board square 
    else if(winner === null && board.filter(Boolean).length === 9){
        //tie
            data={
            tieOrWin:1,
            winner:'No One'
            }

    
    }
  return res.status(200).json({data});

};
export default { updateGameStatus };
