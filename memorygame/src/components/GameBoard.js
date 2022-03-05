import react, {useEffect, useState} from "react";
import CardArray from "./CardArray";
import Header from "./Header";

function GameBoard(){
    const [score, setScore] = useState(0);
    const [highscore, setHighScore] = useState(0);
    const [status, setStatus] = useState(false);
    const [win, setWin] = useState(false);
    const [clickedArray, setClickedArray] = useState([]);
    const updateScore = () =>
    {
        setScore(score + 1);
    }
    const updateHighScore = () =>
    {
        setHighScore(score + 1);
    }
    const gameLogic = (event) =>{
        if(clickedArray.includes(event.target))
        {
            setScore(0);
            setClickedArray([]);
        }
        else
        {
            setClickedArray([...clickedArray, event.target]);
            updateScore();
            if(score >= highscore)
            {
                updateHighScore();
            }
        }
    }
    useEffect(() =>
    {
        if(score === 8)
        {
            alert("You win!");
        }
    }, [score, highscore]);
    return (
        <div className="Main">
            <Header score={score} highscore={highscore}/>
            <CardArray score={score} highscore={highscore} gameLogic={gameLogic}/>
        </div>
    )
}

export default GameBoard;