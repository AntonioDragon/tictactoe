import React, { useContext }  from "react"
import Context from "./contextApp"
import ContextBlockGame from "./contextBlockGame"

const Resset= (props) => {
    const {ArrCreate} = useContext(Context)
    const {
        setplayerTurn, 
        setfirstmove
    } = useContext(ContextBlockGame)

    const ressetGame = () =>{
        props.setWinChecked(false)
        setplayerTurn(true)
        props.setCheckedDrawTurn(1)
        ArrCreate()
        setfirstmove(true)
    }

    return (
        <div className="resset">
            <button className="resset__button " type="button" onClick={ressetGame}>Resset</button>
        </div>
    )
}

export default Resset