import React from "react";


export function BadAnswer({random, words}){

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
}
