import React, { useContext }  from "react"
import Context from "./context"

const BackMenu = () => {
    const {setmodeGame,setRunGame} = useContext(Context)

    const Menu = () =>{
        setRunGame(false)
        setmodeGame(undefined)
    }

    return (
        <div className="back-menu">
            <button className="back-menu__button " type="button" onClick={Menu}>Menu</button>
        </div>
    )
}
export default BackMenu