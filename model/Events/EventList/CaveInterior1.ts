import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "CaveInterior1",
  nom: "Grotte de la skow",
  description: " Vous êtes dans une grotte.",
  image: "cave_interior_1",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "CaveInterior2",
      willMinigame: true,
      whichMinigame: Math.random() > 0.5 ? "Snek" : "RPS",
    },
  ],
};
