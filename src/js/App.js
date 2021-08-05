import "normalize.css"
import "../scss/style.scss"

import React, {useState} from "react"
import ReactDOM from "react-dom"
import Context from "./context"

import BlockGame from "./BlockGame"
import ButtonGameRun from "./ButtonGameRun"
import GameMode from "./GameMode"
import Header from "./Header"


const App = () => {
    const [runGame, setRunGame] = useState(false)
    const [modeGame, setmodeGame] = useState()
    const [arrGame, setArrGame] = useState([])
    const [errModeGame, setErrModeGame] = useState("")

    const ArrCreate = () => {
        let arr = [];
        let lengthArr;
        if (modeGame) lengthArr = 3
        else lengthArr = 50
        for (let i = 0; i < lengthArr; i++)
            arr.push(new Array())
        for (let i = 0; i < lengthArr; i++)
            for (let j = 0; j < lengthArr; j++)
                arr[i].push(new Array(""))
        setArrGame(arr)
    }

    return (
        <>
        <Context.Provider value={{
            modeGame,
            setmodeGame,
            arrGame,
            setArrGame,
            ArrCreate,
            setRunGame
        }}>
        <Header/>
        {
        runGame ? <BlockGame/> 
            : (
                <div className = "block-start">
                <ButtonGameRun
                    ArrCreate ={ArrCreate}
                    errModeGame={errModeGame}
                    setErrModeGame={setErrModeGame}
                />
                <GameMode
                    setErrModeGame={setErrModeGame}
                />
                </div>
            )
        }
        </Context.Provider>     
        </>
    )
}

ReactDOM.render( < App / > , document.querySelector(".root"))