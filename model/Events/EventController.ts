import { IEvent } from "./IEvent";
import Constants from "../Constants";

let eventIdList: string[];

/* La classe EventController est une classe statique qui contient une méthode statique appelée init.

La méthode init est appelée au démarrage du jeu.

La méthode init crée une liste d'identifiants d'événement.

Les eventIds sont utilisés pour identifier les événements qui sont dans le jeu. */
export class EventController {
  static init() {
    eventIdList = ["ForestTent", "CaveEntry"];
  }

  /**
   * Il prend un identifiant sous forme de chaîne et renvoie un IEvent
   * @param {string} id - L'identifiant de l'événement.
   * @returns L'objet eventInfos du fichier.
   */
  static getById(id: string): IEvent {
    try {
      return require(`./EventList/${id}.ts`).eventInfos;
    } catch {
      return require(`./EventList/Unknown.ts`).eventInfos;
    }
  }

  /**
   * Il prend un tableau de chaînes et renvoie un tableau d'événements
   * @param {string[]} ids - string[] - un tableau d'identifiants d'événements
   * @returns Une panoplie d'événements.
   */
  static getEventsByIds(ids: string[]): IEvent[] {
    return ids.map((id) => this.getById(id));
  }

  /**
   * Il renvoie le chemin de l'image de l'événement
   * @param {IEvent} eventInfos - IEvent - il s'agit de l'objet événement transmis depuis le composant parent.
   * @returns Le chemin de l'image de l'événement.
   */
  static getImage(eventInfos: IEvent): string {
    return eventInfos.image === "unknown"
      ? Constants.UNKNOWN_PATH
      : `${Constants.IMAGE_PATH}events/${eventInfos.image}${Constants.IMAGE_EXT}`;
  }

  /**
   * > Il renvoie un événement aléatoire de la liste des événements, à l'exclusion de l'événement "Inconnu"
   * @returns Un événement aléatoire de eventIdList.
   */
  static pickRandomEvent(): IEvent {
    return this.pickRandomEventInIdList(
      eventIdList.filter((v) => v !== "Unknown")
    );
  }

  /**
   * "Renvoie un événement aléatoire de la liste des événements avec les identifiants donnés."
   *
   * La première ligne de la fonction est un commentaire. Les commentaires sont ignorés par le compilateur
   * @param {string[]} ids - string[] - Un tableau d'ID d'événement.
   * @returns Un objet événement
   */
  static pickRandomEventInIdList(ids: string[]): IEvent {
    return this.getById(ids[Math.floor(Math.random() * ids.length)]);
  }

  /**
   * Il renvoie un événement qui correspond à la classe du joueur. S'il n'en trouve pas, il renvoie un événement aléatoire
   * @param {string} classe - string - La classe du caractère.
   * @returns Un objet IEvent
   */
  static getByClassRequirement(classe: string): IEvent {
    const foundIEvent: IEvent = this.getById("StartingEvent" + classe);
    return foundIEvent.id !== "Unknown" ? foundIEvent : this.pickRandomEvent();
  }
}
