import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "CaveOut",
  nom: "",
  description: "",
  image: "cave_out",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "ForestTent",
      willMinigame: false,
    },
  ],
};
