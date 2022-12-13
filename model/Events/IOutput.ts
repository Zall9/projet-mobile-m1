export abstract class IOutput {
  abstract direction: Direction;
  abstract nextEvent: string;
  abstract willMinigame: boolean;
  abstract whichMinigame?: string;
}

export enum Direction {
  up,
  right,
  down,
  left,
}

export const Unknown: IOutput = {
  nextEvent: "",
  willMinigame: false,
  direction: Direction.up,
};
