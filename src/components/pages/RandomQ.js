import React, {useEffect, useState} from "react";
import {Form} from "./Form";
const API = "https://api.npoint.io/8d88cebccf21413c4e1b";


export function RandomQ({setCorrect}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [task, setTask] = useState([]);

    const quest = task.map((item) => item);
    const randomQuest = quest[Math.floor(Math.random()*quest.length)];

    useEffect(() => {
        fetch(API)
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
    } else if (!isLoaded){
        return <div>Szukam zadania dla Ciebie...</div>;
    } else {
        return <Form
                prop={randomQuest.answer}
                setCorrect={setCorrect}
                question={randomQuest.description}
               />
    }
}
