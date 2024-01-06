import { BOARD_X, BOARD_Y, SIZE_RECT } from "./settings";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

if (ctx === null) {
    throw Error("i'm sorry but browser not support canvas 2d");
}

canvas.width = BOARD_X * SIZE_RECT;
canvas.height = BOARD_Y * SIZE_RECT;
canvas.style.border = "1px solid #999";

export const getCanvas = () => canvas;
export const getContext = () => ctx;
