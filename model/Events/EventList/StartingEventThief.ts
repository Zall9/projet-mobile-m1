import { IEvent } from "../IEvent";
import { Direction } from "../IOutput";

export const eventInfos: IEvent = {
  id: "StartingEventThief",
  nom: "Taverne ",
  description: "",
  image: "thief_00",
  sorties: [
    {
      direction: Direction.up,
      nextEvent: "CaveEntry",
      willMinigame: false,
    },
  ],
  classe: "Thief",
};
