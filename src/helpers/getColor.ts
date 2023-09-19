import type { Box } from "../vite-env";

const LIVE = "#0eb100";
const DEAD = "#e0e0e0";

export const getColor = (value: Box) => {
    return value ? LIVE : DEAD;
};
