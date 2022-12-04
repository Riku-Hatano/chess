import react from "react";
import { packageWP, packageBP } from "./pieces"

export const pieceStateChanger = (name: string) => {
    for (let i = 0 ; i < packageBP.length ; i++) {
        if (packageBP[i].name === name) {
            packageBP[i].isSelected = true;
            console.log(packageBP[i])
            return packageBP[i]
        }
    }
}