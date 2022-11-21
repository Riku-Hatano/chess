import react from "react"
import { HighlightSpanKind } from "typescript";

class Pieces {
    move: string;
    isSelected: boolean;
    isChecked: boolean; 
    isTaken: boolean;
    isCastled: boolean;
    canCastled: boolean;
    isMoved: boolean;
    isEnpassaint: boolean;
    isPromoted: boolean;
    constructor (move: string, isSelected: boolean, isChecked: boolean, isTaken: boolean, isCastled: boolean, canCastled: boolean, isMoved: boolean, isEnpassaint: boolean, isPromoted: boolean) {
        this.move = move;
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

const br1 = new Pieces("rook", false, false, false, false, false, false, false, false)
const br2 = new Pieces("rook", false, false, false, false, false, false, false, false)
const bp1 = new Pieces("pawn", false, false, false, false, false, false, false, false)

// class Pieces {
//     move: string;
//     isSelected: boolean;
//     isChecked: boolean; 
//     isTaken: boolean;
   
//     constructor (move: string, isSelected: boolean, isChecked: boolean, isTaken: boolean) {
//         this.move = move;
//         this.isSelected = isSelected;
//         this.isChecked = isChecked;
//         this.isTaken = isTaken;
//     }
// }

// class Pawn extends Pieces {
//     isMoved: boolean;
//     isEnpassaint: boolean;
//     isPromoted: boolean;

//     constructor (isMoved: boolean, isEnpassaint: boolean, isPromoted: boolean) {
//         this.isMoved = isMoved;
//         this.isEnpassaint = isEnpassaint;
//         this.isPromoted = isPromoted;
//     }
// }



export default Pieces