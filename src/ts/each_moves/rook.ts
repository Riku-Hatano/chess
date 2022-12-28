import react from "react";
import { packageWR, packageBR } from "../pieces";
import { pieceStateChanger } from "../pieceStateChanger";

let tmpChangeCellBox: string[];

export const RookMove = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    tmpChangeCellBox = [];
    //なんでフォーループの初期値iがゼロだと動かなくて１だと動くのか調べる。
    if (name[0] === "B") {
        for (let i = 0 ; i < 4 ; i++) {
            switch(i) {
                case 0:
                    for (let i = 1 ; i <= column ; i++) {
                        if (document.getElementById(String(column - i) + String(row))?.innerHTML[0] === "B") { break; }
                        tmpChangeCellBox.push(String(column - i) + String(row))
                        if (document.getElementById(String(column - i) + String(row))?.innerHTML[0] === "W") { break; }
                    }
                    break;
                case 1: 
                    //下
                    for (let i = 1 ; i <= 7 - column ; i++) {
                        if (document.getElementById(String(column + i) + String(row))?.innerHTML[0] === "B") { break; }
                        tmpChangeCellBox.push(String(column + i) + String(row))
                        if (document.getElementById(String(column + i) + String(row))?.innerHTML[0] === "W") { break; }
                    }
                    break;
                case 2:
                    for (let i = 1 ; i <= 7 - row ; i++) {
                        if (document.getElementById(String(column) + String(row + i))?.innerHTML[0] === "B") { break; }
                        tmpChangeCellBox.push(String(column) + String(row + i))
                        if (document.getElementById(String(column) + String(row + i))?.innerHTML[0] === "W") { break; }
                    }
                    //右
                    break;
                case 3:
                    for (let i = 1 ; i <= row ; i++) {
                        if (document.getElementById(String(column) + String(row - i))?.innerHTML[0] === "B") { break; }
                        tmpChangeCellBox.push(String(column) + String(row - i))
                        if (document.getElementById(String(column) + String(row - i))?.innerHTML[0] === "W") { break; }
                    }
                    //左
                    break;
                default:
                    console.log("error. you run this function more than correct times.");
            }
        }
    } else {
        for (let i = 0 ; i < 4 ; i++) {
            switch(i) {
                case 0:
                    for (let i = 1 ; i <= column ; i++) {
                        if (document.getElementById(String(column - i) + String(row))?.innerHTML[0] === "W") { break; }
                        tmpChangeCellBox.push(String(column - i) + String(row))
                        if (document.getElementById(String(column - i) + String(row))?.innerHTML[0] === "B") { break; }
                    }
                    break;
                case 1: 
                    //下
                    for (let i = 1 ; i <= 7 - column ; i++) {
                        if (document.getElementById(String(column + i) + String(row))?.innerHTML[0] === "W") { break; }
                        tmpChangeCellBox.push(String(column + i) + String(row))
                        if (document.getElementById(String(column + i) + String(row))?.innerHTML[0] === "B") { break; }
                    }
                    break;
                case 2:
                    for (let i = 1 ; i <= 7 - row ; i++) {
                        if (document.getElementById(String(column) + String(row + i))?.innerHTML[0] === "W") { break; }
                        tmpChangeCellBox.push(String(column) + String(row + i))
                        if (document.getElementById(String(column) + String(row + i))?.innerHTML[0] === "B") { break; }
                    }
                    //右
                    break;
                case 3:
                    for (let i = 1 ; i <= row ; i++) {
                        if (document.getElementById(String(column) + String(row - i))?.innerHTML[0] === "W") { break; }
                        tmpChangeCellBox.push(String(column) + String(row - i))
                        if (document.getElementById(String(column) + String(row - i))?.innerHTML[0] === "B") { break; }
                    }
                    //左
                    break;
                default:
                    console.log("error. you run this function more than correct times.");
            }
        }
    }
    console.log(tmpChangeCellBox);
    for (let i = 0 ; i < tmpChangeCellBox.length ; i++) {
        let color = document.getElementById(tmpChangeCellBox[i]) as HTMLTableElement
        color.classList.add("red")
    }
    tmpChangeCellBox.unshift(String(column) + String((row)))
    tmpChangeCellBox.push(name)
    return tmpChangeCellBox
}