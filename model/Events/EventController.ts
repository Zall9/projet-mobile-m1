import { IEvent } from "./IEvent";
import Constants from "../Constants";

let eventIdList: string[];

export class EventController {
  static init() {
    eventIdList = ["ForestTent"];
  }

  static getById(id: string): IEvent {
    try {
      return require(`./EventList/${id}.ts`).eventInfos;
    } catch {
      return require(`./EventList/Unknown.ts`).eventInfos;
    }
  }

  static getEventsByIds(ids: string[]): IEvent[] {
    return ids.map((id) => this.getById(id));
  }

  static getImage(eventInfos: IEvent): string {
    return eventInfos.image === "unknown"
      ? Constants.UNKNOWN_PATH
      : `${Constants.IMAGE_PATH}events/${eventInfos.image}${Constants.IMAGE_EXT}`;
  }

  static pickRandomEvent(): IEvent {
    return this.pickRandomEventInIdList(
      eventIdList.filter((v) => v !== "Unknown")
    );
  }

  static pickRandomEventInIdList(ids: string[]): IEvent {
    return this.getById(ids[Math.floor(Math.random() * ids.length)]);
  }

  static getByClassRequirement(classe: string): IEvent {
    const foundIEvent: IEvent = this.getById("StartingEvent" + classe);
    return foundIEvent.id !== "Unknown" ? foundIEvent : this.pickRandomEvent();
  }
}
