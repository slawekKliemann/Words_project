import React, {useEffect, useState} from "react";
import {GoodAnswer} from "../game_components/GoodAnswer";
import {BadAnswer} from "../game_components/BadAnswer";


export function Form(props){
    const [words, setWords] = useState('');
    const [reply, setReply] = useState(null);

    useEffect(() => {
        props.setCorrect(reply);
        // eslint-disable-next-line
    }, [reply])

    function random(){
        window.location.reload();
    }

    function check(event){
        event.preventDefault()
        if (props.prop.toLowerCase()===words.toLowerCase()){
            setReply(true);
        } else {
            setReply(false);
        }
    }

    if (reply){
        return(
                <GoodAnswer random={random} words={words}/>
        )
    } else if (reply===false){
        return(
                <BadAnswer random={random} words={words}/>
        )
    }   return(
            <form>
                <h2>{props.question}</h2>
                <h3>Liczba liter w wyrazie: {props.prop.length}</h3>
                <label>
                    Tutaj wpisz odpowiedź
                    <input
                        type="text" value={words}
                        onChange={e => setWords(e.target.value)}
                        placeholder="ODPOWIEDŹ"
                    />
                </label>
                <input
                    type="submit"
                    value="SPRAWDŹ"
                    onClick={check}
                />
            </form>
        )
}
