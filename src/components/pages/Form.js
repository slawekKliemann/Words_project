import React, {useEffect, useState} from "react";


export function Form(props){
    const [words, setWords] = useState('');
    const [reply, setReply] = useState(null);

    useEffect(() => {
        props.setCorrect(reply);
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

    if (reply) {
        return(
            <>
                <div className="form_answer">
                    GRATULACJE!
                    <strong> {words.toUpperCase()} </strong>
                    to poprawna odpowiedź.
                </div>
                <button
                    className="button"
                    onClick={random}>
                    Losuj
                </button>
            </>
        )
    } else if (reply===false){
        return(
            <>
                <div className="form_answer">
                    Niestety<strong> {words.toUpperCase()} </strong>
                    to nie jest poprawna odpowiedź,
                    ale nie martw się, to zadanie było trudne.
                    Spróbuj jeszcze raz!
                </div>
                <button
                    className="button"
                    onClick={random}>
                    Losuj
                </button>
            </>
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
