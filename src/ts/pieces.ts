import react from "react"
import { HighlightSpanKind, PollingWatchKind } from "typescript";
import { Pawn, Knight, Rook, Bishop, Queen, King } from "./moves";

class Pieces {
    // name: string;
    kind: string;
    isSelected: boolean;
    isChecked: boolean; 
    isTaken: boolean;
    isCastled: boolean;
    canCastled: boolean;
    isMoved: boolean;
    isEnpassaint: boolean;
    isPromoted: boolean;
    constructor (kind: string, isSelected: boolean, isChecked: boolean, isTaken: boolean, isCastled: boolean, canCastled: boolean, isMoved: boolean, isEnpassaint: boolean, isPromoted: boolean) {
    // constructor (name: string, kind: string, isSelected: boolean, isChecked: boolean, isTaken: boolean, isCastled: boolean, canCastled: boolean, isMoved: boolean, isEnpassaint: boolean, isPromoted: boolean) {
        // this.name = name;
        this.kind = kind;
        this.isSelected = isSelected;
        this.isChecked = isChecked;
        this.isTaken = isTaken;
        this.isCastled = isCastled;
        this.canCastled = canCastled;
        this.isMoved = isMoved;
        this.isEnpassaint = isEnpassaint;
        this.isPromoted = isPromoted;

        function a(kind: string) {
            if(kind === " ") {
                console.log("no piece")
            } else if(kind.indexOf("P") !== -1) {
                Pawn();
            } else if(kind.indexOf("N") !== -1) {
                Knight();
            } else if(kind.indexOf("R") !== -1) {
                Rook();
            } else if(kind.indexOf("BB" || "WB") !== -1) {
                Bishop();
            } else if(kind.indexOf("Q") !== -1) {
                Queen();
            } else if(kind.indexOf("K") !== -1) {
                King();
            } else {
                console.log("error")
            }
        }

        a(this.kind)
    }

}

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