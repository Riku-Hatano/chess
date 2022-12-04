import react from "react";
import { isConstructorDeclaration } from "typescript";
import { packageP } from "./pieces";

export const cellChanger = (name: string, column: number, row: number, tmpChangeCellBox: string[], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
    console.log(tmpChangeCellBox)
    const max: number = tmpChangeCellBox.length
    for (let i = 1 ; i < tmpChangeCellBox.length - 1 ; i++) {
        const id = document.getElementById(tmpChangeCellBox[i]) as HTMLTableElement;
        if (tmpChangeCellBox[i] === String(column) + String(row)) {
            const oldBoard = props4.board
            const oldPlaceColumn = Number(tmpChangeCellBox[0][0])
            const oldPlaceRow = Number(tmpChangeCellBox[0][1])
            oldBoard[oldPlaceColumn][oldPlaceRow] = " "
            oldBoard[column][row] = tmpChangeCellBox[max - 1]

            for (let i = 0 ; i < packageP.length ; i++) {
                if (packageP[i].name === tmpChangeCellBox[max - 1]) {
                    packageP[i].isSelected = true;
                    packageP[i].isMoved = true;
                    console.log(packageP[i])
                }
            }
            props3({
                ...props4,
                board: oldBoard,
            })
        }
        console.log(tmpChangeCellBox[max - 1])
        id.classList.remove("red")
    }
    props3({
        ...props4,
        isClicked: !props4.isClicked
    })
}

// export const cellChanger = () => {
//     console.log("cellchanger")
    
// }