import React, {useContext} from "react"
import Context from "../Context/contextApp"
import ContextBlockGame from "../Context/contextBlockGame"

const Resset = (props) => {
    const {arrCreate} = useContext(Context)
    const {
        setplayerTurn, 
        setfirstmove
    } = useContext(ContextBlockGame)

    const ressetGame = () => {
        props.setWinChecked(false)
        setplayerTurn(true)
        props.setCheckedDrawTurn(1)
        arrCreate()
        setfirstmove(true)
    }

    return (
        <div className="resset">
            <button 
            className="resset__button" 
            type="button" 
            onClick={ressetGame}
            >Resset</button>
        </div>
    )
}

export default Resset