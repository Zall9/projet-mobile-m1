import {Dispatch, ReactElement, SetStateAction} from "react";
import {Direction} from "../Events/IOutput";

export abstract class IMinigame {
    abstract nbRow: number;
    abstract nbCol: number;
    abstract ViewGrid: (logicGrid: GridMinigame) => ReactElement;
    abstract player: MinigamePlayer;
    score = 0;
    abstract caseTemplateCreate: () => CaseTemplate;

    abstract init(logicGrid: GridMinigame, setLogicGrid: SetGridMinigame): void;

    abstract update(logicGrid: GridMinigame, setLogicGrid: SetGridMinigame): void;
}

export type GridMinigame = Map<string, CaseTemplate[]>;
export type SetGridMinigame = Dispatch<SetStateAction<GridMinigame>>;

export interface MinigamePlayer {
    position: Coordinates;
    direction: Direction[];
}

type Coordinates = {
    x: number,
    y: string
}

export interface CaseTemplate {
}