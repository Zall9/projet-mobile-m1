import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "CaveInterior2",
  nom: "",
  description: "",
  image: "cave_interior_2",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "CaveInterior3",
      willMinigame: true,
      whichMinigame: "RPS"
    }
  ],
};
