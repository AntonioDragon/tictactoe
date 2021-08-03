const React = require("react");

const Result= (props) => {
    return (
        <div className="result">
            <h2 className="result__title">
            {!props.winChecked?`Player turn : ${props.playerTurn?"X":"O"}`:`Won : ${!props.playerTurn?"X":"O"}`}
            </h2>
        </div>
    )
}

module.exports = {Result}