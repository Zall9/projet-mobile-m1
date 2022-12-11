import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "ForestTent",
  nom: "Aire de repos d'Yggdrisal",
  description: "Vous vous reposez dans l'aire de repos d'Yggdrisal.",
  image: "tent_forest",
  sorties: [
    {
      direction: Direction.left,
      nextEvent: "CaveEntry",
      willMinigame: true,
      whichMinigame: "Panier",
    },
    {
      direction: Direction.up,
      nextEvent: "CaveEntry",
      willMinigame: true,
      whichMinigame: "Memory",
    },
    {
      direction: Direction.right,
      nextEvent: "CaveEntry",
      willMinigame: false,
    },
  ],
};
