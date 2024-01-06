import { BOARD_X, BOARD_Y } from "../settings";
import { drawCell } from "../cell/drawCell";

export const drawBoard = (ctx: CanvasRenderingContext2D, board: boolean[][]) => {
    let j = 0;
    let i = 0;

    while (j < BOARD_Y) {
        i = 0;

        while (i < BOARD_X) {
            drawCell(ctx, { i, j, isLife: board[j][i] });
            ++i;
        }
        ++j;
    }
};
