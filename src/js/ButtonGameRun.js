import React, {useContext} from "react"
import Context from "./contextApp"

const ButtonGameRun = (props) => {
    const {
        setRunGame,
        ArrCreate,
        modeGame
    } = useContext(Context)

    const StartGame = () => {
        if (modeGame != undefined) {
            setRunGame(true)
            ArrCreate()
        } else notifErrModeGame()
    }

    const notifErrModeGame = () => props.setErrModeGame("Specify the game mode")

    return (
        <>
            <div className="block-start__error-message">{props.errModeGame}</div>
            <div className = "block-start__button">
                <button className = "button-start" type="button" onClick = {() => StartGame()}>Start Game</button>
            </div>
        </>
    )
}

export default ButtonGameRun