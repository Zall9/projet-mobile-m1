import {IClass} from "./IClass";
import Constants from "../Constants";

export class ClassController {
    static getById(id: string): IClass {
        return require((`./ClassList/${id}.ts`)) as IClass;
    }

    static getClassesByIds(ids: string[]): IClass[] {
        return ids.map((id) => this.getById(id));
    }

    static getImage(classInfo: IClass): string {
        return `${Constants.IMAGE_PATH}class/${classInfo.image}${Constants.IMAGE_EXT}`;
    }
}