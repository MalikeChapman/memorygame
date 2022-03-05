import React, {useEffect, useState} from "react";
import Card from "./Card";
import duck from "./images/duck.png";
import idiot from "./images/idiot.png";
import mocking from "./images/mocking.png";
import patrick from "./images/patrick.png";
import item from "./images/PngItem_29120.png";
import spiffin from "./images/spiffin.png";
import wut from "./images/wut.png";
import yao from "./images/yao.png";

function CardArray(props)
{
    const {gameLogic, score, highscore} = props;
    let cardInfo = [
        {
            src: duck,
            name: "duck"
        },
        {
            src: idiot,
            name: "idiot"
        },
        {
            src: mocking,
            name: "mocking"
        },
        {
            src: patrick,
            name: "patrick"
        },
        {
            src: item,
            name: "item"
        },
        {
            src: spiffin,
            name: "spiffin"
        },
        {
            src: wut,
            name: "wut"
        },
        {
            src: yao,
            name: "yao"
        }
    ]
    const [cards, setCards] = useState(cardInfo);
    const shuffleArray = array => {
        
        for(let i = array.lengh - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log(array);
        setCards(array)
    };
    const shuffleArray1 = (array) => array.sort((a, b) => 0.5 - Math.random());

    useEffect(() => {
        const array = [...cards];
        shuffleArray1(array);
        setCards(array);
        
    },[score]);

    return (
        <div className="Cards-Container">
            {cards.map((card) => (
                <Card card={card} key={card.name} gameLogic={gameLogic}/>
            ))}
        </div>
    );

}

export default CardArray;