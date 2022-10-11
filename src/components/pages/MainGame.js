/*
import React from "react";
import goodAnswer from '../../images/goodAnswer.png'
import badAnswer from '../../images/badAnswer.png'
import letsPlay from '../../images/letsPlay.png'

export function MainGame(){

    return(
        <main>MAIN GAME
            <img src={goodAnswer} alt="Postać detektywa - dobra odpowiedź"/>
            <img src={badAnswer} alt="Postać detektywa - zła odpowiedź"/>
            <img src={letsPlay} alt="Postać detektywa - zadająca pytanie"/>
        </main>
    )
}
*/
import React, {useState} from "react";
/*import goodAnswer from '../../images/goodAnswer.png'
import badAnswer from '../../images/badAnswer.png'*/
import letsPlay from '../../images/letsPlay.png'


export function MainGame(){
    const [letter, setLetter] = useState()

    return(
        <main className="mainGame">
            <div className="mainGame_character">
                <img className="mainGame_character-img" src={letsPlay} alt="Postać detektywa witająca w aplikacji"/>
            </div>
            <div className="mainGame_description">
                <h2 className="mainGame_description-header">TUTAJ BĘDZIE PYTANIE</h2>
                <input type="text" placeholder="WPISZ ODPOWIEDŹ"/>
                <button>LOSUJ</button>
                <button>SPRAWDŹ</button>
            </div>
        </main>
    )
}
