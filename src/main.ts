import Konva from "konva";
import { createBoard, createRectBoard, appStrategy, strategy } from "./helpers";

import "./style.css";

const startElement = document.querySelector<HTMLButtonElement>("#start");
const clearElement = document.querySelector<HTMLButtonElement>("#clear");

if (!startElement || !clearElement) {
    throw Error("startElement or clearElement not found");
}

const BOARD_X = 100;
const BOARD_Y = 60;
const SIZE_RECT = 12;

const boardSize = {
    x: BOARD_X,
    y: BOARD_Y,
};

const datas = createBoard(boardSize);
const rectes = createRectBoard(datas, SIZE_RECT);

const stage = new Konva.Stage({
    container: "app",
    width: BOARD_X * SIZE_RECT,
    height: BOARD_Y * SIZE_RECT,
});

const layer = new Konva.Layer();

layer.add(...rectes.flat());
stage.add(layer);
layer.drawScene();

// withWorker or withoutWorker in strategy
const app = appStrategy(strategy.withoutWorker);
app({ datas, rectes, boardSize, startElement, clearElement });
