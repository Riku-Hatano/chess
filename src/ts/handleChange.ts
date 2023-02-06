import react from "react"
import Pieces from "../ts/pieces";
import { Pawn, Knight, Rook, Bishop, Queen, King } from "../ts/moves";
import { PawnMove } from "./each_moves/pawn";
import { cellChanger } from "./cellChanger";

let tmpCell: string[]
//tmpCellに変更されるマスを代入する。

const HandleChange = (piece: string, column: number, row: number, props2: string[][], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
    if (props4.isClicked === true) {
        cellChanger(piece, column, row, tmpCell, props3, props4)
        tmpCell = []
        return
    } 
    if (piece === " ") {
        console.log("nothing")
        tmpCell = []
        props3 ({
            ...props4,
            isClicked: !props4.isClicked,
        })
        return
    }

    if (piece[1] === "P") {
        tmpCell = Pawn(column, row, piece, props3, props4); //Pawn in included in moves.ts
        // tmpCell = PawnMove(column, row, piece, props3, props4);
    } else if (piece[1] === "N") {
        tmpCell = Knight(column, row, piece, props3, props4); //Knight is included moves.ts
    } else if (piece[1] === "R") {
        tmpCell = Rook(column, row, piece, props3, props4); //Rook is included rook.ts
    } else if (piece[1] === "B") {
        tmpCell = Bishop(column, row, piece, props3, props4); //Bishop is included bishop.ts
    } else if (piece[1] === "Q") {
        tmpCell = Queen(column, row, piece, props3, props4);
    } else if (piece[1] === "K") {
        tmpCell = King(column, row, piece, props3, props4);
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
    // console.log(!props4.isClicked)
    // console.log(!props4.isClicked)
}

export default HandleChange;

