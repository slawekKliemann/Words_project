import React, {useEffect, useState} from "react";
/*import goodAnswer from '../../images/goodAnswer.png'
import badAnswer from '../../images/badAnswer.png'*/
import letsPlay from '../../images/letsPlay.png'
const API = "http://localhost:3000";


function RandomQ() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [task, setTask] = useState([])

    const quest = task.map((item)=>{
        return item
    })
    const randomQuest = quest[Math.floor(Math.random()*quest.length)]

    useEffect(() => {
        fetch(`${API}/words`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTask(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>O NIE! Zapodziałem gdzieś swoje notatki. Wróć za chwilę! </div>;
    } else if (!isLoaded) {
        return <div>Szukam zadania dla Ciebie...</div>;
    } else {
        return (
            <>
                <h2>{randomQuest.description}</h2>
                <h3>Liczba liter w wyrazie: {randomQuest.answer.length}</h3>
                <Form prop={randomQuest.answer}/>
            </>
        );
    }
}

function Form(props){
    const [words, setWords] = useState('')

    if (props.prop.toLowerCase()===words.toLowerCase()){
        return(
            <div>GRATULACJE!</div>
        )
    }

    return(
        <form action="">
            <label>
                Tutaj wpisz odpowiedź
            <input type="text" value={words} onChange={e => setWords(e.target.value)} placeholder="WPISZ ODPOWIEDŹ"/>
            </label>
            <input type="submit" value="SPRAWDŹ" />
        </form>
    )

}

export function MainGame(){

    function random(){

    }
    return(
        <main className="mainGame">
            <div className="mainGame_character">
                <img className="mainGame_character-img" src={letsPlay} alt="Postać detektywa witająca w aplikacji"/>
            </div>
            <div className="mainGame_description">
                <RandomQ/>
                <button onClick={random}>LOSUJ</button>
            </div>
        </main>
    )
}
