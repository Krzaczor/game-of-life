/// <reference types="vite/client" />

import { Rect } from "konva/lib/shapes/Rect";

export type Box = boolean;
export type Row = Box[];
export type Board = Row[];

export type Item = {
    i: number;
    j: number;
    value: boolean;
};

export type Data = Item[];

export type SizeBoard = {
    x: number;
    y: number;
};

export type AppArgs = {
    datas: Board;
    boardSize: SizeBoard;
    rectes: Rect[][];
    startElement: HTMLButtonElement;
    clearElement: HTMLButtonElement;
};
