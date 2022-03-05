import React, {useEffect, useState} from "react";

function Card(props)
{
    const {card, gameLogic} = props;
    return (
        <div className="Card-Div" onClick={gameLogic}>
            <div className="img-container">
            <img
            src={card.src}
            alt={card}/>
            </div>
        </div>
    )
}
export default Card;