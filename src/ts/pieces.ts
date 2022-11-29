import react from "react"
import { HighlightSpanKind, PollingWatchKind } from "typescript";
import { Pawn, Knight, Rook, Bishop, Queen, King } from "./moves";

class Pieces {
    // column: number;
    // row: number;
    name: string;
    isSelected: boolean;
    isChecked: boolean; 
    isTaken: boolean;
    isCastled: boolean;
    canCastled: boolean;
    isMoved: boolean;
    isEnpassaint: boolean;
    isPromoted: boolean;
    constructor (name: string, isSelected: boolean, isChecked: boolean, isTaken: boolean, isCastled: boolean, canCastled: boolean, isMoved: boolean, isEnpassaint: boolean, isPromoted: boolean) {
    // constructor (column: number, row: number, name: string, isSelected: boolean, isChecked: boolean, isTaken: boolean, isCastled: boolean, canCastled: boolean, isMoved: boolean, isEnpassaint: boolean, isPromoted: boolean) {
        // this.column = column;
        // this.row = row;
        this.name = name;
        this.isSelected = isSelected;
        this.isChecked = isChecked;
        this.isTaken = isTaken;
        this.isCastled = isCastled;
        this.canCastled = canCastled;
        this.isMoved = isMoved;
        this.isEnpassaint = isEnpassaint;
        this.isPromoted = isPromoted;
    }
}

export let packageP = [
    new Pieces("BP0", false, false, false, false, false, false, false, false),
    new Pieces("BP1", false, false, false, false, false, false, false, false),
    new Pieces("BP2", false, false, false, false, false, false, false, false),
    new Pieces("BP3", false, false, false, false, false, false, false, false),
    new Pieces("BP4", false, false, false, false, false, false, false, false),
    new Pieces("BP5", false, false, false, false, false, false, false, false),
    new Pieces("BP6", false, false, false, false, false, false, false, false),
    new Pieces("BP7", false, false, false, false, false, false, false, false),
    new Pieces("WP0", false, false, false, false, false, false, false, false),
    new Pieces("WP1", false, false, false, false, false, false, false, false),
    new Pieces("WP2", false, false, false, false, false, false, false, false),
    new Pieces("WP3", false, false, false, false, false, false, false, false),
    new Pieces("WP4", false, false, false, false, false, false, false, false),
    new Pieces("WP5", false, false, false, false, false, false, false, false),
    new Pieces("WP6", false, false, false, false, false, false, false, false),
    new Pieces("WP7", false, false, false, false, false, false, false, false),
];

export let packageR = [
    new Pieces("BR0", false, false, false, false, false, false, false, false),
    new Pieces("BR1", false, false, false, false, false, false, false, false),
    new Pieces("WR0", false, false, false, false, false, false, false, false),
    new Pieces("WR1", false, false, false, false, false, false, false, false),
]
 
export let packageN = [
    new Pieces("BN0", false, false, false, false, false, false, false, false),
    new Pieces("BN1", false, false, false, false, false, false, false, false),
    new Pieces("WN0", false, false, false, false, false, false, false, false),
    new Pieces("WN1", false, false, false, false, false, false, false, false),
]

export let packageB = [
    new Pieces("BB0", false, false, false, false, false, false, false, false),
    new Pieces("BB1", false, false, false, false, false, false, false, false),
    new Pieces("WB0", false, false, false, false, false, false, false, false),
    new Pieces("WB1", false, false, false, false, false, false, false, false),
]

export let packageQ = [
    new Pieces("BQ0", false, false, false, false, false, false, false, false),
    new Pieces("WQ0", false, false, false, false, false, false, false, false),
]

export let packageK = [
    new Pieces("BK0", false, false, false, false, false, false, false, false),
    new Pieces("WK0", false, false, false, false, false, false, false, false),
]
// export let packageP = [
//     new Pieces(0, 1, "BP0", false, false, false, false, false, false, false, false),
//     new Pieces(1, 1, "BP1", false, false, false, false, false, false, false, false),
//     new Pieces(1, 2, "BP2", false, false, false, false, false, false, false, false),
//     new Pieces(1, 3, "BP3", false, false, false, false, false, false, false, false),
//     new Pieces(1, 4, "BP4", false, false, false, false, false, false, false, false),
//     new Pieces(1, 5, "BP5", false, false, false, false, false, false, false, false),
//     new Pieces(1, 6, "BP6", false, false, false, false, false, false, false, false),
//     new Pieces(1, 7, "BP7", false, false, false, false, false, false, false, false),
// ];

// export let packageR = [
//     new Pieces(0, 0, "BR0", false, false, false, false, false, false, false, false),
//     new Pieces(0, 7, "BR1", false, false, false, false, false, false, false, false),
// ]
 
// export let packageN = [
//     new Pieces(0, 1, "BN0", false, false, false, false, false, false, false, false),
//     new Pieces(0, 6, "BN1", false, false, false, false, false, false, false, false),
// ]

// export let packageB = [
//     new Pieces(0, 2, "BB0", false, false, false, false, false, false, false, false),
//     new Pieces(0, 5, "BB1", false, false, false, false, false, false, false, false),
// ]

// export let packageQ = [
//     new Pieces(0, 4, "BQ0", false, false, false, false, false, false, false, false),
// ]

// export let packageK = [
//     new Pieces(0, 5, "BK0", false, false, false, false, false, false, false, false),
// ]


export default Pieces