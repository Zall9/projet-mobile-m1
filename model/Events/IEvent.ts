import { IOutput } from "./IOutput";

export abstract class IEvent {
  abstract id: string;
  abstract nom: string;
  abstract description: string;
  abstract image: string;
  abstract sorties: IOutput[];
  abstract classe?: string;
}