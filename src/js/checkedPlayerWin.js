const checkedWinModern = (id1, id2, check, arrGame) => {
    let result = 0,
        temp = 1
    while (id1 - temp >= 0 && id2 - temp >= 0) {
        if (arrGame[id1 - temp][id2 - temp] == check) result++
        else break
        temp++;
        if (result == 4) return true
    }
    temp = 1
    result = 0
    while (id1 + temp < 50 && id2 + temp < 50) {
        if (arrGame[id1 + temp][id2 + temp] == check) result++
        else break
        temp++;
        if (result == 4) return true
    }
    temp = 1
    result = 0
    while (id1 - temp >= 0 && id2 + temp < 50) {
        if (arrGame[id1 - temp][id2 + temp] == check) result++
        else break
        temp++;
        if (result == 4) return true
    }
    temp = 1
    result = 0
    while (id1 + temp < 50 && id2 - temp >= 0) {
        if (arrGame[id1 + temp][id2 - temp] == check) result++
        else break
        temp++;
        if (result == 4) return true
    }
    temp = 1
    result = 0
    while (id1 - temp >= 0) {
        if (arrGame[id1 - temp][id2] == check) result++
        else break
        temp++;
        if (result == 4) return true
    }
    temp = 1
    result = 0
    while (id1 + temp < 50) {
        if (arrGame[id1 + temp][id2] == check) result++
        else break
        temp++;
        if (result == 4) return true
    }
    temp = 1
    result = 0
    while (id2 - temp >= 0) {
        if (arrGame[id1][id2 - temp] == check) result++
        else break
        temp++;
        if (result == 4) return true
    }
    temp = 1
    result = 0
    while (id2 + temp < 50) {
        if (arrGame[id1][id2 + temp] == check) result++
        else break
        temp++;
        if (result == 4) return true
    }
    return false
}

const checkedWinClassic = (checked, arrGame) => {
    let cols, rows, dileft, diright
    for (let i = 0; i < 3; i++) {
        cols = rows = 0
        for (let j = 0; j < 3; j++) {
            cols = (arrGame[i][j] == checked) ? ++cols : cols;
            rows = (arrGame[j][i] == checked) ? ++rows : rows;
        }
        if (cols == 3 || rows == 3) return true
    }
    dileft = diright = 0
    for (let i = 0; i < 3; i++) {
        dileft = (arrGame[i][i] == checked) ? ++dileft : dileft
        diright = (arrGame[3 - i - 1][i] == checked) ? ++diright : diright
    }
    if (dileft == 3 || diright == 3) return true
    return false
}

export {
    checkedWinClassic,
    checkedWinModern
}