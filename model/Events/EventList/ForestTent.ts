import {IEvent} from "../IEvent";
import {Direction} from "../IOutput";

export const eventInfos: IEvent = {
    nom: "Aire de repos d'Yggdrisal",
    description: "Vous vous reposez dans l'aire de repos d'Yggdrisal.",
    image: "tent_forest",
    sorties: [
        {
            direction: Direction.up,
            nextEvent: "StartingEventMage",
            willMinigame: true,
            whichMinigame: "Memory",
        },
        {
            direction: Direction.down,
            nextEvent: "StartingEventMage",
            willMinigame: true,
            whichMinigame: "Panier",
        },
        {
            direction: Direction.left,
            nextEvent: "StartingEventMage",
            willMinigame: true,
            whichMinigame: "RPS",
        },
        {
            direction: Direction.right,
            nextEvent: "StartingEventMage",
            willMinigame: true,
        },
    ],
};
