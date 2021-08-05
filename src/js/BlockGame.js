import React from "react"
import {useState}  from "react"

import BackMenu from "./BackMenu"
import Matrix from "./Matrix"
import Resset from "./Resset"
import Result from "./Result"

const BlockGame= (props) => {
    const [winChecked, setWinChecked] = useState(false)
    const [drawChecked, setDrawChecked] = useState(false)
    const [playerTurn, setplayerTurn] = useState(true)
    const [checkedDrawTurn, setCheckedDrawTurn] = useState(1)
    const [firstmove, setfirstmove] = useState(true)
    
    return (
        <div className="block-game">
            <Result
                playerTurn={playerTurn}
                winChecked={winChecked}
                drawChecked={drawChecked}
            />
            <BackMenu/>
            <Resset
                setWinChecked={setWinChecked}
                setplayerTurn={setplayerTurn}
                setfirstmove={setfirstmove}
                setCheckedDrawTurn={setCheckedDrawTurn}
            />
            <Matrix
                playerTurn={playerTurn}
                setplayerTurn={setplayerTurn}
                winChecked={winChecked}
                setWinChecked={setWinChecked}
                firstmove={firstmove}
                setfirstmove={setfirstmove}
                checkedDrawTurn = {checkedDrawTurn}
                setCheckedDrawTurn = {setCheckedDrawTurn}
                setDrawChecked={setDrawChecked}
            />
        </div>
    )
}

export default BlockGame