import {IEvent} from "../IEvent";
import {Direction} from "../IOutput";

export const eventInfos: IEvent = {
    nom: "Académie des mages",
    description: "Vous avez été accepté à l'académie des mages.",
    image: "mage_00",
    sorties: [
        {
            direction: Direction.up,
            nextEvent: "unknown"
        },
        {
            direction: Direction.down,
            nextEvent: "unknown"
        },
        {
            direction: Direction.left,
            nextEvent: "unknown"
        },
        {
            direction: Direction.right,
            nextEvent: "unknown"
        }],
    classe: "Mage"
}