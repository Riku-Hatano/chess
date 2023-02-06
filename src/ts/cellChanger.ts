import react from "react";
import { isConstructorDeclaration } from "typescript";
import { packageBQ, packageBP, packageWP, packageWQ } from "./pieces";
import Pieces from "./pieces";
import { pieceStateChanger2 } from "./pieceStateChanger";

export const cellChanger = (name: string, column: number, row: number, tmpChangeCellBox: string[], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
    console.log(tmpChangeCellBox)
    const max: number = tmpChangeCellBox.length
    for (let i = 1 ; i < max - 1 ; i++) {
        const id = document.getElementById(tmpChangeCellBox[i]) as HTMLTableElement;
        if (tmpChangeCellBox[i] === String(column) + String(row)) {
            const oldBoard = props4.board
            const oldPlaceColumn = Number(tmpChangeCellBox[0][0])
            const oldPlaceRow = Number(tmpChangeCellBox[0][1])
            oldBoard[oldPlaceColumn][oldPlaceRow] = " "
            oldBoard[column][row] = tmpChangeCellBox[max - 1]

            pieceStateChanger2(tmpChangeCellBox[max - 1]);
            //nameはクリックしたマスなので、cellChangerでセルの内容が変わる時にはからの文字列になっている。移動させるコマを参照したい場合はtmpChellBox[max - 1]にする必要がある。

            //promotion
            if (tmpChangeCellBox[max - 1].indexOf("BP") !== -1 && column === 7) {
                packageBQ.push(new Pieces("BQ" + packageBQ.length, false, false, false, false, false, false, false, false))
                for (let i = 0 ; i < packageBP.length ; i++) {
                    if (packageBP[i].name === name) {
                        packageBP.splice(i, 1);
                    }
                }
                oldBoard[column][row] = packageBQ[packageBQ.length - 1].name;
            }
            if (tmpChangeCellBox[max - 1].indexOf("WP") !== -1 && column === 0) {
                packageWQ.push(new Pieces("WQ" + packageWQ.length, false, false, false, false, false, false, false, false))
                for (let i = 0 ; i < packageWP.length ; i++) {
                    if (packageWP[i].name === name) {
                        packageWP.splice(i, 1);
                    }
                }
                oldBoard[column][row] = packageWQ[packageWQ.length - 1].name;
            }
            //promotion end


            props3({
                ...props4,
                board: oldBoard,
            })
        }
        id.classList.remove("red")
    }
    props3({
        ...props4,
        isClicked: !props4.isClicked
    })
}