import react from "react";
import { isConditionalExpression } from "typescript";
import { packageP } from "./pieces";
// import { packageP, packageR, packageN, packageB, packageK, packageQ } from "./pieces";

function pieceStateChanger(name: string) {
    for (let i = 0 ; i < packageP.length ; i++) {
        if (packageP[i].name === name) {
            packageP[i].isSelected = true;
            console.log(packageP[i])
        }
    }
}

export const Pawn = (column: number, row: number, name: string) => {
    if (name[0] === "B") {
        let changecCell = document.getElementById(String(column + 1) + String(row)) as HTMLTableElement;
        changecCell.classList.add("red")
        pieceStateChanger(name)
        // for (let i = 0 ; i < packageP.length ; i++) {
        //     if (packageP[i].name === name) {
        //         packageP[i].isSelected = true;
        //         console.log(packageP[i])
        //         return
        //     }
        // }
    } else {
        let changecCell = document.getElementById(String(column - 1) + String(row)) as HTMLTableElement;
        changecCell.classList.add("red")
        pieceStateChanger(name)
        // for (let i = 0 ; i < packageP.length ; i++) {
        //     if (packageP[i].name === name) {
        //         packageP[i].isSelected = true;
        //         console.log(packageP[i])
        //         return
        //     }
        // }
    }
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