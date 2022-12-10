import { CaseTemplate, IMinigame, MinigamePlayer } from "../IMinigame";
import React, { ReactElement } from "react";

export const minigameInfos: IMinigame = {
  Controls(): React.ReactElement {
    return undefined as unknown as ReactElement;
  },
  refreshInterval: 0,
  setLogicGrid(): void {},
  evolve(): void {},
  setUpdateGrid: () => null,
  ViewGrid(): React.ReactElement {
    return null as unknown as React.ReactElement;
  },
  caseTemplateCreate(): CaseTemplate {
    return null as unknown as CaseTemplate;
  },
  player: null as unknown as MinigamePlayer,
  playerInput(): void {},
  nbCol: 0,
  nbRow: 0,
  score: 0,
  scoreTresh: 0,

  init(): void {},
  update(): void {},
};
