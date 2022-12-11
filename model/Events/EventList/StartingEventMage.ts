import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "StartingEventMage",
  nom: "Académie des mages",
  description: "Vous avez été accepté à l'académie des mages.",
  image: "mage_00",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "ForestTent",
      willMinigame: false,
    },
  ],
  classe: "Mage",
};