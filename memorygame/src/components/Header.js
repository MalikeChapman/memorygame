import React, {useEffect, useState} from "react";

function Header(props){
const {score, highscore} = props;

return (
    <div className="Header-Container">
        <div className="Title-Container">
            <h1 className="Header-Title">Meme-Generator!!</h1>
        </div>
        <div className="Rules-Container">
            <h3 className="Rules-Title">Rules!!</h3>
            <ul className="Rules-UL">
                <li className="Rules-LI">Click on any meme to start</li>
                <li className="Rules-LI">Only click on each meme once or its Game Over</li>
                <li className="Rules-LI">Once all memes have been clicked, You Win!</li>
            </ul>
        </div>
        <div className="Score-Container">
            <h3 className="Rules-Title">Score</h3>
            <ul className="Rules-UL">
                <li className="Rules-LI">Score: {score}</li>
                <li className="Rules-LI">HighScore: {highscore}</li>
            </ul>
        </div>
    </div>
)
}

export default Header;