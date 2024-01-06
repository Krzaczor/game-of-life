import { fill } from "../helpers/fill";
import { BOARD_X, BOARD_Y } from "../settings";
import type { Cell, Row } from "../vite-env";

export const createBoard = () => {
    return fill<Row>(Array(BOARD_Y), () => fill<Cell>(Array(BOARD_X), () => false));
};
