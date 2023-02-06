import react from "react";

let tmpChangeCellBox: string[];
export const QueenMove = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    tmpChangeCellBox = [];
    if (name[0] === "B") {
        for (let i = 0 ; i < 8 ; i++) {
            let run = 0
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
                case 4:
                    //左上
                    (column < row) ? run = column : run = row
                    // console.log(`左上: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        if (document.getElementById(String(column - i) + String(row - i))?.innerHTML[0] == "B") { break; }
                        tmpChangeCellBox.push(String(column - i) + String(row - i))
                        if (document.getElementById(String(column - i) + String(row - i))?.innerHTML[0] == "W") { break; }
                    }
                    break;
                case 5: 
                    //右上
                    (column < 7 - row) ? run = column : run = (7 - row)
                    // console.log(`右上: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        if (document.getElementById(String(column - i) + String(row + i))?.innerHTML[0] == "B") { break; }
                        tmpChangeCellBox.push(String(column - i) + String(row + i))
                        if (document.getElementById(String(column - i) + String(row + i))?.innerHTML[0] == "W") { break; }
                    }
                    break;
                case 6:
                    //左下
                    (7 - column < row) ? run = (7 - column) : run = row
                    // console.log(`左下: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        if (document.getElementById(String(column + i) + String(row - i))?.innerHTML[0] == "B") { break; }
                        tmpChangeCellBox.push(String(column + i) + String(row - i))
                        if (document.getElementById(String(column + i) + String(row - i))?.innerHTML[0] == "W") { break; }
                    }
                    break;
                case 7:
                    //右下
                    (7 - column < 7 - row) ? run = (7 - column) : run = (7 - row)
                    // console.log(`右下: ${run}`)
                    for (let i = 1 ; i <= run ; i++) {
                        if (document.getElementById(String(column + i) + String(row + i))?.innerHTML[0] == "B") { break; }
                        tmpChangeCellBox.push(String(column + i) + String(row + i))
                        if (document.getElementById(String(column + i) + String(row + i))?.innerHTML[0] == "W") { break; }
                    }
                break;
                default:
                    console.log("error. you run this function more than correct times.");
            }
        }
    } else {
        for (let i = 0 ; i < 8 ; i++) {
            let run = 0;
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
                    case 4:
                        //左上
                        (column < row) ? run = column : run = row
                        // console.log(`左上: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(column - i) + String(row - i))?.innerHTML[0] == "W") { break; }
                            tmpChangeCellBox.push(String(column - i) + String(row - i))
                            if (document.getElementById(String(column - i) + String(row - i))?.innerHTML[0] == "B") { break; }
                        }
                        break;
                    case 5: 
                        //右上
                        (column < 7 - row) ? run = column : run = (7 - row)
                        // console.log(`右上: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(column - i) + String(row + i))?.innerHTML[0] == "W") { break; }
                            tmpChangeCellBox.push(String(column - i) + String(row + i))
                            if (document.getElementById(String(column - i) + String(row + i))?.innerHTML[0] == "B") { break; }
                        }
                        break;
                    case 6:
                        //左下
                        (7 - column < row) ? run = (7 - column) : run = row
                        // console.log(`左下: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(column + i) + String(row - i))?.innerHTML[0] == "W") { break; }
                            tmpChangeCellBox.push(String(column + i) + String(row - i))
                            if (document.getElementById(String(column + i) + String(row - i))?.innerHTML[0] == "B") { break; }
                        }
                        break;
                    case 7:
                        //右下
                        (7 - column < 7 - row) ? run = (7 - column) : run = (7 - row)
                        // console.log(`右下: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(column + i) + String(row + i))?.innerHTML[0] == "W") { break; }
                            tmpChangeCellBox.push(String(column + i) + String(row + i))
                            if (document.getElementById(String(column + i) + String(row + i))?.innerHTML[0] == "B") { break; }
                        }
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
