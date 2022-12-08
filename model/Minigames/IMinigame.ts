import {Dispatch, ReactElement, SetStateAction} from "react";
import {Direction} from "../Events/IOutput";

export abstract class IMinigame {
    abstract nbRow: number;
    abstract nbCol: number;
    abstract player: MinigamePlayer;
    score = 0;
    scoreTresh = 0;
    abstract setUpdateGrid: SetUpdateGrid;
    abstract setLogicGrid: SetGridMinigame;
    /**
     * Function to call if you need to create a case
     */
    abstract caseTemplateCreate: () => CaseTemplate;
    /**
     * Grid view of the game
     */
    abstract ViewGrid: (logicGrid: GridMinigame) => ReactElement;
    abstract refreshInterval: number;

    /**
     * Initialize the minigame
     * @param logicGrid
     * @param setUpdateGrid
     * @param setGridMinigame
     */
    abstract init(
        logicGrid: GridMinigame,
        setUpdateGrid: SetUpdateGrid,
        setGridMinigame: SetGridMinigame
    ): void;

    /**
     * When you need to refresh the view, call this
     * @param logicGrid
     */
    abstract update(logicGrid: GridMinigame): void;

    /**
     * When the player performs an input, call this
     * @param input
     * @param logicGrid
     */
    abstract playerInput(input: string, logicGrid: GridMinigame): void;

    /**
     * When you need the game to evolve without the player (for example, makes the fruits goes down one step), call this
     * @param logicGrid
     */
    abstract evolve(logicGrid: GridMinigame): void;

    /**
     * This is where you put external controls for the player, when it isnt implemented from the grid itself
     * @constructor
     */
    abstract Controls(logicGrid: GridMinigame): ReactElement;
}

export type GridMinigame = Map<string, CaseTemplate[]>;
export type SetGridMinigame = Dispatch<SetStateAction<GridMinigame>>;
export type SetUpdateGrid = Dispatch<SetStateAction<boolean>>;

export interface MinigamePlayer {
    position: Coordinates;
    direction: Direction[];
}

type Coordinates = {
    x: number;
    y: string;
};

export interface CaseTemplate {
}
