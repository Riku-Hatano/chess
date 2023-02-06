import react from "react";
import { packageWP, packageBP } from "./pieces"

export const pieceStateChanger = (name: string) => {
    if (name.indexOf("BP") !== -1) {
        for (let i = 0 ; i < packageBP.length ; i++) {
            if (packageBP[i].name === name) {
                packageBP[i].isSelected = true;
                // console.log(packageBP[i])
                return packageBP[i]
            }
        }
    } else if (name.indexOf("WP") !== -1) {
        for (let i = 0 ; i < packageWP.length ; i++) {
            if (packageWP[i].name === name) {
                packageWP[i].isSelected = true;
                // console.log(packageWP[i])
                return packageWP[i]
            }
        }
    }
}


export const pieceStateChanger2 = (name: string) => {
    if (name.indexOf("BP") !== -1) {
        for (let i = 0 ; i < packageBP.length ; i++) {
            if (packageBP[i].name === name) {
                packageBP[i].isSelected = true;
                packageBP[i].isMoved = true;
                console.log(packageBP[i])
            }
        }
    } else if (name.indexOf("WP") !== -1) {
        for (let i = 0 ; i < packageWP.length ; i++) {
            if (packageWP[i].name === name) {
                packageWP[i].isSelected = true;
                packageWP[i].isMoved = true;
                console.log(packageWP[i])
            }
        }
    }
    
}