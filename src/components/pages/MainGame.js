import React from "react";
import goodAnswer from '../../images/goodAnswer.png'
import badAnswer from '../../images/badAnswer.png'
import letsPlay from '../../images/letsPlay.png'

export function MainGame(){

    return(
        <main>MAIN GAME
            <img src={goodAnswer} alt=""/>
            <img src={badAnswer} alt=""/>
            <img src={letsPlay} alt=""/>
        </main>
    )
}
