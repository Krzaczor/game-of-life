import appWithWorker from "../strategy/withWorker/appWithWorker";
import appWithoutWorker from "../strategy/withoutWorker/appWithoutWorker";

export const strategy = {
    withWorker: appWithWorker,
    withoutWorker: appWithoutWorker,
};

export const appStrategy = <T = {}>(strategy: (args: T) => void) => {
    return (args: T) => {
        strategy(args);
    };
};
