import React, {useContext} from "react"
import checkedMoveController from "../Helpers/checkedMoveController"
import Context from "../Context/contextApp"
import ContextBlockGame from "../Context/contextBlockGame"


const BoxElem = (props) => {
    const {
        arrGame,
        modeGame,
    } = useContext(Context)
    const {
        playerTurn,
        setplayerTurn,
        winChecked,
        firstmove,
        setfirstmove
    } = useContext(ContextBlockGame)

    const movePlayerController = () => {
        if (arrGame[props.id1][props.id2] == "")
            if (modeGame) moveControll()
        else {
            if (checkedMoveController(props.id1, props.id2, arrGame, firstmove))
                moveControll()
        }
    }

    const moveControll = () => {
        if (!winChecked) {
            if (firstmove) setfirstmove(false)
            setplayerTurn(!playerTurn)
            props.addPlaterTurnArr(props.id1, props.id2)
            console.log(playerTurn)
        }
    }

    return (
        <div className={modeGame ? "box-classic" : "box-modern"} 
            onClick={()=>movePlayerController()}>
            {arrGame[props.id1][props.id2]}
        </div>
    )
}

export default BoxElem