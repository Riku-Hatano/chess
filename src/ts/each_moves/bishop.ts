import react from "react";
import { packageWB, packageBB } from "../pieces"
import { pieceStateChanger } from "../pieceStateChanger"

let tmpChangeCellBox: string[]

export const BishopMove = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    tmpChangeCellBox = [];
    if (name[0] === "B") {
        for (let i = 0 ; i < 4 ; i++) {
            let run = 0
            switch(i) {
                case 0:
                    //左上
                    (column < row) ? run = column : run = row
                    console.log(`左上: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        tmpChangeCellBox.push(String(column - i) + String(row - i))
                    }
                    break;
                case 1: 
                    //右上
                    (column < 7 - row) ? run = column : run = (7 - row)
                    console.log(`右上: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        tmpChangeCellBox.push(String(column - i) + String(row + i))
                    }
                    break;
                case 2:
                    //左下
                    (7 - column < row) ? run = (7 - column) : run = row
                    console.log(`左下: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        tmpChangeCellBox.push(String(column + i) + String(row - i))
                    }
                    break;
                case 3:
                    //右下
                    (7 - column < 7 - row) ? run = (7 - column) : run = (7 - row)
                    console.log(`右下: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        tmpChangeCellBox.push(String(column + i) + String(row + i))
                    }
                    break;
                default:
                    console.log("error, you called function more than correct times.")
            }
        }
    } else {
        for (let i = 0 ; i < 4 ; i++) {
            let run = 0
            switch(i) {
                case 0:
                    //左上
                    (column < row) ? run = column : run = row
                    console.log(`左上: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        tmpChangeCellBox.push(String(column - i) + String(row - i))
                    }
                    break;
                case 1: 
                    //右上
                    (column < 7 - row) ? run = column : run = (7 - row)
                    console.log(`右上: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        tmpChangeCellBox.push(String(column - i) + String(row + i))
                    }
                    break;
                case 2:
                    //左下
                    (7 - column < row) ? run = (7 - column) : run = row
                    console.log(`左下: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        tmpChangeCellBox.push(String(column + i) + String(row - i))
                    }
                    break;
                case 3:
                    //右下
                    (7 - column < 7 - row) ? run = (7 - column) : run = (7 - row)
                    console.log(`右下: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        tmpChangeCellBox.push(String(column + i) + String(row + i))
                    }
                    break;
                default:
                    console.log("error, you called function more than correct times.")
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