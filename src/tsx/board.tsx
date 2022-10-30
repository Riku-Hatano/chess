import react, { useState } from "react"
import HandleChange from "../ts/handleChange"
import "../css/board.css"

const Board = () => {
    const [board, setBoard] = useState({
        board: [
            ["bR", "bKn", "bB", "bQ", "bK", "bB", "bB", "bKn", "bR"],
            ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
            ["wR", "wKn", "wB", "wQ", "wK", "wB", "wKn", "wR"]
        ],
        isWhite: true,
        isPointed: false,
    })
    return (
        <table>
            <tbody>
                <tr>
                    <td onClick={() => HandleChange(board.board[0][0], 0, 1, board.board,setBoard, board)}>{board.board[0][0]}</td>
                    <td onClick={() => HandleChange(board.board[0][1], 0, 2, board.board,setBoard, board)}>{board.board[0][1]}</td>
                    <td onClick={() => HandleChange(board.board[0][2], 0, 3, board.board,setBoard, board)}>{board.board[0][2]}</td>
                    <td onClick={() => HandleChange(board.board[0][3], 0, 4, board.board,setBoard, board)}>{board.board[0][3]}</td>
                    <td onClick={() => HandleChange(board.board[0][4], 0, 5, board.board,setBoard, board)}>{board.board[0][4]}</td>
                    <td onClick={() => HandleChange(board.board[0][5], 0, 6, board.board,setBoard, board)}>{board.board[0][5]}</td>
                    <td onClick={() => HandleChange(board.board[0][6], 0, 7, board.board,setBoard, board)}>{board.board[0][6]}</td>
                    <td onClick={() => HandleChange(board.board[0][7], 0, 8, board.board,setBoard, board)}>{board.board[0][7]}</td>
                </tr>
                <tr>
                    <td onClick={() => HandleChange(board.board[1][0], 1, 0, board.board,setBoard, board)}>{board.board[1][0]}</td>
                    <td onClick={() => HandleChange(board.board[1][1], 1, 1, board.board,setBoard, board)}>{board.board[1][1]}</td>
                    <td onClick={() => HandleChange(board.board[1][2], 1, 2, board.board,setBoard, board)}>{board.board[1][2]}</td>
                    <td onClick={() => HandleChange(board.board[1][3], 1, 3, board.board,setBoard, board)}>{board.board[1][3]}</td>
                    <td onClick={() => HandleChange(board.board[1][4], 1, 4, board.board,setBoard, board)}>{board.board[1][4]}</td>
                    <td onClick={() => HandleChange(board.board[1][5], 1, 5, board.board,setBoard, board)}>{board.board[1][5]}</td>
                    <td onClick={() => HandleChange(board.board[1][6], 1, 6, board.board,setBoard, board)}>{board.board[1][6]}</td>
                    <td onClick={() => HandleChange(board.board[1][7], 1, 7, board.board,setBoard, board)}>{board.board[1][7]}</td>
                </tr>
                <tr>
                    <td onClick={() => HandleChange(board.board[2][0], 2, 0, board.board,setBoard, board)}>{board.board[2][0]}</td>
                    <td onClick={() => HandleChange(board.board[2][1], 2, 1, board.board,setBoard, board)}>{board.board[2][1]}</td>
                    <td onClick={() => HandleChange(board.board[2][2], 2, 2, board.board,setBoard, board)}>{board.board[2][2]}</td>
                    <td onClick={() => HandleChange(board.board[2][3], 2, 3, board.board,setBoard, board)}>{board.board[2][3]}</td>
                    <td onClick={() => HandleChange(board.board[2][4], 2, 4, board.board,setBoard, board)}>{board.board[2][4]}</td>
                    <td onClick={() => HandleChange(board.board[2][5], 2, 5, board.board,setBoard, board)}>{board.board[2][5]}</td>
                    <td onClick={() => HandleChange(board.board[2][6], 2, 6, board.board,setBoard, board)}>{board.board[2][6]}</td>
                    <td onClick={() => HandleChange(board.board[2][7], 2, 7, board.board,setBoard, board)}>{board.board[2][7]}</td>
                </tr>
                <tr>
                    <td onClick={() => HandleChange(board.board[3][0], 3, 0, board.board,setBoard, board)}>{board.board[3][0]}</td>
                    <td onClick={() => HandleChange(board.board[3][1], 3, 1, board.board,setBoard, board)}>{board.board[3][1]}</td>
                    <td onClick={() => HandleChange(board.board[3][2], 3, 2, board.board,setBoard, board)}>{board.board[3][2]}</td>
                    <td onClick={() => HandleChange(board.board[3][3], 3, 3, board.board,setBoard, board)}>{board.board[3][3]}</td>
                    <td onClick={() => HandleChange(board.board[3][4], 3, 4, board.board,setBoard, board)}>{board.board[3][4]}</td>
                    <td onClick={() => HandleChange(board.board[3][5], 3, 5, board.board,setBoard, board)}>{board.board[3][5]}</td>
                    <td onClick={() => HandleChange(board.board[3][6], 3, 6, board.board,setBoard, board)}>{board.board[3][6]}</td>
                    <td onClick={() => HandleChange(board.board[3][7], 3, 7, board.board,setBoard, board)}>{board.board[3][7]}</td>
                </tr>
                <tr>
                    <td onClick={() => HandleChange(board.board[4][0], 4, 0, board.board,setBoard, board)}>{board.board[4][0]}</td>
                    <td onClick={() => HandleChange(board.board[4][1], 4, 1, board.board,setBoard, board)}>{board.board[4][1]}</td>
                    <td onClick={() => HandleChange(board.board[4][2], 4, 2, board.board,setBoard, board)}>{board.board[4][2]}</td>
                    <td onClick={() => HandleChange(board.board[4][3], 4, 3, board.board,setBoard, board)}>{board.board[4][3]}</td>
                    <td onClick={() => HandleChange(board.board[4][4], 4, 4, board.board,setBoard, board)}>{board.board[4][4]}</td>
                    <td onClick={() => HandleChange(board.board[4][5], 4, 5, board.board,setBoard, board)}>{board.board[4][5]}</td>
                    <td onClick={() => HandleChange(board.board[4][6], 4, 6, board.board,setBoard, board)}>{board.board[4][6]}</td>
                    <td onClick={() => HandleChange(board.board[4][7], 4, 7, board.board,setBoard, board)}>{board.board[4][7]}</td>
                </tr>
                <tr>
                    <td onClick={() => HandleChange(board.board[5][0], 5, 0, board.board,setBoard, board)}>{board.board[5][0]}</td>
                    <td onClick={() => HandleChange(board.board[5][1], 5, 1, board.board,setBoard, board)}>{board.board[5][1]}</td>
                    <td onClick={() => HandleChange(board.board[5][2], 5, 2, board.board,setBoard, board)}>{board.board[5][2]}</td>
                    <td onClick={() => HandleChange(board.board[5][3], 5, 3, board.board,setBoard, board)}>{board.board[5][3]}</td>
                    <td onClick={() => HandleChange(board.board[5][4], 5, 4, board.board,setBoard, board)}>{board.board[5][4]}</td>
                    <td onClick={() => HandleChange(board.board[5][5], 5, 5, board.board,setBoard, board)}>{board.board[5][5]}</td>
                    <td onClick={() => HandleChange(board.board[5][6], 5, 6, board.board,setBoard, board)}>{board.board[5][6]}</td>
                    <td onClick={() => HandleChange(board.board[5][7], 5, 7, board.board,setBoard, board)}>{board.board[5][7]}</td>
                </tr>
                <tr>
                    <td onClick={() => HandleChange(board.board[6][0], 6, 0, board.board,setBoard, board)}>{board.board[6][0]}</td>
                    <td onClick={() => HandleChange(board.board[6][1], 6, 1, board.board,setBoard, board)}>{board.board[6][1]}</td>
                    <td onClick={() => HandleChange(board.board[6][2], 6, 2, board.board,setBoard, board)}>{board.board[6][2]}</td>
                    <td onClick={() => HandleChange(board.board[6][3], 6, 3, board.board,setBoard, board)}>{board.board[6][3]}</td>
                    <td onClick={() => HandleChange(board.board[6][4], 6, 4, board.board,setBoard, board)}>{board.board[6][4]}</td>
                    <td onClick={() => HandleChange(board.board[6][5], 6, 5, board.board,setBoard, board)}>{board.board[6][5]}</td>
                    <td onClick={() => HandleChange(board.board[6][6], 6, 6, board.board,setBoard, board)}>{board.board[6][6]}</td>
                    <td onClick={() => HandleChange(board.board[6][7], 6, 7, board.board,setBoard, board)}>{board.board[6][7]}</td>
                </tr>
                <tr>
                    <td onClick={() => HandleChange(board.board[7][0], 7, 0, board.board,setBoard, board)}>{board.board[7][0]}</td>
                    <td onClick={() => HandleChange(board.board[7][1], 7, 1, board.board,setBoard, board)}>{board.board[7][1]}</td>
                    <td onClick={() => HandleChange(board.board[7][2], 7, 2, board.board,setBoard, board)}>{board.board[7][2]}</td>
                    <td onClick={() => HandleChange(board.board[7][3], 7, 3, board.board,setBoard, board)}>{board.board[7][3]}</td>
                    <td onClick={() => HandleChange(board.board[7][4], 7, 4, board.board,setBoard, board)}>{board.board[7][4]}</td>
                    <td onClick={() => HandleChange(board.board[7][5], 7, 5, board.board,setBoard, board)}>{board.board[7][5]}</td>
                    <td onClick={() => HandleChange(board.board[7][6], 7, 6, board.board,setBoard, board)}>{board.board[7][6]}</td>
                    <td onClick={() => HandleChange(board.board[7][7], 7, 7, board.board,setBoard, board)}>{board.board[7][7]}</td>
                </tr>
            </tbody>
        </table>
    )
}


export default Board;