import {IEvent} from "../IEvent";
import {Direction} from "../IOutput";

export const eventInfos: IEvent = {
    nom: "Académie des mages",
    description: "Vous avez été accepté à l'académie des mages.",
    image: "mage_00",
    sorties: [
        {
            nom: "Vers le haut",
            direction: Direction.up
        },
        {
            nom: "Vers le bas",
            direction: Direction.down
        },
        {
            nom: "Vers la gauche",
            direction: Direction.left
        },
        {
            nom: "Vers la droite",
            direction: Direction.right
        }],
    classe: "Mage"
}