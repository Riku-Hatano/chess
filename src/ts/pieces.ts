import react from "react"
import { HighlightSpanKind, PollingWatchKind } from "typescript";
import { Pawn, Knight, Rook, Bishop, Queen, King } from "./moves";

class Pieces {
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

export let packageWP = [
    new Pieces("WP0", false, false, false, false, false, false, false, false),
    new Pieces("WP1", false, false, false, false, false, false, false, false),
    new Pieces("WP2", false, false, false, false, false, false, false, false),
    new Pieces("WP3", false, false, false, false, false, false, false, false),
    new Pieces("WP4", false, false, false, false, false, false, false, false),
    new Pieces("WP5", false, false, false, false, false, false, false, false),
    new Pieces("WP6", false, false, false, false, false, false, false, false),
    new Pieces("WP7", false, false, false, false, false, false, false, false),
];

export let packageWR = [
    new Pieces("WR0", false, false, false, false, false, false, false, false),
    new Pieces("WR1", false, false, false, false, false, false, false, false),
]
 
export let packageWN = [
    new Pieces("WN0", false, false, false, false, false, false, false, false),
    new Pieces("WN1", false, false, false, false, false, false, false, false),
]

export let packageWB = [
    new Pieces("WB0", false, false, false, false, false, false, false, false),
    new Pieces("WB1", false, false, false, false, false, false, false, false),
]

export let packageWQ = [
    new Pieces("WQ0", false, false, false, false, false, false, false, false),
]

export let packageWK = [
    new Pieces("WK0", false, false, false, false, false, false, false, false),
]

export let packageBP = [
    new Pieces("BP0", false, false, false, false, false, false, false, false),
    new Pieces("BP1", false, false, false, false, false, false, false, false),
    new Pieces("BP2", false, false, false, false, false, false, false, false),
    new Pieces("BP3", false, false, false, false, false, false, false, false),
    new Pieces("BP4", false, false, false, false, false, false, false, false),
    new Pieces("BP5", false, false, false, false, false, false, false, false),
    new Pieces("BP6", false, false, false, false, false, false, false, false),
    new Pieces("BP7", false, false, false, false, false, false, false, false),
];

export let packageBR = [
    new Pieces("BR0", false, false, false, false, false, false, false, false),
    new Pieces("BR1", false, false, false, false, false, false, false, false),
]
 
export let packageBN = [
    new Pieces("BN0", false, false, false, false, false, false, false, false),
    new Pieces("BN1", false, false, false, false, false, false, false, false),
]

export let packageBB = [
    new Pieces("BB0", false, false, false, false, false, false, false, false),
    new Pieces("BB1", false, false, false, false, false, false, false, false),
]

export let packageBQ = [
    new Pieces("BQ0", false, false, false, false, false, false, false, false),
]

export let packageBK = [
    new Pieces("BK0", false, false, false, false, false, false, false, false),
]


export default Pieces