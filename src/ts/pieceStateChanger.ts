import react from "react";
import { packageP } from "./pieces"

export const pieceStateChanger = (name: string) => {
    for (let i = 0 ; i < packageP.length ; i++) {
        if (packageP[i].name === name) {
            packageP[i].isSelected = true;
            console.log(packageP[i])
            return packageP[i]
        }
    }
}