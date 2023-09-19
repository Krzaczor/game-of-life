import type { Board } from "../vite-env";

type Size = {
    x: number;
    y: number;
};

export const createBoard = ({ x, y }: Size): Board => {
    return Array(y)
        .fill(false)
        .map(() => Array(x).fill(false));
};
