import { BOARD_X, BOARD_Y } from "../settings";
import { getCountLifeBox } from "../helpers/getCountLifeBox";
import { Board } from "../vite-env";
import { drawCell } from "../cell/drawCell";

export const boardUpdate = (ctx: CanvasRenderingContext2D, board: Board) => {
    const nextBoard: Board = [];

    let j = 0;
    let i = 0;
    let value: boolean;

    let isLife: boolean;
    let liveNeighbours: number;

    while (j < BOARD_Y) {
        nextBoard[j] = [];
        i = 0;

        while (i < BOARD_X) {
            isLife = board[j][i];
            liveNeighbours = getCountLifeBox(board, j, i);

            if (isLife) {
                if (liveNeighbours < 2 || liveNeighbours > 3) {
                    value = false;
                } else {
                    value = true;
                }
            } else {
                if (liveNeighbours === 3) {
                    value = true;
                } else {
                    value = false;
                }
            }

            if (value !== isLife) {
                drawCell(ctx, { i, j, isLife: value });
            }

            nextBoard[j][i] = value;
            ++i;
        }
        ++j;
    }

    return nextBoard;
};
