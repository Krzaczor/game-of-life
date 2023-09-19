import Konva from "konva";
import { getColor } from "./getColor";
import type { Board } from "../vite-env";
import type { Shape } from "konva/lib/Shape";

export const createRectBoard = (datas: Board, size: number) => {
    return datas.map((row, y) => {
        return row.map((value, x) => {
            const rect = new Konva.Rect({
                x: x * size,
                y: y * size,
                width: size,
                height: size,
                fill: getColor(value),
                stroke: "#414141",
                isLive: value,
                coord: [x, y],
            });

            rect.on("click", ({ target }) => {
                const isLive = target.attrs.isLive;
                const [x, y] = target.attrs.coord;

                (target as Shape).fill(getColor(!isLive));
                target.attrs.isLive = !isLive;
                datas[y][x] = !isLive;
            });

            return rect;
        });
    });
};
