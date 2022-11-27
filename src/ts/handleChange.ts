import react from "react"
import Pieces from "../ts/pieces";

const HandleChange = (piece: string, column: number, row: number, props2: string[][], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
// const HandleChange = (name: string, piece: string, column: number, row: number, props2: string[][], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
    // console.log("piece: " + piece)
    // console.log("props2: " + props2)
    // console.log("column: " + column)
    // console.log("row: " + row)
   
    // let a = document.getElementById(String(column) + String(row)) as HTMLTableElement;
    // a.classList.add("red");
    //hoverの方がclassセレクタよりも強いため、background-colorを設定しても反映されない





    let piece1 = new Pieces(piece, false, false, false, false, false, false, false, false)
    // let piece1 = new Pieces("riku", piece, false, false, false, false, false, false, false, false)
    props3 ({
        ...props4,
    })
}

export default HandleChange;

