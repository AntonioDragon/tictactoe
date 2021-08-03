const React = require("react");

const BackMenu= (props) => {

    const Menu = () =>{
        props.setRunGame(false)
        props.setmodeGame(undefined)
    }

    return (
        <div className="back-menu">
            <button className="back-menu__button " type="button" onClick={Menu}>Menu</button>
        </div>
    )
}

module.exports = {BackMenu}