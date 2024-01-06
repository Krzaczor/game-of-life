export const rgbaToHex = (color: number[]) => {
    return (
        "#" +
        color
            .map((v) => ("0" + v.toString(16)).slice(-2))
            .slice(0, 3)
            .join("")
    );
};
