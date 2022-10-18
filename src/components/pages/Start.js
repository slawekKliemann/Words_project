import React from "react";
import startPerson from '../../images/startPerson.png';


export function Start(){

    return(
        <main className="start">
            <div className="start_character">
                <img
                    className="start_character-img"
                    src={startPerson}
                    alt="Postać detektywa witająca w aplikacji"
                />
            </div>
            <div className="start_description">
                <h2 className="start_description-header">Cześć!</h2>
                <p  className="start_description-paragraph">
                     Mam na imię <strong>Stefan</strong> i jestem detektywem.
                     Od wielu lat zajmuję się rozwiązywaniem zagadek słownych.
                     Niestety jest ich tak wiele, że sam już nie nadążam.
                     Jeżeli tak jak ja lubisz wyzwania to zapraszam Cię do wspólnej zabawy!
                </p>
            </div>
        </main>
    )
}
