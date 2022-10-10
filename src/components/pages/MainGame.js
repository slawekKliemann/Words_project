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
