import "normalize.css"
import "../scss/style.scss"

import React, {useState} from "react"
import ReactDOM from "react-dom"
import Context from "./Context/contextApp"

import BlockGame from "./Componets/BlockGame"
import ButtonGameRun from "./Componets/ButtonGameRun"
import GameMode from "./Componets/GameMode"
import Header from "./Componets/Header"


const App = () => {
    const [runGame, setRunGame] = useState(false)
    const [modeGame, setmodeGame] = useState()
    const [arrGame, setArrGame] = useState([])
    const [errModeGame, setErrModeGame] = useState("")

    const arrCreate = () => {
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
            arrCreate,
            setRunGame
        }}>
        <Header/>
        {
        runGame ? <BlockGame/> 
            : (
                <div className = "block-start">
                <ButtonGameRun
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

ReactDOM.render(<App/>, document.querySelector(".root"))