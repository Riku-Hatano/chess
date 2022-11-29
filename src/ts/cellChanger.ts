import react from "react";
import { isConstructorDeclaration } from "typescript";

export const cellChanger = (piece: string, column: number, row: number, tmpChangeCellBox: string[], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
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
            props3({
                ...props4,
                board: oldBoard
            })
        }
        console.log(max - 1)
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