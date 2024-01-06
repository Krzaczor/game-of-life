import { BOARD_X, BOARD_Y } from "../settings";
import { drawCell } from "../cell/drawCell";
import { Board } from "../vite-env";

export const boardRandom = (ctx: CanvasRenderingContext2D) => {
    const nextBoard: Board = [];

    let j = 0;
    let i = 0;

    while (j < BOARD_Y) {
        nextBoard[j] = [];
        i = 0;

        while (i < BOARD_X) {
            const isLife = Math.random() > 0.8;
            nextBoard[j][i] = isLife;
            drawCell(ctx, { i, j, isLife });
            ++i;
        }
        ++j;
    }

    return nextBoard;
};
