import {CaseTemplate, IMinigame, MinigamePlayer} from "../IMinigame";
import React from "react";

export const minigameInfos: IMinigame = {
    setLogicGrid(): void {
    },
    evolve(): void {
    },
    setUpdateGrid: () => null,
    ViewGrid(): React.ReactElement {
        return null as unknown as React.ReactElement;
    },
    caseTemplateCreate(): CaseTemplate {
        return null as unknown as CaseTemplate;
    },
    player: null as unknown as MinigamePlayer,
    playerInput(): void {
    },
    nbCol: 0,
    nbRow: 0,
    score: 0,

    init(): void {
    },
    update(): void {
    }
};