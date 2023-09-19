import { getCountLifeBox } from "../../helpers";
import type { Board, Data, SizeBoard } from "../../vite-env";

type WorkerData = {
    datas: Board;
    boardSize: SizeBoard;
};

self.onmessage = ({ data }: { data: WorkerData }) => {
    const { datas, boardSize } = data;
    const { x, y } = boardSize;
    const newBoard: Data = [];

    for (let i = 0; i < y; ++i) {
        for (let j = 0; j < x; ++j) {
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

    self.postMessage(newBoard);
};
