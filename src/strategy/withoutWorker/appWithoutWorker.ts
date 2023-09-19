import Konva from "konva";
import { getColor, getCountLifeBox } from "../../helpers";
import type { AppArgs } from "../../vite-env";

export default ({ datas, rectes, boardSize, startElement, clearElement }: AppArgs) => {
    let runGame = false;

    const animate = new Konva.Animation(() => {
        if (!runGame) {
            return;
        }

        const newBoard = [];

        for (let i = 0; i < datas.length; ++i) {
            for (let j = 0; j < datas[i].length; ++j) {
                const isLive = datas[i][j];
                const liveNeighbours = getCountLifeBox(datas, i, j, boardSize);
                if (isLive) {
                    if (liveNeighbours < 2 || liveNeighbours > 3) {
                        newBoard.push({ i, j, value: false });
                    } else {
                        newBoard.push({ i, j, value: true });
                    }
                } else {
                    if (liveNeighbours === 3) {
                        newBoard.push({ i, j, value: true });
                    } else {
                        newBoard.push({ i, j, value: false });
                    }
                }
            }
        }

        newBoard.forEach(({ i, j, value }) => {
            const rect = rectes[i][j];
            if (rect.attrs.isLive !== value) {
                rect.attrs.isLive = value;
                rect.fill(getColor(value));
                datas[i][j] = value;
            }
        });
    });

    const toggleAnimate = () => {
        if (runGame) {
            startElement.textContent = "stop";
            animate.start();
            return;
        }

        startElement.textContent = "start";
        animate.stop();
    };

    document.addEventListener("keyup", (event) => {
        if (event.code === "Space") {
            runGame = !runGame;
            toggleAnimate();
        }
    });

    startElement.addEventListener("click", () => {
        runGame = !runGame;
        toggleAnimate();
    });

    clearElement.addEventListener("click", () => {
        runGame = false;
        toggleAnimate();

        for (let i = 0; i < datas.length; ++i) {
            for (let j = 0; j < datas[i].length; ++j) {
                const rect = rectes[i][j];
                rect.attrs.isLive = false;
                rect.fill(getColor(false));
                datas[i][j] = false;
            }
        }
    });
};
