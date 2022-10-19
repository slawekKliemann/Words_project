import React from "react";


export function GoodAnswer({random, words}){

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
}
