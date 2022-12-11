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
    {
      direction: Direction.down,
      nextEvent: "StartingEventMage",
      willMinigame: false,
    },
    {
      direction: Direction.left,
      nextEvent: "StartingEventMage",
      willMinigame: false,
    },
    {
      direction: Direction.right,
      nextEvent: "StartingEventMage",
      willMinigame: false,
    },
  ],
  classe: "Mage",
};