import react from "react";
import { pieceStateChanger } from "../pieceStateChanger";

let tmpChangeCellBox: string[];

export const RookMove = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    if (name[0] === "B") {
        for (let i = 0 ; i < 4 ; i++) {
            switch(i) {
                case 0:
                    //上
                    break;
                case 1: 
                    //下
                    break;
                case 2:
                    //右
                    break;
                case 3:
                    //左
                    break;
                default:
                    console.log("error. you run this function more than correct times.");
            }
        }
    }
    for (let i = 0 ; i < tmpChangeCellBox.length ; i++) {
        let color = document.getElementById(tmpChangeCellBox[i]) as HTMLTableElement
        color.classList.add("red")
    }
    tmpChangeCellBox.unshift(String(column) + String((row)))
    tmpChangeCellBox.push(name)
    return tmpChangeCellBox
}