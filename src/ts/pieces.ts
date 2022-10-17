import react from "react"

const Pieces = {
    bR1: {
        move: "rook",
        isSelected: false,
        isChecked: false,
        isTaken: false,
        isCastled: false,
        canCastled: true
    },
    bR2: {
        move: "rook",
        isSelected: false,
        isChecked: false,
        isTaken: false,
        isCastled: false,
        canCastled: true
    },
    bK1: {
        move: "knight",
        isSelected: false,
        isChecked: false,
        isTaken: false,
    },
    bK2: {
        move: "knight",
        isSelected: false,
        isChecked: false,
        isTaken: false,
    },
    bB1: {
        move: "bishop",
        isSelected: false,
        isChecked: false,
        isTaken: false
    },
    bB2: {
        move: "bishop",
        isSelected: false,
        isChecked: false,
        isTaken: false
    },
    bQ: {
        move: "queen",
        isSelected: false,
        isChecked: false,
        isTaken: false,
    },
    bK: {
        move: "king",
        isSelected: false,
        isChecked: false,
        isCastled: false,
        canCastled: true,
    },
    bP1: {
        move: "pawn",
        isSelected: false,
        isChecked: false,
        isTaken: false,
        isMoved: false, //2マス
        isEnPassant: false, //アンパッサン
        isPromoted: false, //プロモーション
    },
    //白のポーン、黒はこれからやる
}

export default Pieces