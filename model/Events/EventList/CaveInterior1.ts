import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "CaveInterior1",
  nom: "",
  description: "",
  image: "cave_interior_1",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "CaveInterior2",
      willMinigame: true,
      whichMinigame: "RPS"
    }
  ],
};
