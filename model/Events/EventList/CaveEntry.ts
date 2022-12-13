import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "CaveEntry",
  nom: "Entrée de la grotte de la skow",
  description: "Vous entrez dans une grotte.",
  image: "cave_entry",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "CaveInterior1",
      willMinigame: true,
    },
    {
      direction: Direction.down,
      nextEvent: "ForestTent",
      willMinigame: false,
    },
  ],
};
