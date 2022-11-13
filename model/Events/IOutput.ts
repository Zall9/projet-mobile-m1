export abstract class IOutput {
    abstract nom: string;
    abstract direction: Direction;
    // TODO préciser quoi mettre de plus dans l'output
}

export enum Direction {
    up,
    down,
    left,
    right
}