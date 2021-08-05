import React, {useContext}  from "react"
import Context from "./context"

const GameMode= (props) => {
    const {setmodeGame} = useContext(Context)

    const setGameModeTrue = () =>{
        
        props.setErrModeGame("")
        setmodeGame(true)
    }

    const setGameModeFalse = () =>{
        props.setErrModeGame("")
        setmodeGame(false)
    }

    return (
        <div className="gamemode">
            <div className="radio-block">
                <label className="radio-block__label" for="radioClassic"></label>
                <input className="radio-block__radio" type="radio" name="mycheck" id="radioClassic" onChange={setGameModeTrue}/>
                <p className="gamemode__paragraph">Classic game</p>
            </div>  
            <div className="radio-block">
                <label className="radio-block__label" for="radioClassic"></label>
                <input className="radio-block__radio" type="radio" name="mycheck" id="radioModern" onChange={setGameModeFalse}/>
                <p className="gamemode__paragraph">Modern game (50/50)</p>
            </div>  
        </div>
    )
}

export default GameMode