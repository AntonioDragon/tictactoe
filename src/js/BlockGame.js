const React = require("react");
const { useState } = require("react");

const { BackMenu } = require("./BackMenu");
const { Matrix } = require("./Matrix");
const { Resset } = require("./Resset");
const { Result } = require("./Result");

const BlockGame= (props) => {
    const [winChecked, setWinChecked] = useState(false)
    const [playerTurn, setplayerTurn] = useState(true)
    const [firstmove, setfirstmove] = useState(true)
    
    return (
        <div className="block-game">
            <Result
                playerTurn ={playerTurn}
                winChecked ={winChecked}
            />
            <BackMenu
                setRunGame ={props.setRunGame}
                setmodeGame={props.setmodeGame}
            />
            <Resset
                setWinChecked={setWinChecked}
                setplayerTurn={setplayerTurn}
                ArrCreate = {props.ArrCreate}
                setfirstmove={setfirstmove}
            />
            <Matrix
                arrGame={props.arrGame}
                modeGame={props.modeGame}
                setArrGame={props.setArrGame}
                playerTurn = {playerTurn}
                setplayerTurn = {setplayerTurn}
                winChecked = {winChecked}
                setWinChecked = {setWinChecked}
                firstmove={firstmove}
                setfirstmove={setfirstmove}
            />
        </div>
    )
}

module.exports = {BlockGame}