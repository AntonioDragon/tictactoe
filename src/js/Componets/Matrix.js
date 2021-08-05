import React, {useContext} from "react"
import Context from "../Context/contextApp"
import ContextBlockGame from "../Context/contextBlockGame"

import {
    checkedWinClassic,
    checkedWinModern
} from "../Helpers/checkedPlayerWin"
import BoxElem from "./BoxElem"

const Matrix = (props) => {
    const {
        arrGame,
        setArrGame,
        modeGame
    } = useContext(Context)
    const {
        playerTurn
    } = useContext(ContextBlockGame)

    const addPlaterTurnArr = (id1, id2) => {
        let arr = arrGame,
            checkwin = false
        arr[id1][id2] = playerTurn ? "X" : "O"
        modeGame ? checkwin = checkedWinClassic(playerTurn ? "X" : "O", arr) :
            checkwin = checkedWinModern(id1, id2, playerTurn ? "X" : "O", arr)
        props.setWinChecked(checkwin)
        setArrGame(arr)
        props.setCheckedDrawTurn(props.checkedDrawTurn + 1)
        if (!checkwin)
            if (modeGame) {if (props.checkedDrawTurn == 9) drawChecked()}
            else if (props.checkedDrawTurn == 250) drawChecked()
    }

    const drawChecked = () => {
        props.setWinChecked(true)
        props.setDrawChecked(true)
    }

    return (
        <div className="matrix">
            <div className={modeGame ? "area-classic" : "area-modern"}>
            {
                arrGame.map((element,i) => 
                    element.map((elem,j)=>
                        <BoxElem 
                            key={i+j}
                            id1={i}
                            id2={j}
                            addPlaterTurnArr={addPlaterTurnArr}
                        />
                    )
                )
            }
            </div>
        </div>
    )
}

export default Matrix