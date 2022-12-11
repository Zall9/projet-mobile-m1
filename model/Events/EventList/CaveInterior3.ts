import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "CaveInterior3",
  nom: "",
  description: "",
  image: "cave_interior_1",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "CaveOut",
      willMinigame: Math.random() > 0.5,
    },
  ],
};
