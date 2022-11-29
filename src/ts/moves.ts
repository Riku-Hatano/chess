import react from "react";
import { isConditionalExpression } from "typescript";
import { packageP } from "./pieces";
import { cellChanger } from "./cellChanger";
// import { packageP, packageR, packageN, packageB, packageK, packageQ } from "./pieces";

function pieceStateChanger(name: string) {
    for (let i = 0 ; i < packageP.length ; i++) {
        if (packageP[i].name === name) {
            packageP[i].isSelected = true;
            console.log(packageP[i])
            return packageP[i]
        }
    }
}

let tmpChangeCellBox: string[] = [];
// first element of tmpChangeCellBox has a column of the place of piecee, second one is row.


export const Pawn = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    if (name[0] === "B" && props4.isClicked === false) {
        tmpChangeCellBox = [];
        let isMoved = pieceStateChanger(name)?.isMoved
        if (isMoved === false) {
            isMoved = true
            for (let i = 0 ; i < 2 ; i++) {
                let id: string = String(column + i + 1) + String(row)
                tmpChangeCellBox.push(id)
            }
        } else {
            let id = String(column + 1) + String(row)
            tmpChangeCellBox.push(id)
        }
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

export const Knight = (column: number, row: number, piece: string) => {
    console.log("knight")
}

export const Rook = (column: number, row: number, piece: string) => {
    console.log("rook")
}

export const Bishop = (column: number, row: number, piece: string) => {
    console.log("bishop")
}

export const Queen = (column: number, row: number, piece: string) => {
    console.log("queen")
}

export const King = (column: number, row: number, piece: string) => {
    console.log("king")
}