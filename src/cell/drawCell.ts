import { DEAD_COLOR, LIFE_COLOR, SIZE_RECT } from "../settings";

interface Params {
    i: number;
    j: number;
    isLife: boolean;
}

export const drawCell = (ctx: CanvasRenderingContext2D, { i, j, isLife }: Params) => {
    ctx.fillStyle = isLife ? LIFE_COLOR : DEAD_COLOR;
    ctx.fillRect(i * SIZE_RECT, j * SIZE_RECT, SIZE_RECT, SIZE_RECT);
    ctx.strokeStyle = "gray";
    ctx.strokeRect(i * SIZE_RECT, j * SIZE_RECT, SIZE_RECT, SIZE_RECT);
};
