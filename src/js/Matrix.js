const React = require("react");
const {BoxElem} = require("./BoxElem");

const Matrix = (props) => {

    const addPlaterTurnArr = (id1, id2) => {
        let arr = props.arrGame;
        arr[id1][id2] = props.playerTurn ? "X" : "O"
        props.modeGame ? props.setWinChecked(checkedWinClassic(props.playerTurn ? "X" : "O")) :
            props.setWinChecked(checkedWinModern(id1, id2, props.playerTurn ? "X" : "O"))
        props.setArrGame(arr)
    }

    const checkedWinModern = (id1, id2, check) => {
        let result = 0,
            temp = 1
        while (id1 - temp >= 0 && id2 - temp >= 0) {
            if (props.arrGame[id1 - temp][id2 - temp] == check) result++
            else break
            temp++;
            if (result == 4) return true
        }
        temp = 1
        result = 0
        while (id1 + temp < 50 && id2 + temp < 50) {
            if (props.arrGame[id1 + temp][id2 + temp] == check) result++
            else break
            temp++;
            if (result == 4) return true
        }
        temp = 1
        result = 0
        while (id1 - temp >= 0 && id2 + temp < 50) {
            if (props.arrGame[id1 - temp][id2 + temp] == check) result++
            else break
            temp++;
            if (result == 4) return true
        }
        temp = 1
        result = 0
        while (id1 + temp < 50 && id2 - temp >= 0) {
            if (props.arrGame[id1 + temp][id2 - temp] == check) result++
            else break
            temp++;
            if (result == 4) return true
        }
        temp = 1
        result = 0
        while (id1 - temp >= 0) {
            if (props.arrGame[id1 - temp][id2] == check) result++
            else break
            temp++;
            if (result == 4) return true
        }
        temp = 1
        result = 0
        while (id1 + temp < 50) {
            if (props.arrGame[id1 + temp][id2] == check) result++
            else break
            temp++;
            if (result == 4) return true
        }
        temp = 1
        result = 0
        while (id2 - temp >= 0) {
            if (props.arrGame[id1][id2 - temp] == check) result++
            else break
            temp++;
            if (result == 4) return true
        }
        temp = 1
        result = 0
        while (id2 + temp < 50) {
            if (props.arrGame[id1][id2 + temp] == check) result++
            else break
            temp++;
            if (result == 4) return true
        }
        return false
    }

    const checkedWinClassic = (checked) => {
        let cols, rows, dileft, diright
        for (let i = 0; i < 3; i++) {
            cols = rows = 0
            for (let j = 0; j < 3; j++) {
                cols = (props.arrGame[i][j] == checked) ? ++cols : cols;
                rows = (props.arrGame[j][i] == checked) ? ++rows : rows;
                if (i == j) dileft = (props.arrGame[i][j] == checked) ? ++dileft : dileft
                if (3 - i - 1 == j) diright = (props.arrGame[i][j] == checked) ? ++diright : diright
            }
            if (cols == 3 || rows == 3 || dileft == 3 || diright == 3) return true
        }
        dileft = diright = 0
        for (let i = 0; i < 3; i++) {
            dileft = (props.arrGame[i][i] == checked) ? ++dileft : dileft
            diright = (props.arrGame[3 - i - 1][i] == checked) ? ++diright : diright
        }
        if (dileft == 3 || diright == 3) return true
        return false
    }

    return (
        <div className="matrix">
            <div className={props.modeGame ? "area-classic" : "area-modern"}>
            {props.arrGame.map((element,i) => 
                element.map((elem,j)=>
                    <BoxElem 
                        key={i+j}
                        id1={i}
                        id2={j}
                        arrGame={props.arrGame}
                        modeGame={props.modeGame} 
                        playerTurn={props.playerTurn} 
                        setplayerTurn={props.setplayerTurn} 
                        winChecked={props.winChecked}
                        addPlaterTurnArr={addPlaterTurnArr}
                        firstmove ={props.firstmove}
                        setfirstmove={props.setfirstmove}    
                    />
                ))
            }
            </div>
        </div>
    )
}

module.exports = {
    Matrix
}