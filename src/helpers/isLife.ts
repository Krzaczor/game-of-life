import { LIFE_COLOR } from "../settings";

export const isLife = <C extends string>(color: C) => {
    return color === LIFE_COLOR;
};
