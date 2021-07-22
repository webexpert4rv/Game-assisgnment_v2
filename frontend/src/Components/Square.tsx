import "../App.css";

type SquareProps = {
    val: any,
    chooseSquare: any
  }


const Square = ({val, chooseSquare}: SquareProps) =>{
  return (
        <div className="square" onClick={chooseSquare}>
            {val}
        </div>
      );
  }
export default Square;
