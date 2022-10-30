import react from "react"
import React, { useState } from "react"
import Board from "../tsx/board"

const HandleChange = (props: string, num1: number, num2: number, props2: string[][], props3: react.Dispatch<react.SetStateAction<any>>, props4: any) => {
    console.log(props)
    console.log(props2)
    console.log(num1)
    console.log(num2)
    const allBoard = props2
    props2[num1][num2] = "done"
    props3 ({
        ...props4,
    })
}

export default HandleChange;

