import react, { useState } from "react"
import HandleChange from "../ts/handleChange"
import "../css/board.css"

const Board = () => {
    const [board, setBoard] = useState({
        board: [
            ["BR0", "BN0", "BB0", "BQ0", "BK", "BB1", "BN1", "BR1"],
            ["BP0", "BP1", "BP2", "BP3", "BP4", "BP5", "BP6", "BP7"],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            ["WP0", "WP1", "WP2", "WP3", "WP4", "WP5", "WP6", "WP7"],
            ["WR0", "WN0", "WB0", "WQ0", "WK", "WB1", "WN1", "WR1"]
        ],
        isClicked: false,
        isWhite: true,
        isPointed: false,
    })
    return (
        <table>
            <tbody>
                <tr>
                    <td id="00" onClick={() => HandleChange(board.board[0][0], 0, 0, board.board,setBoard, board)}>{board.board[0][0]}</td>
                    <td id="01" onClick={() => HandleChange(board.board[0][1], 0, 1, board.board,setBoard, board)}>{board.board[0][1]}</td>
                    <td id="02" onClick={() => HandleChange(board.board[0][2], 0, 2, board.board,setBoard, board)}>{board.board[0][2]}</td>
                    <td id="03" onClick={() => HandleChange(board.board[0][3], 0, 3, board.board,setBoard, board)}>{board.board[0][3]}</td>
                    <td id="04" onClick={() => HandleChange(board.board[0][4], 0, 4, board.board,setBoard, board)}>{board.board[0][4]}</td>
                    <td id="05" onClick={() => HandleChange(board.board[0][5], 0, 5, board.board,setBoard, board)}>{board.board[0][5]}</td>
                    <td id="06" onClick={() => HandleChange(board.board[0][6], 0, 6, board.board,setBoard, board)}>{board.board[0][6]}</td>
                    <td id="07" onClick={() => HandleChange(board.board[0][7], 0, 7, board.board,setBoard, board)}>{board.board[0][7]}</td>
                </tr>
                <tr>
                    <td id="10" onClick={() => HandleChange(board.board[1][0], 1, 0, board.board,setBoard, board)}>{board.board[1][0]}</td>
                    <td id="11" onClick={() => HandleChange(board.board[1][1], 1, 1, board.board,setBoard, board)}>{board.board[1][1]}</td>
                    <td id="12" onClick={() => HandleChange(board.board[1][2], 1, 2, board.board,setBoard, board)}>{board.board[1][2]}</td>
                    <td id="13" onClick={() => HandleChange(board.board[1][3], 1, 3, board.board,setBoard, board)}>{board.board[1][3]}</td>
                    <td id="14" onClick={() => HandleChange(board.board[1][4], 1, 4, board.board,setBoard, board)}>{board.board[1][4]}</td>
                    <td id="15" onClick={() => HandleChange(board.board[1][5], 1, 5, board.board,setBoard, board)}>{board.board[1][5]}</td>
                    <td id="16" onClick={() => HandleChange(board.board[1][6], 1, 6, board.board,setBoard, board)}>{board.board[1][6]}</td>
                    <td id="17" onClick={() => HandleChange(board.board[1][7], 1, 7, board.board,setBoard, board)}>{board.board[1][7]}</td>
                </tr>
                <tr>
                    <td id="20" onClick={() => HandleChange(board.board[2][0], 2, 0, board.board,setBoard, board)}>{board.board[2][0]}</td>
                    <td id="21" onClick={() => HandleChange(board.board[2][1], 2, 1, board.board,setBoard, board)}>{board.board[2][1]}</td>
                    <td id="22" onClick={() => HandleChange(board.board[2][2], 2, 2, board.board,setBoard, board)}>{board.board[2][2]}</td>
                    <td id="23" onClick={() => HandleChange(board.board[2][3], 2, 3, board.board,setBoard, board)}>{board.board[2][3]}</td>
                    <td id="24" onClick={() => HandleChange(board.board[2][4], 2, 4, board.board,setBoard, board)}>{board.board[2][4]}</td>
                    <td id="25" onClick={() => HandleChange(board.board[2][5], 2, 5, board.board,setBoard, board)}>{board.board[2][5]}</td>
                    <td id="26" onClick={() => HandleChange(board.board[2][6], 2, 6, board.board,setBoard, board)}>{board.board[2][6]}</td>
                    <td id="27" onClick={() => HandleChange(board.board[2][7], 2, 7, board.board,setBoard, board)}>{board.board[2][7]}</td>
                </tr>
                <tr>
                    <td id="30" onClick={() => HandleChange(board.board[3][0], 3, 0, board.board,setBoard, board)}>{board.board[3][0]}</td>
                    <td id="31" onClick={() => HandleChange(board.board[3][1], 3, 1, board.board,setBoard, board)}>{board.board[3][1]}</td>
                    <td id="32" onClick={() => HandleChange(board.board[3][2], 3, 2, board.board,setBoard, board)}>{board.board[3][2]}</td>
                    <td id="33" onClick={() => HandleChange(board.board[3][3], 3, 3, board.board,setBoard, board)}>{board.board[3][3]}</td>
                    <td id="34" onClick={() => HandleChange(board.board[3][4], 3, 4, board.board,setBoard, board)}>{board.board[3][4]}</td>
                    <td id="35" onClick={() => HandleChange(board.board[3][5], 3, 5, board.board,setBoard, board)}>{board.board[3][5]}</td>
                    <td id="36" onClick={() => HandleChange(board.board[3][6], 3, 6, board.board,setBoard, board)}>{board.board[3][6]}</td>
                    <td id="37" onClick={() => HandleChange(board.board[3][7], 3, 7, board.board,setBoard, board)}>{board.board[3][7]}</td>
                </tr>
                <tr>
                    <td id="40" onClick={() => HandleChange(board.board[4][0], 4, 0, board.board,setBoard, board)}>{board.board[4][0]}</td>
                    <td id="41" onClick={() => HandleChange(board.board[4][1], 4, 1, board.board,setBoard, board)}>{board.board[4][1]}</td>
                    <td id="42" onClick={() => HandleChange(board.board[4][2], 4, 2, board.board,setBoard, board)}>{board.board[4][2]}</td>
                    <td id="43" onClick={() => HandleChange(board.board[4][3], 4, 3, board.board,setBoard, board)}>{board.board[4][3]}</td>
                    <td id="44" onClick={() => HandleChange(board.board[4][4], 4, 4, board.board,setBoard, board)}>{board.board[4][4]}</td>
                    <td id="45" onClick={() => HandleChange(board.board[4][5], 4, 5, board.board,setBoard, board)}>{board.board[4][5]}</td>
                    <td id="46" onClick={() => HandleChange(board.board[4][6], 4, 6, board.board,setBoard, board)}>{board.board[4][6]}</td>
                    <td id="47" onClick={() => HandleChange(board.board[4][7], 4, 7, board.board,setBoard, board)}>{board.board[4][7]}</td>
                </tr>
                <tr>
                    <td id="50" onClick={() => HandleChange(board.board[5][0], 5, 0, board.board,setBoard, board)}>{board.board[5][0]}</td>
                    <td id="51" onClick={() => HandleChange(board.board[5][1], 5, 1, board.board,setBoard, board)}>{board.board[5][1]}</td>
                    <td id="52" onClick={() => HandleChange(board.board[5][2], 5, 2, board.board,setBoard, board)}>{board.board[5][2]}</td>
                    <td id="53" onClick={() => HandleChange(board.board[5][3], 5, 3, board.board,setBoard, board)}>{board.board[5][3]}</td>
                    <td id="54" onClick={() => HandleChange(board.board[5][4], 5, 4, board.board,setBoard, board)}>{board.board[5][4]}</td>
                    <td id="55" onClick={() => HandleChange(board.board[5][5], 5, 5, board.board,setBoard, board)}>{board.board[5][5]}</td>
                    <td id="56" onClick={() => HandleChange(board.board[5][6], 5, 6, board.board,setBoard, board)}>{board.board[5][6]}</td>
                    <td id="57" onClick={() => HandleChange(board.board[5][7], 5, 7, board.board,setBoard, board)}>{board.board[5][7]}</td>
                </tr>
                <tr>
                    <td id="60" onClick={() => HandleChange(board.board[6][0], 6, 0, board.board,setBoard, board)}>{board.board[6][0]}</td>
                    <td id="61" onClick={() => HandleChange(board.board[6][1], 6, 1, board.board,setBoard, board)}>{board.board[6][1]}</td>
                    <td id="62" onClick={() => HandleChange(board.board[6][2], 6, 2, board.board,setBoard, board)}>{board.board[6][2]}</td>
                    <td id="63" onClick={() => HandleChange(board.board[6][3], 6, 3, board.board,setBoard, board)}>{board.board[6][3]}</td>
                    <td id="64" onClick={() => HandleChange(board.board[6][4], 6, 4, board.board,setBoard, board)}>{board.board[6][4]}</td>
                    <td id="65" onClick={() => HandleChange(board.board[6][5], 6, 5, board.board,setBoard, board)}>{board.board[6][5]}</td>
                    <td id="66" onClick={() => HandleChange(board.board[6][6], 6, 6, board.board,setBoard, board)}>{board.board[6][6]}</td>
                    <td id="67" onClick={() => HandleChange(board.board[6][7], 6, 7, board.board,setBoard, board)}>{board.board[6][7]}</td>
                </tr>
                <tr>
                    <td id="70" onClick={() => HandleChange(board.board[7][0], 7, 0, board.board,setBoard, board)}>{board.board[7][0]}</td>
                    <td id="71" onClick={() => HandleChange(board.board[7][1], 7, 1, board.board,setBoard, board)}>{board.board[7][1]}</td>
                    <td id="72" onClick={() => HandleChange(board.board[7][2], 7, 2, board.board,setBoard, board)}>{board.board[7][2]}</td>
                    <td id="73" onClick={() => HandleChange(board.board[7][3], 7, 3, board.board,setBoard, board)}>{board.board[7][3]}</td>
                    <td id="74" onClick={() => HandleChange(board.board[7][4], 7, 4, board.board,setBoard, board)}>{board.board[7][4]}</td>
                    <td id="75" onClick={() => HandleChange(board.board[7][5], 7, 5, board.board,setBoard, board)}>{board.board[7][5]}</td>
                    <td id="76" onClick={() => HandleChange(board.board[7][6], 7, 6, board.board,setBoard, board)}>{board.board[7][6]}</td>
                    <td id="77" onClick={() => HandleChange(board.board[7][7], 7, 7, board.board,setBoard, board)}>{board.board[7][7]}</td>
                </tr>
            </tbody>
        </table>
    )
}


export default Board;