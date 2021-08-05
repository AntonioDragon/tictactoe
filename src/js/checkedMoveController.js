const checkedMoveController = (id1, id2, arrGame, firstmove) => {
    if (id1 + 1 < 50)
        if (arrGame[id1 + 1][id2] != "") return true
    if (id1 - 1 >= 0)
        if (arrGame[id1 - 1][id2] != "") return true
    if (id2 + 1 < 50)
        if (arrGame[id1][id2 + 1] != "") return true
    if (id2 - 1 >= 0)
        if (arrGame[id1][id2 - 1] != "") return true
    if (id1 + 1 < 50 && id2 + 1 < 50)
        if (arrGame[id1 + 1][id2 + 1] != "") return true
    if (id1 + 1 < 50 && id2 - 1 >= 0)
        if (arrGame[id1 + 1][id2 - 1] != "") return true
    if (id1 - 1 >= 0 && id2 - 1 >= 0)
        if (arrGame[id1 - 1][id2 - 1] != "") return true
    if (id1 - 1 >= 0 && id2 + 1 < 50)
        if (arrGame[id1 - 1][id2 + 1] != "") return true
    if (firstmove) return true
    return false
}

export default checkedMoveController