const React = require("react");

const BoxElem = (props) => {

    const movePlayerController = () => {
        if (props.arrGame[props.id1][props.id2] == "")
            if (props.modeGame) moveControll()
        else {
                if(props.id1 + 1 < 50)if(props.arrGame[props.id1 + 1][props.id2] != "") moveControll() 
                if(props.id1 - 1 >=0)if(props.arrGame[props.id1 - 1][props.id2] != "") moveControll()
                if(props.id2 + 1 < 50)if(props.arrGame[props.id1][props.id2 + 1] != "") moveControll()
                if(props.id2 - 1 >=0)if(props.arrGame[props.id1][props.id2 - 1] != "") moveControll()
                if(props.id1 + 1 <50 && props.id2 + 1 <50)if(props.arrGame[props.id1 + 1][props.id2 + 1] != "") moveControll()
                if(props.id1 + 1 <50 && props.id2 - 1 >=0)if(props.arrGame[props.id1 + 1][props.id2 - 1] != "") moveControll()
                if(props.id1 - 1 >=0 && props.id2 - 1 >=0)if(props.arrGame[props.id1 - 1][props.id2 - 1] != "") moveControll()
                if(props.id1 - 1 >=0 && props.id2 + 1 <50)if(props.arrGame[props.id1 - 1][props.id2 + 1] != "") moveControll()
                if(props.firstmove) moveControll()
        }
    }

    const moveControll = () => {
        if (!props.winChecked) {
            if (props.firstmove) props.setfirstmove(false)
            props.setplayerTurn(!props.playerTurn)
            props.addPlaterTurnArr(props.id1, props.id2)
        }
    }

    return (
        <div className={props.modeGame ? "box-classic" : "box-modern"} 
            onClick={()=>movePlayerController()}>
            {props.arrGame[props.id1][props.id2]}
        </div>
    )
}

module.exports = {
    BoxElem
}