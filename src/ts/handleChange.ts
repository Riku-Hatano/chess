import react from "react"
import React, { useState } from "react"
import Board from "../tsx/board"
import Qieces from "../ts/pieces"

const HandleChange = (piece: string, column: number, row: number, props2: string[][], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
    console.log(piece)
    console.log(props2)
    console.log(column)
    console.log(row)
    props2[row][column] = "done"
    props3 ({
        ...props4,
    })
    const bkn1 = new Qieces("knight", false, false, false, false, false, false, false, false);
    console.log(bkn1)
}

export default HandleChange;

