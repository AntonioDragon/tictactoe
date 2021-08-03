const React = require("react");

const GameMode= (props) => {

    const setGameModeTrue = () =>{
        props.seterrModeGame("")
        props.setmodeGame(true)
    }

    const setGameModeFalse = () =>{
        props.seterrModeGame("")
        props.setmodeGame(false)
    }

    return (
        <div className="gamemode">
            <div className="radio-block">
                <input className="radio" type="radio" name="mycheck" onChange = {setGameModeTrue}/>
                <p className="gamemode__paragraph">Classic game</p>
            </div>  
            <div className="radio-block">
                <input className="radio" type="radio" name="mycheck" onChange = {setGameModeFalse}/>
                <p className="gamemode__paragraph">Modern game (50/50)</p>
            </div>  
        </div>
    )
}

module.exports = {GameMode}