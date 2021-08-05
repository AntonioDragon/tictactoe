import React, { useContext }  from "react"
import Context from "./context"

const Resset= (props) => {
    const {ArrCreate} = useContext(Context)

    const ressetGame = () =>{
        props.setWinChecked(false)
        props.setplayerTurn(true)
        props.setCheckedDrawTurn(1)
        ArrCreate()
        props.setfirstmove(true)
    }

    return (
        <div className="resset">
            <button className="resset__button " type="button" onClick={ressetGame}>Resset</button>
        </div>
    )
}

export default Resset