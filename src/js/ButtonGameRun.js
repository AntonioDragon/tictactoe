const React = require("react");

const ButtonGameRun= (props) => {
    
    StartGame = ()=>{
        if(props.modeGame != undefined){
            props.setRunGame({game : !props.runGame.game}) 
            props.modeGame ? props.arrCreateClassic() : props.arrCreateModern()
        } else notifErrModeGame()
    }

    notifErrModeGame = () => props.seterrModeGame("Specify the game mode")

    return (
        <>
        <div className="block-start__error-message">{props.errModeGame}</div>
        <div className = "block-start__button">
            <button className = "button-start" type="button" onClick = {() => StartGame()}>Start Game</button>
        </div>
        </>
    )
}

module.exports = {ButtonGameRun}