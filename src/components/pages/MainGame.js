/*
import React, {useState} from "react";
/!*import goodAnswer from '../../images/goodAnswer.png'
import badAnswer from '../../images/badAnswer.png'*!/
import letsPlay from '../../images/letsPlay.png'
const API = "http://localhost:3000";


fetch(`${API}/words`)
    .then(response => response.json())
        .then(data =>{
            // console.log(data)
            const quest = data.map((item)=>{
                return item
            })

            const randomQuest = quest[Math.floor(Math.random()*quest.length)]
            console.log(randomQuest)
            console.log(randomQuest.description)
            console.log(randomQuest.answer)
            console.log(randomQuest.answer.length)
            console.log(randomQuest.id)

        })

    .catch(error => {
        console.log(error);
    });



export function MainGame(){
    const [words, setWords] = useState('')

    function handleCheck(event){
        event.preventDefault()
        console.log(words)
    }

    return(
        <main className="mainGame">
            <div className="mainGame_character">
                <img className="mainGame_character-img" src={letsPlay} alt="Postać detektywa witająca w aplikacji"/>
            </div>
            <div className="mainGame_description">
                <h2 className="mainGame_description-header">TUTAJ BĘDZIE PYTANIE</h2>
                <h3 className="mainGame_description-header">TUTAJ BĘDZIE ILOŚĆ LITER W WYRAZIE</h3>
                <input type="text" value={words} onChange={e => setWords(e.target.value)} placeholder="WPISZ ODPOWIEDŹ"/>
                <button>LOSUJ</button>
                <button onClick={handleCheck}>SPRAWDŹ</button>
            </div>
        </main>
    )
}
*/
import React, {useState} from "react";
/*import goodAnswer from '../../images/goodAnswer.png'
import badAnswer from '../../images/badAnswer.png'*/
import letsPlay from '../../images/letsPlay.png'
const API = "http://localhost:3000";


fetch(`${API}/words`)
    .then(response => response.json())
    .then(data =>{
        // console.log(data)
        const quest = data.map((item)=>{
            return item
        })

        const randomQuest = quest[Math.floor(Math.random()*quest.length)]
        console.log(randomQuest)
        console.log(randomQuest.description)
        console.log(randomQuest.answer)
        console.log(randomQuest.answer.length)
        console.log(randomQuest.id)

    })

    .catch(error => {
        console.log(error);
    });



export function MainGame(){
    const [words, setWords] = useState('')

    function handleCheck(event){
        event.preventDefault()
        console.log(words)
    }

    return(
        <main className="mainGame">
            <div className="mainGame_character">
                <img className="mainGame_character-img" src={letsPlay} alt="Postać detektywa witająca w aplikacji"/>
            </div>
            <div className="mainGame_description">
                <h2 className="mainGame_description-header">TUTAJ BĘDZIE PYTANIE</h2>
                <h3 className="mainGame_description-header">TUTAJ BĘDZIE ILOŚĆ LITER W WYRAZIE</h3>
                <input type="text" value={words} onChange={e => setWords(e.target.value)} placeholder="WPISZ ODPOWIEDŹ"/>
                <button>LOSUJ</button>
                <button onClick={handleCheck}>SPRAWDŹ</button>
            </div>
        </main>
    )
}
