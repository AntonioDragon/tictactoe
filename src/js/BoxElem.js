import React, {useContext} from "react"
import checkedMoveController from "./checkedMoveController"
import Context from "./context"


const BoxElem = (props) => {
    const {
        arrGame,
        modeGame
    } = useContext(Context)

    const movePlayerController = () => {
        if (arrGame[props.id1][props.id2] == "")
            if (modeGame) moveControll()
        else {
            if (checkedMoveController(props.id1, props.id2, arrGame, props.firstmove))
                moveControll()
        }
    }

    const moveControll = () => {
        if (!props.winChecked) {
            if (props.firstmove) props.setfirstmove(false)
            props.setplayerTurn(!props.playerTurn)
            props.addPlaterTurnArr(props.id1, props.id2)
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