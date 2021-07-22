###  Tic Tac Toe
Tic Tac Toe is a
simple game consisting of a 3x3 grid in which players take turns making their mark (cross or
circle) until either one player achieves a connected line of 3 marks or the board state
prevents either player from achieving a line of 3 marks which results in a draw.

Here are the improvements listed in order of increasing difficulty:
1. [X] Get selected square with user id (val, id) format.
2. [X] Initialise Board State when game start.
3. [X] When Game complete (Tie/Win) Game will automatically restart.
4. [X] When Someone Wins show popup message which player wins.
5. [X] If Game is tie the show message No one wins game tie.

###  Technical requirements
1. Node Js 15.9.0 with Type Script (TS).
2. React Js 17.0.2 with Type Script (TS).


### Structure

Detailed directory structure for both front-end and back-end.

    .
    │
    ├── backend                 # Contain All Back end Logic (Node Js)
    │   ├── node_modules          
    │   └── source         
    │     ├── controllers           #contain all controller that is required to run applications
    │     └── routes                # contains all routes of applications
    │ 
    └── frontend             # Contain All Front End Design and Patterns (React With Type Script)
        ├── node_modules         
        ├── public         # Public folder contain all public resources
        └── src             #src contains all UI of applications
          └── Components    #Contain all components



## Usage

```git
git clone git@github.com:webexpert4rv/Game-assisgnment_v2.git
#For Backend (Node Js)
cd my-app/backend
npm install 
npn run dev

#for Front End (React Js)
cd my-app/frontend
npm install 
npm start
```
