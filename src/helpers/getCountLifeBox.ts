import type { Board, SizeBoard } from "../vite-env";

export const getCountLifeBox = (
    datas: Board,
    i: number,
    j: number,
    boardSize: SizeBoard,
) => {
    const { x: maxCols, y: maxRows } = boardSize;

    return [
        i > 0 && j > 0 ? datas[i - 1][j - 1] : false,
        i > 0 ? datas[i - 1][j] : false,
        i > 0 && j <= maxCols - 2 ? datas[i - 1][j + 1] : false,
        j > 0 ? datas[i][j - 1] : false,
        j <= maxCols - 2 ? datas[i][j + 1] : false,
        i <= maxRows - 2 && j > 0 ? datas[i + 1][j - 1] : false,
        i <= maxRows - 2 ? datas[i + 1][j] : false,
        i <= maxRows - 2 && j <= maxCols - 2 ? datas[i + 1][j + 1] : false,
    ].filter((cell) => cell).length;
};
