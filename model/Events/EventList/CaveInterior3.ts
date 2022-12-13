import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "CaveInterior3",
  nom: "Le bout du tunnel",
  description: " Vous êtes au bout de la grotte.",
  image: "cave_interior_1",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "CaveOut",
      willMinigame: Math.random() > 0.5,
    },
  ],
};
