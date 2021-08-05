import React, {useState} from "react"
import ContextBlockGame from "../Context/contextBlockGame"

import BackMenu from "./BackMenu"
import Matrix from "./Matrix"
import Resset from "./Resset"
import Result from "./Result"

const BlockGame = () => {
    const [winChecked, setWinChecked] = useState(false)
    const [drawChecked, setDrawChecked] = useState(false)
    const [playerTurn, setplayerTurn] = useState(true)
    const [checkedDrawTurn, setCheckedDrawTurn] = useState(1)
    const [firstmove, setfirstmove] = useState(true)
    
    return (
        <ContextBlockGame.Provider value={{
            playerTurn,
            setplayerTurn,
            winChecked,
            firstmove,
            setfirstmove
        }}> 
        <div className="block-game">
            <Result
                drawChecked={drawChecked}
            />
            <BackMenu/>
            <Resset
                setWinChecked={setWinChecked}
                setCheckedDrawTurn={setCheckedDrawTurn}
            />
            <Matrix
                setWinChecked={setWinChecked}
                checkedDrawTurn = {checkedDrawTurn}
                setCheckedDrawTurn = {setCheckedDrawTurn}
                setDrawChecked={setDrawChecked}
            />
        </div>
        </ContextBlockGame.Provider> 
    )
}

export default BlockGame