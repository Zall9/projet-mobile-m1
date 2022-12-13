import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "CaveOut",
  nom: "La sortie de la grotte de la skow",
  description: "Vous sortez de la grotte.",
  image: "cave_out",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "ForestTent",
      willMinigame: false,
    },
  ],
};
