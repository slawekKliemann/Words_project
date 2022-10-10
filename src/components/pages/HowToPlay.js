/*
import React from "react";
import howToPlay from '../../images/howToPlay.png'

export function HowToPlay(){

    return(
        <main>HOW TO PLAY
            <img src={howToPlay} alt="Postać detektywa wprowadzająca do gry"/>
        </main>
    )
}
*/

import React from "react";
import howToPlay from '../../images/howToPlay.png'

export function HowToPlay(){
    return(
        <main className="howToPlay">
            <div className="howToPlay_character">
                <img className="howToPlay_character-img" src={howToPlay} alt="Postać detektywa witająca w aplikacji"/>
            </div>
            <div className="howToPlay_description">
                <h2 className="howToPlay_description-header">Jak grać?</h2>
                <p className="howToPlay_description-paragraph">
                   Zabawa polega na dopasowaniu odpowiedniego słowa do zadanego pytania.
                    Kliknij w przycisk, a ja zajmę się losowaniem hasła.
                    Swoją odpowiedź wpisz w wyznaczonym miejscu.
                    Zadanie może być trudne, ale możesz liczyć na moją pomoc!
                </p>
            </div>
        </main>
    )
}
