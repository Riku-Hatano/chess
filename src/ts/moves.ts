import react from "react";
import { isConditionalExpression } from "typescript";
import { BishopMove } from "./each_moves/bishop";
import { KnightMove } from "./each_moves/knight";
import { PawnMove } from "./each_moves/pawn";
// import { packageP, packageR, packageN, packageB, packageK, packageQ } from "./pieces";

export const Pawn = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    console.log(PawnMove(column, row, name, props3, props4))
    return PawnMove(column, row, name, props3, props4)
}

export const Knight = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    console.log(KnightMove(column, row, name, props3, props4))
    return KnightMove(column, row, name, props3, props4)
}

export const Rook = (column: number, row: number, piece: string) => {
    console.log("rook")
}

export const Bishop = (column: number, row: number, name: string, props3: react.Dispatch<react.SetStateAction<any>>, props4: any): string[] => {
    console.log(BishopMove(column, row, name, props3, props4))
    return BishopMove(column, row, name, props3, props4)
}

export const Queen = (column: number, row: number, piece: string) => {
    console.log("queen")
}

export const King = (column: number, row: number, piece: string) => {
    console.log("king")
}

//delete this file later. it is faster to access to each move directly from handleChange.ts