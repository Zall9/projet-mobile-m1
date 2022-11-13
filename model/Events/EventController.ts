import {IEvent} from "./IEvent";
import Constants from "../Constants";

let eventIdList: string[];

export async function getStaticPropsEvent(): Promise<string[]> {
    const {readdirSync} = await import('fs');
    return readdirSync('./model/Events/EventList/').map((file: string) => {
        return file.slice(0, -3);
    });
}

export class EventController {
    static init(initializer: string[]) {
        eventIdList = initializer.slice();
    }
    static getById(id: string): IEvent {
        return (eventIdList.includes(id) ? require(`./EventList/${id}.ts`) : require(`./EventList/Unknown.ts`)).eventInfos as IEvent;
    }

    static getEventsByIds(ids: string[]): IEvent[] {
        return ids.map((id) => this.getById(id));
    }

    static getImage(eventInfos: IEvent): string {
        console.log(`${Constants.IMAGE_PATH}event/${eventInfos.image}${Constants.IMAGE_EXT}`);
        return eventInfos.image === "unknown" ? Constants.UNKNOWN_PATH : `${Constants.IMAGE_PATH}events/${eventInfos.image}${Constants.IMAGE_EXT}`;
    }

    static pickRandomEvent(): IEvent {
        return this.pickRandomEventInIdList(eventIdList.filter((v) => v !== "Unknown"));
    }

    static pickRandomEventInIdList(ids: string[]): IEvent {
        return this.getById(ids[Math.floor(Math.random() * ids.length)]);
    }

    static getByClassRequirement(classe: string): IEvent {
        let foundIEvent: IEvent | undefined = undefined;
        eventIdList.forEach(event => {
            const e = EventController.getById(event);
            if (!foundIEvent && e.classe === classe) foundIEvent = e;
        });
        return foundIEvent ?? this.pickRandomEvent();
    }
}