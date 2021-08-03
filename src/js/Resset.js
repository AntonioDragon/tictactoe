const React = require("react");

const Resset= (props) => {

    const ressetGame = () =>{
        props.setWinChecked(false)
        props.setplayerTurn(true)
        props.ArrCreate()
        props.setfirstmove(true)
    }

    return (
        <div className="resset">
            <button className="resset__button " type="button" onClick={ressetGame}>Resset</button>
        </div>
    )
}

module.exports = {Resset}