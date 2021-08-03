require("../scss/style.scss");
require("normalize.css")

const React = require("react");
const {useState} = require("react");
const ReactDOM = require("react-dom");

const { BlockGame } = require("./BlockGame");
const { ButtonGameRun } = require("./ButtonGameRun");
const { GameMode } = require("./GameMode");
const { Header } = require("./Header");


const App = () => {
    const [runGame, setRunGame] = useState({game : false})
    const [modeGame , setmodeGame] = useState() 
    const [ArrClassic, setArrClassic] = useState([])
    const [ArrModern, setArrModern] = useState([])
    const [errModeGame, seterrModeGame] = useState("")

    const ArrCreateClassic = () =>{
        let arr = [];
        for(let i = 0;i<3;i++)
            arr.push(new Array())
        for(let i = 0;i<3;i++)
            for(let j = 0;j<3;j++)
                arr[i].push(new Array(""))
       setArrClassic(arr)
    }
    
    const ArrCreateModern = () =>{
        let arr = [];
        for(let i = 0; i<50; i++)
            arr.push(new Array())
        for(let i = 0;i<50;i++)
            for(let j = 0;j<50;j++)
                arr[i].push(new Array(""))
       setArrModern(arr)
    }
    
    return (
        <>
        <Header/>
        {
        runGame.game ? <BlockGame
            arrGame={modeGame ? ArrClassic : ArrModern}
            setArrGame={modeGame ? setArrClassic : setArrModern}
            modeGame={modeGame}
            setmodeGame={setmodeGame}
            ArrCreate={modeGame?ArrCreateClassic:ArrCreateModern}
            setRunGame={setRunGame}
        /> 
            : (
                <div className = "block-start">
                <ButtonGameRun
                    setRunGame={setRunGame}
                    arrCreateModern={ArrCreateModern}
                    arrCreateClassic={ArrCreateClassic}
                    runGame={runGame}
                    modeGame={modeGame}
                    errModeGame={errModeGame}
                    seterrModeGame={seterrModeGame}
                />
                <GameMode
                    modeGame={modeGame}
                    setmodeGame={setmodeGame}
                    seterrModeGame={seterrModeGame}
                />
                </div>
            )
        }     
        </>
    )
}

ReactDOM.render( < App / > , document.querySelector(".root"))