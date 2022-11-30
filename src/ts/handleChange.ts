import react from "react"
import Pieces from "../ts/pieces";
import { Pawn, Knight, Rook, Bishop, Queen, King } from "../ts/moves";
import { cellChanger } from "./cellChanger";

let tmpCell: string[]

const HandleChange = (piece: string, column: number, row: number, props2: string[][], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
    if (props4.isClicked === true) {
        cellChanger(piece, column, row, tmpCell, props3, props4)
        tmpCell = []
        return
    }
    if (props4.board[column][row] === " ") {
        console.log("nothing")
        tmpCell = []
        props3 ({
            ...props4,
            isClicked: !props4.isClicked,
        })
        // console.log(!props4.isClicked)
        return
    }

    if (piece === " ") {
        console.log("no piece")
    } else if (piece.indexOf("P") !== -1) {
        tmpCell = Pawn(column, row, piece, props3, props4);
    } else if (piece.indexOf("N") !== -1) {
        Knight(column, row, piece);
    } else if (piece.indexOf("R") !== -1) {
        Rook(column, row, piece);
    } else if (piece.indexOf("BB" || "WB") !== -1) {
        Bishop(column, row, piece);
    } else if (piece.indexOf("Q") !== -1) {
        Queen(column, row, piece);
    } else if (piece.indexOf("K") !== -1) {
        King(column, row, piece);
    } else {
        console.log("error")
    }



    // let a = document.getElementById(String(column) + String(row)) as HTMLTableElement;
    // a.classList.add("red");
    //hoverの方がclassセレクタよりも強いため、background-colorを設定しても反映されない
    
    props3 ({
        ...props4,
        isClicked: !props4.isClicked,
    })
    console.log(!props4.isClicked)
    // console.log(!props4.isClicked)
}

export default HandleChange;

