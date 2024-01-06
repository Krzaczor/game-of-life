import { getContext, getCanvas } from "./createCanvas";
import { isLife } from "./helpers/isLife";
import { rgbaToHex } from "./helpers/rgbaToHex";
import { createBoard } from "./board/createBoard";
import { boardRandom } from "./board/boardRandom";
import { boardUpdate } from "./board/boardUpdate";
import { drawBoard } from "./board/drawBoard";
import { updateOnceCell } from "./cell/updateOnceCell";

import "./style.css";

const startElement = document.querySelector("#start") as HTMLButtonElement;
const clearElement = document.querySelector("#clear") as HTMLButtonElement;
const randomElement = document.querySelector("#random") as HTMLButtonElement;
const stepElement = document.querySelector("#step") as HTMLButtonElement;
const appElement = document.querySelector<HTMLDivElement>("#app");

const canvas = getCanvas();
const ctx = getContext();
appElement?.append(canvas);

let grid = createBoard();
let isRun = false;

const animation = () => {
    if (!isRun) {
        return;
    }

    grid = boardUpdate(ctx, grid);
    requestAnimationFrame(animation);
};

const startHandler = () => {
    isRun = !isRun;

    if (!isRun) {
        startElement.textContent = "start";
        return;
    }

    startElement.textContent = "stop";
    animation();
};

const randomHandler = () => {
    grid = boardRandom(ctx);
};

const clearHandler = () => {
    isRun = false;
    grid = grid.map((row) => row.map(() => false));
    drawBoard(ctx, grid);
};

const stepHandler = () => {
    isRun = false;
    grid = boardUpdate(ctx, grid);
};

let move = false;
let modeLife: boolean;

const mouseDownHandler = ({ offsetX, offsetY }: MouseEvent) => {
    isRun = false;
    move = true;

    const colorPixel = [...ctx.getImageData(offsetX, offsetY, 1, 1).data];
    modeLife = !isLife(rgbaToHex(colorPixel));

    updateOnceCell(ctx, grid, { offsetX, offsetY, isLife: modeLife });
};

const mouseMoveHandler = ({ offsetX, offsetY }: MouseEvent) => {
    if (!move) {
        return;
    }

    updateOnceCell(ctx, grid, { offsetX, offsetY, isLife: modeLife });
};

const mouseUpHandler = () => {
    move = false;
};

randomElement?.addEventListener("click", randomHandler);
startElement.addEventListener("click", startHandler);
clearElement.addEventListener("click", clearHandler);
stepElement?.addEventListener("click", stepHandler);

canvas.addEventListener("mousedown", mouseDownHandler);
canvas.addEventListener("mousemove", mouseMoveHandler);
canvas.addEventListener("mouseup", mouseUpHandler);

drawBoard(ctx, grid);
