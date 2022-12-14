import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "StartingEventWarrior",
  nom: "",
  description: "",
  image: "warrior_00",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "ForestTent",
      willMinigame: true,
      whichMinigame: "Panier",
    },
  ],
  classe: "Guerrier",
};
