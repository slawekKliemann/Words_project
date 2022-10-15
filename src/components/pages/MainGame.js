import React, {useEffect, useState} from "react";
import goodAnswer from '../../images/goodAnswer.png';
import badAnswer from '../../images/badAnswer.png';
import letsPlay from '../../images/letsPlay.png';
const API = "http://localhost:3000";


function RandomQ({setCorrect}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [task, setTask] = useState([]);

    const quest = task.map((item) => item);
    const randomQuest = quest[Math.floor(Math.random()*quest.length)];

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
            );
    }, []);
    if (error) {
        return <div>O NIE! Zapodziałem gdzieś swoje notatki. Wróć za chwilę!</div>;
    } else if (!isLoaded) {
        return <div>Szukam zadania dla Ciebie...</div>;
    } else {
        return <Form
                    prop={randomQuest.answer}
                    setCorrect={setCorrect}
                    question={randomQuest.description}
                />
    }
}

function Form(props){
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
        } else{
            setReply(false);
        }
    }

    if (reply){
        return(
            <>
                <div>
                    GRATULACJE!
                    <strong> {words.toUpperCase()} </strong>
                    to poprawna odpowiedź.
                </div>
                <button onClick={random}>Losuj</button>
            </>
        )
    } else if (reply === false){
        return(
            <>
                <div>
                    Niestety<strong> {words.toUpperCase()} </strong>
                    to nie jest dobra odpowiedź,
                    ale nie martw się, to zadanie było trudne.
                    Spróbuj jeszcze raz!
                </div>
                <button onClick={random}>Losuj</button>
            </>
        )
    } return(
        <form>
            <h2>{props.question}</h2>
            <h3>Liczba liter w wyrazie: {props.prop.length}</h3>
            <label>
                Tutaj wpisz odpowiedź
                <input
                    type="text" value={words}
                    onChange={e => setWords(e.target.value)}
                    placeholder="WPISZ ODPOWIEDŹ"
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

