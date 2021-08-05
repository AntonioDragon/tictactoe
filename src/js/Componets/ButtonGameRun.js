import React, {useContext} from "react"
import Context from "../Context/contextApp"

const ButtonGameRun = (props) => {
    const {
        setRunGame,
        arrCreate,
        modeGame
    } = useContext(Context)
    
    const notifErrModeGame = () => props.setErrModeGame("Specify the game mode")
    
    const startGame = () => {
        if (props.errModeGame == "") {
            setRunGame(true)
            arrCreate()
        } else notifErrModeGame()
    }

    return (
        <>
        <div className="block-start__error-message">{props.errModeGame}</div>
        <div className = "block-start__button">
            <button 
                className = "button-start" 
                type="button" 
                onClick = {() => startGame()}
            >Start Game</button>
        </div>
        </>
    )
}

export default ButtonGameRun