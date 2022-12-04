import react from "react";
import { pieceStateChanger } from "../pieceStateChanger"


let tmpChangeCellBox: string[]
export const KnightMove = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    tmpChangeCellBox = [];
    if (name[0] === "B") {
        if (document.getElementById(String(column + 2) + String(row + 1)) !== null && document.getElementById(String(column + 2) + String(row + 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column + 2) + String(row + 1))}
        if (document.getElementById(String(column + 2) + String(row - 1)) !== null && document.getElementById(String(column + 2) + String(row - 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column + 2) + String(row - 1))}
        if (document.getElementById(String(column - 2) + String(row + 1)) !== null && document.getElementById(String(column - 2) + String(row + 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column - 2) + String(row + 1))}
        if (document.getElementById(String(column - 2) + String(row - 1)) !== null && document.getElementById(String(column - 2) + String(row - 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column - 2) + String(row - 1))}
        if (document.getElementById(String(column + 1) + String(row + 2)) !== null && document.getElementById(String(column + 1) + String(row + 2))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column + 1) + String(row + 2))}
        if (document.getElementById(String(column - 1) + String(row + 2)) !== null && document.getElementById(String(column - 1) + String(row + 2))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column - 1) + String(row + 2))}
        if (document.getElementById(String(column + 1) + String(row - 2)) !== null && document.getElementById(String(column + 1) + String(row - 2))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column + 1) + String(row - 2))}
        if (document.getElementById(String(column - 1) + String(row - 2)) !== null && document.getElementById(String(column - 1) + String(row - 2))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column - 1) + String(row - 2))}
    } else {
        if (document.getElementById(String(column + 2) + String(row + 1)) !== null && document.getElementById(String(column + 2) + String(row + 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column + 2) + String(row + 1))}
        if (document.getElementById(String(column + 2) + String(row - 1)) !== null && document.getElementById(String(column + 2) + String(row - 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column + 2) + String(row - 1))}
        if (document.getElementById(String(column - 2) + String(row + 1)) !== null && document.getElementById(String(column - 2) + String(row + 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column - 2) + String(row + 1))}
        if (document.getElementById(String(column - 2) + String(row - 1)) !== null && document.getElementById(String(column - 2) + String(row - 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column - 2) + String(row - 1))}
        if (document.getElementById(String(column + 1) + String(row + 2)) !== null && document.getElementById(String(column + 1) + String(row + 2))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column + 1) + String(row + 2))}
        if (document.getElementById(String(column - 1) + String(row + 2)) !== null && document.getElementById(String(column - 1) + String(row + 2))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column - 1) + String(row + 2))}
        if (document.getElementById(String(column + 1) + String(row - 2)) !== null && document.getElementById(String(column + 1) + String(row - 2))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column + 1) + String(row - 2))}
        if (document.getElementById(String(column - 1) + String(row - 2)) !== null && document.getElementById(String(column - 1) + String(row - 2))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column - 1) + String(row - 2))}
    }

    for (let i = 0 ; i < tmpChangeCellBox.length ; i++) {
        let color = document.getElementById(tmpChangeCellBox[i]) as HTMLTableElement
        color.classList.add("red")
    }

    tmpChangeCellBox.unshift(String(column) + String((row)))
    tmpChangeCellBox.push(name)
    return tmpChangeCellBox
}