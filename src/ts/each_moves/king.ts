import react from "react";

let tmpChangeCellBox: string[];
export const KingMove = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    tmpChangeCellBox = [];
    if(name[0] === "B") {
        if (document.getElementById(String(column + 1) + String(row + 1)) !== null && document.getElementById(String(column + 1) + String(row + 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column + 1) + String(row + 1))}
        if (document.getElementById(String(column) + String(row + 1)) !== null && document.getElementById(String(column) + String(row + 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column) + String(row + 1))}
        if (document.getElementById(String(column - 1) + String(row + 1)) !== null && document.getElementById(String(column - 1) + String(row + 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column - 1) + String(row + 1))}
        if (document.getElementById(String(column - 1) + String(row)) !== null && document.getElementById(String(column - 1) + String(row))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column - 1) + String(row))}
        if (document.getElementById(String(column - 1) + String(row - 1)) !== null && document.getElementById(String(column - 1) + String(row - 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column - 1) + String(row - 1))}
        if (document.getElementById(String(column) + String(row - 1)) !== null && document.getElementById(String(column) + String(row - 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column) + String(row - 1))}
        if (document.getElementById(String(column + 1) + String(row - 1)) !== null && document.getElementById(String(column + 1) + String(row - 1))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column + 1) + String(row - 1))}
        if (document.getElementById(String(column + 1) + String(row)) !== null && document.getElementById(String(column + 1) + String(row))?.innerHTML[0] !== "B") {tmpChangeCellBox.push(String(column + 1) + String(row))}

    } else {
        if (document.getElementById(String(column + 1) + String(row + 1)) !== null && document.getElementById(String(column + 1) + String(row + 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column + 1) + String(row + 1))}
        if (document.getElementById(String(column) + String(row + 1)) !== null && document.getElementById(String(column) + String(row + 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column) + String(row + 1))}
        if (document.getElementById(String(column - 1) + String(row + 1)) !== null && document.getElementById(String(column - 1) + String(row + 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column - 1) + String(row + 1))}
        if (document.getElementById(String(column - 1) + String(row)) !== null && document.getElementById(String(column - 1) + String(row))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column - 1) + String(row))}
        if (document.getElementById(String(column - 1) + String(row - 1)) !== null && document.getElementById(String(column - 1) + String(row - 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column - 1) + String(row - 1))}
        if (document.getElementById(String(column) + String(row - 1)) !== null && document.getElementById(String(column) + String(row - 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column) + String(row - 1))}
        if (document.getElementById(String(column + 1) + String(row - 1)) !== null && document.getElementById(String(column + 1) + String(row - 1))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column + 1) + String(row - 1))}
        if (document.getElementById(String(column + 1) + String(row)) !== null && document.getElementById(String(column + 1) + String(row))?.innerHTML[0] !== "W") {tmpChangeCellBox.push(String(column + 1) + String(row))}
    }
    console.log(tmpChangeCellBox);
    for (let i = 0 ; i < tmpChangeCellBox.length ; i++) {
        let color = document.getElementById(tmpChangeCellBox[i]) as HTMLTableElement
        color.classList.add("red")
    }
    tmpChangeCellBox.unshift(String(column) + String((row)))
    tmpChangeCellBox.push(name)
    return tmpChangeCellBox;
}