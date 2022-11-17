export abstract class IOutput {
    abstract direction: Direction;
    abstract nextEvent: string;
    abstract willMinigame: boolean;
    abstract whichMinigame?: string;
    // TODO préciser quoi mettre de plus dans l'output
}

export enum Direction {
    up,
    down,
    left,
    right
}