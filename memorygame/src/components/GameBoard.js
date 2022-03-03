import react, {useEffect, useState} from "react";
import Header from "./Header";

function GameBoard(){
    const [score, setScore] = useState(0);
    const [highscore, setHighScore] = useState(0);
    return (
        <div className="Main">
            <Header score={score} highscore={highscore}/>
        </div>
    )
}

export default GameBoard;