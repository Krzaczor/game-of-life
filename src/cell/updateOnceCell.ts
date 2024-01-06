import { SIZE_RECT } from "../settings";
import { drawCell } from "./drawCell";
import type { Board } from "../vite-env";

interface Params {
    offsetX: number;
    offsetY: number;
    isLife: boolean;
}

export const updateOnceCell = (
    ctx: CanvasRenderingContext2D,
    board: Board,
    { offsetX, offsetY, isLife }: Params,
) => {
    const i = (offsetX - (offsetX % SIZE_RECT)) / SIZE_RECT;
    const j = (offsetY - (offsetY % SIZE_RECT)) / SIZE_RECT;

    if (board[j][i] === isLife) {
        return;
    }

    board[j][i] = isLife;
    drawCell(ctx, { i, j, isLife });
};
