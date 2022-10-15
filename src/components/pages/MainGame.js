import React, {useEffect, useState} from "react";
import {RandomQ} from "./RandomQ";
import goodAnswer from '../../images/goodAnswer.png';
import badAnswer from '../../images/badAnswer.png';
import letsPlay from '../../images/letsPlay.png';


export function MainGame(){
    const [image, setImage] = useState(letsPlay);
    const [correct, setCorrect] = useState(null);

    useEffect(() => {
        if (correct === null) {
            setImage(letsPlay);
        } else if (correct) {
            setImage(goodAnswer);
        } else {
            setImage(badAnswer);
        }
    }, [correct])

    return(
        <main className="mainGame">
            <div className="mainGame_character">
                <img
                    className="mainGame_character-img"
                    src={image} alt="Postać detektywa"
                />
            </div>
            <div className="mainGame_description">
                <RandomQ setCorrect={setCorrect}/>
            </div>
        </main>
    )
}
