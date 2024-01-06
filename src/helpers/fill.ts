export const fill = <T>(arr: T[], fn: (v: T, i: number, r: T[]) => T) => {
    return arr.fill(null!).map(fn);
};
