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
    const [reply, setReply] = useState(null)

    function random(){
        window.location.reload();
    }

    function check(event){
        event.preventDefault()
        if (props.prop.toLowerCase()===words.toLowerCase()){
            setReply(true)
        }else{
            setReply(false)
        }
    }

   if (reply){
       return(
           <>
             <div>GRATULACJE! <strong>{words.toUpperCase()}</strong> to poprawna odpowiedź</div>
             <button onClick={random}>Losuj</button>
           </>
       )
   }if (reply === false){
       return(
           <>
             <div>Niestety nie. Prawidłowa odpowiedź to <strong>{props.prop.toUpperCase()}</strong> ale nie martw się, to zadanie było trudne</div>
             <button onClick={random}>Losuj</button>
           </>
       )
    }

    return(
        <form>
            <label>
                Tutaj wpisz odpowiedź
                <input type="text" value={words} onChange={e => setWords(e.target.value)} placeholder="WPISZ ODPOWIEDŹ"/>
            </label>
            <input type="submit" value="SPRAWDŹ" onClick={check}/>
        </form>
    )

}

export function MainGame(){

    return(
        <main className="mainGame">
            <div className="mainGame_character">
                <img className="mainGame_character-img" src={letsPlay} alt="Postać detektywa witająca w aplikacji"/>
            </div>
            <div className="mainGame_description">
                <RandomQ/>
            </div>
        </main>
    )
}
