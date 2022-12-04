import react from "react";
import { isConstructorDeclaration } from "typescript";
import { packageBQ, packageBP, packageWP, packageWQ } from "./pieces";
import Pieces from "./pieces";

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

            for (let i = 0 ; i < packageBP.length ; i++) {
                if (packageBP[i].name === tmpChangeCellBox[max - 1]) {
                    packageBP[i].isSelected = true;
                    packageBP[i].isMoved = true;
                    console.log(packageBP[i])
                }
            }
            //promotion
            if (tmpChangeCellBox[max - 1].indexOf("BP") !== -1 && column === 7) {
                packageBQ.push(new Pieces("BQ" + packageBQ.length, false, false, false, false, false, false, false, false))
                console.log(packageBQ)
                console.log(packageBQ.length)
                for (let i = 0 ; i < packageBP.length ; i++) {
                    if (packageBP[i].name === name) {
                        packageBP.splice(i, 1);
                    }
                }
                oldBoard[column][row] = packageBQ[packageBQ.length - 1].name;
            }
            //promotion end
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