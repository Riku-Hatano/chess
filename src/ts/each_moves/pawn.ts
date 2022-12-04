import react from "react"
import { packageWP, packageBP } from "../pieces"
import { pieceStateChanger } from "../pieceStateChanger"

let tmpChangeCellBox: string[];
// first element of tmpChangeCellBox has a column of the place of piecee, second one is row.

export const PawnMove = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    if (name[0] === "B" && props4.isClicked === false) {
        tmpChangeCellBox = [];
        let isMoved = pieceStateChanger(name)?.isMoved
        for (let i = -1 ; i < 2 ; i++) {
            switch(i) {
                case -1:
                    if (document.getElementById(String(column + 1) + String(row - 1))?.innerHTML[0] === "W") {
                        tmpChangeCellBox.push(String(column + 1) + String(row - 1))
                    }
                    break;
                case 0:
                    if (document.getElementById(String(column + 1) + String(row))?.innerHTML[0] == " ") {
                        tmpChangeCellBox.push(String(column + 1) + String(row))
                    } 
                    break;
                case 1:
                    if (document.getElementById(String(column + 1) + String(row + 1))?.innerHTML[0] === "W") {
                        tmpChangeCellBox.push(String(column + 1) + String(row + 1))
                    }
                    break;
                default:
                    console.log("nothing");
            }
        }
        if (isMoved === false && document.getElementById(String(column + 2) + String(row))?.innerHTML === " ") {
            tmpChangeCellBox.push(String(column + 2) + String(row));
        }

        //show movable place 
        for (let i = 0 ; i < tmpChangeCellBox.length ; i++) {
            let color = document.getElementById(tmpChangeCellBox[i]) as HTMLTableElement
            color.classList.add("red")
        }
    } else if (name[0] === "W" && props4.isClicked === false) {
        tmpChangeCellBox = [];
        let isMoved = pieceStateChanger(name)?.isMoved
        if (isMoved === false) {
            isMoved = true
            for (let i = 0 ; i < 2 ; i++) {
                let id: string = String(column - i - 1) + String(row)
                tmpChangeCellBox.push(id)
            }
        } else {
            let id = String(column - 1) + String(row)
            tmpChangeCellBox.push(id)
        }
        for (let i = 0 ; i < tmpChangeCellBox.length ; i++) {
            let color = document.getElementById(tmpChangeCellBox[i]) as HTMLTableElement
            color.classList.add("red")
        }
    } 
    tmpChangeCellBox.unshift(String(column) + String((row)))
    tmpChangeCellBox.push(name)
    return tmpChangeCellBox
}